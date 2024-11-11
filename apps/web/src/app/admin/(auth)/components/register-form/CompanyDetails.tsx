'use client';
import { ContainerProps } from '../../../../utils/type';
import Link from 'next/link';
import { TextInput } from '../../../../components/inputs/text-input';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Profile } from '../../../../components/icons/profile';
import { CompanyIcon } from '../../../../components/icons/company-icon';
import { MiniProfileIcon } from '../../../../components/icons/mini-profile';
import { CompanyDetailsData } from './schema/schema';
import { CompanyDetailsSchema } from './schema/schema';


const CompanyDetails = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<CompanyDetailsData>({
    resolver: zodResolver(CompanyDetailsSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CompanyDetailsData) => {
    console.log(data);
    onNextStep && onNextStep();
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
          <h2 className="text-[#0D0D0D] sm:text-2xl text-lg font-medium">
            Create an account
          </h2>
          <p className="text-[#666666] sm:text-base text-sm py-1">
            Sign up to unlock the full potential of your organisations
            performance.
          </p>
        </div>

        <TextInput
          label={'Company Name*'}
          handler={handler}
          title={'companyName'}
          placeholder={'Enter company name'}
          icon={<CompanyIcon />}
        />
        <TextInput
          label={'First Name*'}
          handler={handler}
          title={'firstName'}
          placeholder={'Enter first name'}
          icon={<MiniProfileIcon />}
        />
        <TextInput
          label={'Last Name*'}
          handler={handler}
          title={'lastName'}
          placeholder={'Enter last name'}
          icon={<MiniProfileIcon />}
        />
        <TextInput
          label={'Company registration number*'}
          handler={handler}
          title={'regNumber'}
          placeholder={'Enter your company registration number'}
          icon={<CompanyIcon />}
        />
        <TextInput
          label={'Tax identification number*'}
          handler={handler}
          title={'taxNumber'}
          placeholder={'Enter your tax identification number'}
          icon={<CompanyIcon />}
        />
        <TextInput
          label={'Phone Number*'}
          handler={handler}
          title={'phone'}
          placeholder={'Enter your phone number'}
        />
        <TextInput
          label={'BVN*'}
          handler={handler}
          title={'bvn'}
          placeholder={'Enter your bvn'}
        />
        

        <ButtonComponent className={'text-sm py-2 rounded-lg'} type="submit">
          Continue
        </ButtonComponent>
      </form>
      <div className="text-[#666666] pt-4 text-center">
        Already have an account?
        <Link
          href="/admin/login"
          className="cursor-pointer text-[#7209B7] font-medium underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default CompanyDetails;
