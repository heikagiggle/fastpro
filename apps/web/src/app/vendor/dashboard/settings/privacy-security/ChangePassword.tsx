'use client';
import { useState } from 'react';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PasswordInput } from '../../../../components/inputs/password-input';
import { Locked } from '../../../../components/icons/locked';
import { Check } from '../../../../components/icons/check';
import { Cancel } from '../../../../components/icons/cancel';
import { useRouter } from 'next/navigation';

const ChangePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long'),
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type ChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;

const ChangePassword = () => {
  const router = useRouter();

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [requirements, setRequirements] = useState({
    length: false,
    number: false,
    uppercase: false,
  });

  const handler = useForm<ChangePasswordSchema>({
    resolver: zodResolver(ChangePasswordSchema),
    mode: 'onChange',
  });

  const handlePasswordChange = (password: string) => {
    const length = password.length >= 8;
    const number = /\d/.test(password);
    const uppercase = /[A-Z]/.test(password);

    setRequirements({
      length,
      number,
      uppercase,
    });

    const strength = [length, number, uppercase].filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const onSubmit = (data: ChangePasswordSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handler.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col pb-2 border-b border-[#e5e5e5]">
        <h2 className="text-[#0E121B] lg:text-base font-medium">
          Change Password
        </h2>
        <p className="text-[#525866] text-sm py-1">
          Update password for enhanced account security.
        </p>
      </div>

      <PasswordInput
        label={'Current Password*'}
        handler={handler}
        title={'currentPassword'}
        placeholder={'• • • • • • • • • •'}
        icon={<Locked />}
      />

      <PasswordInput
        label={'New Password*'}
        handler={handler}
        title={'newPassword'}
        placeholder={'• • • • • • • • • •'}
        icon={<Locked />}
      />

      <PasswordInput
        label={'Password*'}
        handler={handler}
        title={'confirmPassword'}
        placeholder={'• • • • • • • • • •'}
        icon={<Locked />}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />

      <div className="flex gap-1 mt-1">
        <div
          className={`flex-1 h-2 ${
            passwordStrength >= 1 ? 'bg-[#E94A3F]' : 'bg-gray-200'
          }`}
          style={{ width: '33.33%' }}
        ></div>

        <div
          className={`flex-1 h-2 ${
            passwordStrength >= 2 ? 'bg-[#FF8447]' : 'bg-gray-200'
          }`}
          style={{ width: '33.33%' }}
        ></div>

        <div
          className={`flex-1 h-2 ${
            passwordStrength === 3 ? 'bg-[#dd9792]' : 'bg-gray-200'
          }`}
          style={{ width: '33.33%' }}
        ></div>
      </div>

      <div className="mt-2">
        <ul>
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                readOnly
                checked={requirements.uppercase}
                className="hidden"
              />
              <span
                className={`inline-flex justify-center items-center w-5 h-5 rounded-full border-white mr-2 ${
                  requirements.uppercase ? 'bg-[#1FC16B]' : 'bg-[#999999]'
                }`}
              >
                {requirements.uppercase ? <Check /> : <Cancel />}
              </span>
              At least 1 uppercase
            </label>
          </li>

          <li className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                readOnly
                checked={requirements.number}
                className="hidden"
              />
              <span
                className={`inline-flex justify-center items-center w-5 h-5 rounded-full border-white mr-2 ${
                  requirements.number ? 'bg-[#1FC16B]' : 'bg-[#999999]'
                }`}
              >
                {requirements.number ? <Check /> : <Cancel />}
              </span>
              At least 1 number
            </label>
          </li>

          <li className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                readOnly
                checked={requirements.length}
                className="hidden"
              />
              <span
                className={`inline-flex justify-center items-center w-5 h-5 rounded-full border-white mr-2 ${
                  requirements.length ? 'bg-[#1FC16B]' : 'bg-[#999999]'
                }`}
              >
                {requirements.length ? <Check /> : <Cancel />}
              </span>
              At least 8 characters
            </label>
          </li>
        </ul>
      </div>

      <div className="flex gap-x-3">
        <button className="py-1 px-4 rounded-lg border-2 border-[#e5e5e5] w-full">
          Discard
        </button>
        <ButtonComponent
          className={'text-sm px-2 py-1 rounded-lg w-full'}
          type="submit"
        >
          Apply Changes
        </ButtonComponent>
      </div>
    </form>
  );
};
export default ChangePassword;
