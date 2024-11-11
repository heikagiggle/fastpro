'use client';

import { PropsWithChildren, useState } from 'react';

import { PaginationContext } from './context';

export function PaginationProvider(props: PropsWithChildren) {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        size,
        setSize,
        totalPages,
        setTotalPages,
        totalItems,
        setTotalItems,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
}
