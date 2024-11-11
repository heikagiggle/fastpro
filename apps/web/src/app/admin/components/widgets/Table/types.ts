import { ApiResponse } from '@app/types';
import { ReactNode } from 'react';

export type TableHeadingProp = ReadonlyArray<{
  title: string;
  className?: string;
}>;

export type TableBodyKeys<
  T extends TableHeadingProp,
  TI = T[Exclude<keyof T, keyof []>]
> = TI extends { key: string } ? TI['key'] : never;

export type TableBodyProp<T, TH extends TableHeadingProp> = {
  [key in TableBodyKeys<TH>]: (data: T) => ReactNode;
};

export type TableFetcher<T> = () => Promise<ApiResponse<T[]>>;
