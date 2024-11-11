'use client';

import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type PaginationContext = {
  page: number;
  size: number;
  totalPages: number;
  totalItems: number;
  setPage: Dispatch<SetStateAction<number>>;
  setSize: Dispatch<SetStateAction<number>>;
  setTotalPages: Dispatch<SetStateAction<number>>;
  setTotalItems: Dispatch<SetStateAction<number>>;
};

export const PaginationContext = createContext<PaginationContext>({
  page: 0,
  size: 10,
  totalPages: 1,
  totalItems: 0,
  setPage: () => null,
  setSize: () => null,
  setTotalItems: () => null,
  setTotalPages: () => null,
});

export const usePagination = () => useContext(PaginationContext);
