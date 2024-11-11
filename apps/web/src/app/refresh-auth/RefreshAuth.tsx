"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function RefreshAuth() {
  const params = useSearchParams();
  const redirectUrl = params.get('redirect_url');

  useEffect(() => {
    if (!redirectUrl) return;
  }, [redirectUrl]);

  return (
    <div className={'h-screen'}>
      <p>loading ...</p>
    </div>
  );
}
