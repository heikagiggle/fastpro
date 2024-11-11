import { z } from 'zod';

export const CompanyDetailsSchema = z.object({
  businessName: z.string(),
  regNumber: z.string(),
  taxNumber: z.string(),
  sector: z.string(),
  businessDesc: z.string(),
  // businessLogo: z.string(),
  // certificate: z.string(),
});

export type CompanyDetailsData = z.infer<typeof CompanyDetailsSchema>;
