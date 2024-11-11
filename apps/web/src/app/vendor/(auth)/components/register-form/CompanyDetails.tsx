'use client';
import { ContainerProps } from '../../../../utils/type';
import Link from 'next/link';
import { TextInput } from '../../../../components/inputs/text-input';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Profile } from '../../../../components/icons/profile';
import { CompanyDetailsData } from './schema/schema';
import { CompanyDetailsSchema } from './schema/schema';
import { TextAreaInput } from '../../../../components/inputs/textarea-input';
import { FileUploader } from '../../../../components/uploader/file-uploader';

const CompanyDetails = ({ onPrevStep, onNextStep }: ContainerProps) => {
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
            Company details
          </h2>
          <p className="text-[#666666] sm:text-base text-sm py-1">
            Finish setting up your account
          </p>
        </div>

        <TextInput
          label={'Business Name*'}
          handler={handler}
          title={'businessName'}
          placeholder={'Enter Business  name'}
        />

        <TextInput
          label={'Business registration number*'}
          handler={handler}
          title={'regNumber'}
          placeholder={'Enter your business registration number'}
        />

        <FileUploader name="certificate" />

        <TextInput
          label={'Tax identification number*'}
          handler={handler}
          title={'taxNumber'}
          placeholder={'Enter your tax identification number'}
        />

        <TextInput
          label={'Sector*'}
          handler={handler}
          title={'sector'}
          placeholder={'Enter your sector'}
        />

        <TextAreaInput
          label={'Business Description*'}
          handler={handler}
          title={'businessDesc'}
          placeholder={''}
        />

        <FileUploader name="businessLogo" />

        <div className="flex gap-x-3 justify-center mt-2">
          <ButtonComponent
            className={
              'text-sm py-2 flex w-full rounded-lg bg-[#F2F2F2] text-black'
            }
            type="button"
            onClick={onPrevStep}
          >
            Back
          </ButtonComponent>
          <ButtonComponent
            className={'text-sm flex w-full py-2 rounded-lg'}
            type="submit"
          >
            Continue
          </ButtonComponent>
        </div>
      </form>

      <div className="text-[#666666] pt-4 text-center">
        Already have an account?
        <Link
          href="/vendor/login"
          className="cursor-pointer pl-1 text-[#7209B7] font-medium underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default CompanyDetails;
