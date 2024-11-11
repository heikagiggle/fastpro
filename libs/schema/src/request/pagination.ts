import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.coerce.number().default(0),
  size: z.coerce.number().default(10),
  totalPages: z.coerce.number(),
  totalItems: z.coerce.number(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
