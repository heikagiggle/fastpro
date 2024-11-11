export interface EmailBody {
  to: string;
  data?: Record<string, string>;
  key: string;
}

export interface EmailTemplate {
  from: string;
  html: (data: Record<string, string>) => string;
  subject: string;
}
