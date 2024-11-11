import {z} from 'zod'

export const CompanyDetailsSchema = z.object({
    companyName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    regNumber:z.string(),
    taxNumber: z.string(),
    phone: z.string(),
    bvn: z.string(),
})

export type CompanyDetailsData = z.infer<typeof CompanyDetailsSchema>