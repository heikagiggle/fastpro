import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { TemplateType, PaymentTypes } from './db.enums';

export type booking = {
  id: Generated<string>;
  first_name: string;
  last_name: string;
  phone: string | null;
  email: string;
  note: string | null;
  date: Timestamp;
  start_time: Timestamp;
  end_time: Timestamp;
  status: string;
  url: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type business = {
  id: Generated<string>;
  name: string;
  industry: string | null;
  email: string | null;
  logo: string | null;
  location: string | null;
  tagline: string | null;
  brief: string | null;
  notes: string | null;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type contact = {
  id: Generated<string>;
  name: string;
  phone: string;
  email: string;
  brief: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type order = {
  id: Generated<string>;
  customer_id: string;
  business_id: string;
  template_id: string;
  amount: number;
  payment_type: Generated<string>;
  payment_plan: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type organisation = {
  id: Generated<string>;
  owner: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type profile = {
  id: Generated<string>;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  email: string;
  profile_image: string | null;
  dob: Timestamp | null;
  location: string | null;
  note: string | null;
  user_id: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type role = {
  id: Generated<string>;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
  deleted_at: Timestamp | null;
  name: string;
  permissions: unknown;
};
export type template = {
  id: Generated<string>;
  category_id: string;
  type: string;
  cover_image: string;
  prototype_link: string;
  price: number;
  features: string[];
  description: string;
  files: string[];
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type template_booking = {
  id: Generated<string>;
  booking_id: string;
  template_id: string;
  client_id: string | null;
  payment_type: Generated<string>;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type template_category = {
  id: Generated<string>;
  name: string;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type user = {
  id: Generated<string>;
  role_id: string;
  organisation_id: string | null;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type DB = {
  booking: booking;
  business: business;
  contact: contact;
  order: order;
  organisation: organisation;
  profile: profile;
  role: role;
  template: template;
  template_booking: template_booking;
  template_category: template_category;
  user: user;
};
