'use client';
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
import { useRouter } from 'next/navigation';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  checkbox: z.boolean().optional(),
});

export type LoginData = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const handler = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
    router.push('/vendor/dashboard');
  };
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <Profile />
      </div>

      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="text-center items-center">
          <h2 className="text-[#0D0D0D] text-xl font-medium">
            Log in to your account
          </h2>
          <p className="text-[#666666] text-sm py-1">
            Enter your email and password to Login
          </p>
        </div>

        <TextInput
          label={'Email Address*'}
          handler={handler}
          title={'email'}
          placeholder={'youremail@example.com'}
          icon={<Envelope />}
        />

        <PasswordInput
          label={'Password*'}
          handler={handler}
          title={'password'}
          placeholder={'Enter your password'}
          icon={<Locked />}
        />

        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-x-2">
            <CheckboxInput label={''} handler={handler} title={'checkbox'} />
            <p>Keep me logged in</p>
          </div>
          <Link
            href="/vendor/forgot"
            className="text-sm font-semibold text-center text-[#666666] underline"
          >
            Forgot Password?
          </Link>
        </div>
        <ButtonComponent className={'text-sm py-2 rounded-lg'} type="submit">
          Login
        </ButtonComponent>
      </form>
      <div className="text-[#666666] pt-4 text-center">
        Don’t have an account?{' '}
        <Link  href="/vendor/register" className="cursor-pointer text-[#7209B7] font-medium underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
