import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import {
  ZodFirstPartySchemaTypes,
  ZodFirstPartyTypeKind,
  ZodObject,
  ZodRawShape,
} from 'zod';

export function zodToApi(
  schema: ZodFirstPartySchemaTypes
): SchemaObject & { isRequired?: boolean } {
  const typeMap: Partial<Record<ZodFirstPartyTypeKind, string>> = {
    [ZodFirstPartyTypeKind.ZodBoolean]: 'boolean',
    [ZodFirstPartyTypeKind.ZodString]: 'string',
    [ZodFirstPartyTypeKind.ZodDate]: 'string',
    [ZodFirstPartyTypeKind.ZodNumber]: 'number',
    [ZodFirstPartyTypeKind.ZodObject]: 'object',
    [ZodFirstPartyTypeKind.ZodArray]: 'array',
    [ZodFirstPartyTypeKind.ZodNativeEnum]: 'string',
    [ZodFirstPartyTypeKind.ZodUnion]: 'object',
  };

  const property = zodFieldTpApi(schema);
  const propertyDef = property.schema._def;

  const field: SchemaObject & { isRequired?: boolean } = {
    type: typeMap[propertyDef.typeName],
    nullable: property.nullable,
    description: propertyDef.description,
    isRequired: property.required,
  };

  if (propertyDef.typeName === ZodFirstPartyTypeKind.ZodArray) {
    field.items = zodToApi(propertyDef.type);
  }

  if (propertyDef.typeName === ZodFirstPartyTypeKind.ZodObject) {
    const required: string[] = [];

    field.properties = Object.fromEntries(
      Object.entries(propertyDef.shape() as ZodObject<ZodRawShape>).map(
        ([key, val]) => {
          const property = zodFieldTpApi(val);
          if (property.required) required.push(key);
          return [key, zodToApi(property.schema)];
        }
      )
    );

    field.required = required;
  }

  if (propertyDef.typeName === ZodFirstPartyTypeKind.ZodUnion) {
    field.oneOf = propertyDef.options.map((sc: ZodFirstPartySchemaTypes) =>
      zodToApi(sc)
    );
  }

  if (propertyDef.typeName === ZodFirstPartyTypeKind.ZodNativeEnum) {
    field.enum = Object.values(propertyDef.values);
  }

  if (propertyDef.typeName === ZodFirstPartyTypeKind.ZodLiteral) {
    field.enum = [propertyDef.value];
  }

  return field;
}

type Property = {
  required?: boolean;
  nullable?: boolean;
  description?: string;
  schema: ZodFirstPartySchemaTypes;
};

export function zodFieldTpApi(
  schema: ZodFirstPartySchemaTypes,
  prev: Omit<Property, 'schema'> = { required: true, nullable: false }
): Property {
  if (schema._def.description) prev.description = schema._def.description;

  switch (schema._def.typeName) {
    case ZodFirstPartyTypeKind.ZodNullable:
      return zodFieldTpApi(schema._def.innerType, { ...prev, nullable: true });
    case ZodFirstPartyTypeKind.ZodOptional:
    case ZodFirstPartyTypeKind.ZodDefault:
      return zodFieldTpApi(schema._def.innerType, { ...prev, required: false });
    case ZodFirstPartyTypeKind.ZodEffects:
      return zodFieldTpApi(schema._def.schema, { ...prev, required: false });
    default:
      return { ...prev, schema: schema };
  }
}
