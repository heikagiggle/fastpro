import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Client = {
  client_id: string;
  client_secret: string;
  allowed_scopes: Generated<string[]>;
  created_at: Generated<Timestamp>;
  updated_at: Generated<Timestamp>;
};
export type DB = {
  Client: Client;
};
