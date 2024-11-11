export const BidTableHeader = [
  { title: '', className: 'pl-5 w-[52px]' },
  { title: 'Vendor Name', className: 'pl-5 w-[253px]' },
  { title: 'Proposal Title', className: 'w-[253px]' },
  { title: 'Executive Summary', className: ' w-[253px] ' },
  { title: 'Rating', className: 'w-[143px]' },
  { title: 'Date Submitted', className: 'w-[130px] pr-5' },
] as const;

export const AccountPayableTableHeader = [
  { title: 'Invoice Number', className: 'pl-5' },
  { title: 'Project Title', className: 'pl-5 ' },
  { title: 'Vendor Name' },
  { title: 'Amount Due' },
  { title: 'Payment Terms' },
  { title: 'Invoice Date', className: 'pr-5' },
  { title: 'Status', className: 'pr-5' },
] as const;

export const CompletedPaymentTableHeader = [
  { title: 'Invoice Number', className: 'pl-5' },
  { title: 'Purchase Order ID', className: 'pl-5 ' },
  { title: 'Vendor Name' },
  { title: 'Amount Due' },
  { title: 'Payment Terms' },
  { title: 'Invoice Date', className: 'pr-5' },
  { title: 'Status', className: 'pr-5' },
] as const;

export const virtualAccountHeader = [
  { title: 'Bank Name', className: 'pl-5' },
  { title: 'Account Name', className: 'pl-5 ' },
  { title: 'Timw Stamp' },
  { title: 'Amount' },
  { title: 'Status', className: 'pr-5' },
] as const;
