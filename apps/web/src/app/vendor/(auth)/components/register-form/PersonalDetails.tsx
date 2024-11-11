'use client';
import { useState } from 'react';
import { ContainerProps } from '../../../../utils/type';
import Link from 'next/link';
import { TextInput } from '../../../../components/inputs/text-input';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckboxInput } from '../../../../components/inputs/checkbox-input';
import { Profile } from '../../../../components/icons/profile';
import { PasswordInput } from '../../../../components/inputs/password-input';
import { Envelope } from '../../../../components/icons/envelope';
import { Locked } from '../../../../components/icons/locked';
import { Check } from '../../../../components/icons/check';
import { Cancel } from '../../../../components/icons/cancel';
import { BackTemplateButton } from '../../../../components/back-template-button';
import { MiniProfileIcon } from '../../../../components/icons/mini-profile';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Briefcase } from '../../../../components/icons/briefcase';

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  checkbox: z.boolean().optional(),
  firstName: z.string(),
  lastName: z.string(),
  businessName: z.string(),
});

export type RegisterData = z.infer<typeof RegisterSchema>;

const PersonalDetails = ({ onNextStep }: ContainerProps) => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [requirements, setRequirements] = useState({
    length: false,
    number: false,
    uppercase: false,
  });

  const handler = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onChange',
  });

  // Function to check the strength of the password
  const handlePasswordChange = (password: string) => {
    const length = password.length >= 8;
    const number = /\d/.test(password);
    const uppercase = /[A-Z]/.test(password);

    // Update the requirements state
    setRequirements({
      length,
      number,
      uppercase,
    });

    // Calculate the strength based on fulfilled conditions
    const strength = [length, number, uppercase].filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const onSubmit = (data: RegisterData) => {
    console.log({ ...data, phoneNumber });
    onNextStep && onNextStep();
  };

  return (
    <div>
      <div>
        <BackTemplateButton text="Go Home" />
      </div>
      <div className="flex justify-center items-center">
        <Profile />
      </div>

      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="text-center items-center">
          <h2 className="text-[#0D0D0D] sm:text-2xl text-lg font-medium">
            Create an account
          </h2>
          <p className="text-[#666666] sm:text-base text-sm py-1">
            Sign up to unlock the full potential of your organisations
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label={'First Name*'}
            handler={handler}
            title={'firstName'}
            placeholder={'Enter your first name'}
            icon={<MiniProfileIcon />}
          />
          <TextInput
            label={'Last Name*'}
            handler={handler}
            title={'lastName'}
            placeholder={'Enter your last name'}
            icon={<MiniProfileIcon />}
          />
        </div>

        <TextInput
          label={'Business Name*'}
          handler={handler}
          title={'businessName'}
          placeholder={'Enter your business name'}
          icon={<Briefcase />}
        />
        <TextInput
          label={'Email Address*'}
          handler={handler}
          title={'email'}
          placeholder={'youremail@example.com'}
          icon={<Envelope />}
        />

        <div className="md:col-span-2 w-full">
          {' '}
          <label htmlFor="phone-number">Phone number*</label>
          <PhoneInput
            country={'ng'}
            value={phoneNumber}
            inputClass="border rounded p-2"
            inputStyle={{
              width: '100%',
              minHeight: '50px',
              border: '2px solid #0A0D1408',
              borderRadius: '0.375rem',
            }}
          />
        </div>

        <PasswordInput
          label={'Password*'}
          handler={handler}
          title={'password'}
          placeholder={'Create a unique password'}
          icon={<Locked />}
          onChange={(e) => handlePasswordChange(e.target.value)} // Track changes to the password
        />

        {/* Progress bar for password strength */}
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

        {/* Password requirements */}
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

        <div className="flex items-center gap-x-2 py-2">
          <CheckboxInput label={''} handler={handler} title={'checkbox'} />
          <p>
            I agree to the{' '}
            <Link
              href="/admin/components/register"
              className="underline font-medium"
            >
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link
              href="/admin/components/register"
              className="underline font-medium"
            >
              Privacy Policy.
            </Link>
          </p>
        </div>

        <ButtonComponent className={'text-sm py-2 rounded-lg'} type="submit">
          Register account
        </ButtonComponent>
      </form>
    </div>
  );
};

export default PersonalDetails;
