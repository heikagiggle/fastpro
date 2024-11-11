export const TemplateType = {
  MOBILE: 'MOBILE',
  WEBSITE: 'WEBSITE',
} as const;
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];
export const PaymentTypes = {
  INSTALLMENT: 'INSTALLMENT',
} as const;
export type PaymentTypes = (typeof PaymentTypes)[keyof typeof PaymentTypes];
