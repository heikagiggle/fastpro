'use client';

import { useRouter } from 'next/navigation';

import { BackIcon } from './icons/back-icon';

export function BackTemplateButton({ text }: { text?: string }) {
  const router = useRouter();
  return (
    <button className="flex gap-2 text-sm md:text-base border-2 border-[#0A0D1408] py-2 px-3" onClick={() => router.back()}>
      <BackIcon className="mt-1.5" />
      {text ?? 'Back to Template'}
    </button>
  );
}
