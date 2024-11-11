import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  HttpStatus,
  SetMetadata,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import {
  z,
  ZodFirstPartySchemaTypes,
  ZodFirstPartyTypeKind,
  ZodObject,
  ZodRawShape,
} from 'zod';

import { zodToApi } from '../helpers/zodToApi';

type Schema = {
  body?: ZodFirstPartySchemaTypes;
  query?: ZodObject<ZodRawShape>;
  params?: ZodObject<ZodRawShape>;
  response?: ZodFirstPartySchemaTypes;
  authorized?: boolean;
};

export const BODY_SCHEMA = Symbol('BODY_SCHEMA');
export const QUERY_SCHEMA = Symbol('QUERY_SCHEMA');
export const PARAMS_SCHEMA = Symbol('PARAMS_SCHEMA');
export const RESPONSE_SCHEMA = Symbol('RESPONSE_SCHEMA');

export function Schema(schema?: Schema) {
  const decorators: Array<
    ClassDecorator | MethodDecorator | PropertyDecorator
  > = [];

  if (schema) {
    const { body, params, response, query } = schema;

    if (body) {
      decorators.push(
        SetMetadata(BODY_SCHEMA, body),
        ApiBody({ schema: zodToApi(body) })
      );
    }

    if (query) {
      decorators.push(SetMetadata(QUERY_SCHEMA, query));
      const shape = query._def.shape();

      for (const q in shape) {
        const querySchema = shape[q];
        if (!querySchema) continue;

        const field = zodToApi(querySchema);
        decorators.push(
          ApiQuery({ name: q, schema: field, required: field.isRequired })
        );
      }
    }

    if (params) {
      decorators.push(SetMetadata(PARAMS_SCHEMA, params));
      const shape = params._def.shape();

      for (const p in shape) {
        const paramSchema = shape[p];
        if (!paramSchema) continue;

        const field = zodToApi(paramSchema);
        decorators.push(
          ApiParam({ name: p, schema: field, required: field.isRequired })
        );
      }
    }

    if (response) {
      decorators.push(
        SetMetadata(RESPONSE_SCHEMA, response),
        ApiResponse({ schema: zodToApi(response), status: HttpStatus.OK })
      );
    }

    if (schema.authorized) decorators.push(ApiBearerAuth());
  }

  return applyDecorators(...decorators);
}

export const Param = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const params = ctx.switchToHttp().getRequest().params;
    const schema = Reflect.getMetadata(
      PARAMS_SCHEMA,
      ctx.getHandler()
    ) as Schema['params'];

    if (data) {
      const keySchema = schema?._def.shape()?.[data];
      return keySchema?.parse(params?.[data]) ?? params?.[data];
    }

    return schema?.parse(params) ?? params;
  }
);

export const Query = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const query = ctx.switchToHttp().getRequest().query;
    const schema = Reflect.getMetadata(
      QUERY_SCHEMA,
      ctx.getHandler()
    ) as Schema['query'];

    if (data) {
      const keySchema = schema?._def.shape()?.[data];
      return keySchema?.parse(query?.[data]) ?? query?.[data];
    }

    return schema?.parse(query) ?? query;
  }
);

export const Body = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const body = ctx.switchToHttp().getRequest().body;
    const schema = Reflect.getMetadata(
      BODY_SCHEMA,
      ctx.getHandler()
    ) as Schema['body'];

    if (data) {
      if (schema?._def.typeName !== ZodFirstPartyTypeKind.ZodObject)
        return schema?.parse(body) ?? body;

      const keySchema = schema?._def.shape()?.[data];
      return keySchema?.parse(body?.[data]) ?? body?.[data];
    }

    return schema?.parse(body) ?? body;
  }
);

const ErrorSchema = zodToApi(
  z.object({ messages: z.string().array().optional() })
);

export const ErrorSchemas = applyDecorators(
  ApiResponse({ status: HttpStatus.BAD_REQUEST, schema: ErrorSchema }),
  ApiResponse({ status: HttpStatus.UNAUTHORIZED, schema: ErrorSchema }),
  ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    schema: ErrorSchema,
  })
);
