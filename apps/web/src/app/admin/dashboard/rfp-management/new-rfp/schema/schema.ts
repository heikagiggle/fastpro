import { z } from 'zod';

export const NewRfpSchema = z.object({
  category: z.string(),
  title: z.string(),
  deadline: z.date(),
  start_date: z.string(),
  end_date: z.string(),
  budget: z.string(),
  payment_terms: z.string(),
  evaluation:z.string().optional(),
  description: z.string().optional(),
  eligibility: z.string().optional(),
  terms: z.string().optional(),
  attachments: z.string().optional(),
});

export type NewRfpData = z.infer<typeof NewRfpSchema>;
