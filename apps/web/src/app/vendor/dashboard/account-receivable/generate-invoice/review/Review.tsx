'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import SendModal from './modal/Send';
import { TextInput } from '../../../../../components/inputs/text-input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextAreaInput } from '../../../../../components/inputs/textarea-input';

const ReviewSchema = z.object({
  invoiceNo: z.string(),
  date: z.string(),
  tax: z.string(),
  notes: z.string().optional(),
});

export type ReviewData = z.infer<typeof ReviewSchema>;

const Review = () => {
  const router = useRouter();

  const handler = useForm<ReviewData>({
    resolver: zodResolver(ReviewSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: ReviewData) => {
    console.log(data);
    router.push('/admin/dashboard');
  };

  return (
    <div className="w-[40%] flex flex-col justify-between rounded-xl py-4 px-8 bg-[#EEEEEE]">
      <div>
        <h2 className="text-[#121722] text-center py-2 items-center font-semibold">
          Review
        </h2>

        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-x-16">
            <label className="font-medium w-[173px]">Invoice No</label>
            <TextInput
              title="invoiceNo"
              label=""
              handler={handler}
              className="w-[260px] bg-white"
            />
          </div>
          <div className="flex gap-x-16">
            <label className="font-medium w-[173px]">Due date</label>
            <TextInput
              title="date"
              label=""
              handler={handler}
              className="w-[260px] bg-white"
            />
          </div>
          <div className="flex gap-x-16">
            <label className="font-medium w-[173px]">Tax%</label>
            <TextInput
              title="tax"
              label=""
              handler={handler}
              className="w-[260px] bg-white"
            />
          </div>
          <div className="flex gap-x-16">
            <label className="font-medium w-[173px]">Notes</label>
            <TextAreaInput
              title="tax"
              label=""
              handler={handler}
              className="w-[260px] h-[110px] bg-white"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-between gap-x-3 text-white">
        <button
          className="containerBorder border-[#1018280D] font-semibold px-6 py-2 text-sm rounded-lg cursor-pointer text-black"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <SendModal />
      </div>
    </div>
  );
};

export default Review;
