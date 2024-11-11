'use client';
import { ContainerProps } from '../../../../utils/type';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput } from '../../../../components/inputs/text-input';
import { ButtonComponent } from '../../../../components/button';
import { CompanyProfileIcon } from '../../../../components/icons/company-profile';

const CompanyProfileSchema = z.object({
  bvn: z.string(),
  phoneNumber: z.string(),
});

export type CompanyProfileData = z.infer<typeof CompanyProfileSchema>;

const CompanyProfile = ({ onPrevStep, onNextStep }: ContainerProps) => {
  const handler = useForm<CompanyProfileData>({
    resolver: zodResolver(CompanyProfileSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CompanyProfileData) => {
    console.log(data);
    onNextStep && onNextStep();
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <CompanyProfileIcon />
      </div>
      
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="text-center items-center">
          <h2 className="text-[#0D0D0D] text-2xl font-medium">
            Set up virtual account
          </h2>
          <p className="text-[#666666] text-base py-1">
            Finish setting up your account
          </p>
        </div>

        <TextInput
          label={'Phone number*'}
          handler={handler}
          title={'phoneNumber'}
          placeholder={'Enter your phone number'}
        />
        <TextInput
          label={'Bvn*'}
          handler={handler}
          title={'bvn'}
          placeholder={'Enter your bvn'}
        />

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
    </div>
  );
};

export default CompanyProfile;
