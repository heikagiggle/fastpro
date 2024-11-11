'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextInput } from '@app/components/lib/form/text-input';
import { TextAreaInput } from '@app/components/lib/form/textarea-input';
import { InfoIcon } from '../../../components/icons/i';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

const ContactInfoSchema = z.object({
  ContactInfo_name: z.string(),
  website: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
});

export type ContactInfoData = z.infer<typeof ContactInfoSchema>;

const ContactInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handler = useForm<ContactInfoData>({
    resolver: zodResolver(ContactInfoSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ContactInfoData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[22rem]"
      >
        <div className="flex flex-col">
          <h2 className="text-[#0E121B] lg:text-base font-medium">
            Contact Information
          </h2>
          <p className="text-[#525866] text-sm py-1">
            Enter your company&apos;s details for communication.
          </p>
        </div>

        <TextInput
          name={'email'}
          label={'Email Address*'}
          placeholder={'Enter your email address'}
        />

        <div className="md:col-span-2 w-full">
          {' '}
          <label htmlFor="phone-number">Phone number*</label>
          <PhoneInput
            country={'ng'}
            value={phoneNumber}
            inputClass="border rounded p-2 border-black"
            inputStyle={{
              width: '100%',
              minHeight: '50px',
              border: '2px solid #0A0D1408',
              borderRadius: '0.375rem',
            }}
          />
        </div>

        <TextAreaInput
          name={'address'}
          label={'Address*'}
          placeholder={'Enter your company address...'}
          className="h-[5.5rem]"
        />

        <div className="flex gap-x-1 items-center">
          <InfoIcon />
          <p className="text-xs text-[#666666] ">
            Input company&apos;s residential address for official records.
          </p>
        </div>

        <div className="flex gap-x-3">
          <button className="py-1 px-4 rounded-lg border-2 border-[#e5e5e5] w-full">
            Discard
          </button>
          <SubmitButton
            className={'text-sm rounded-lg px-3 w-full'}
            type="submit"
          >
            Apply Changes
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default ContactInfo;
