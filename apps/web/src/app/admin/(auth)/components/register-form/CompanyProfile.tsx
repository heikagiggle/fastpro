'use client';
import { ContainerProps } from '../../../../utils/type';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ImageUploader } from '../../../../components/uploader/image-uploader';
import { SelectInput } from '@app/components/lib/form/select-input';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { CompanyProfileIcon } from '../../../../components/icons/company-profile';

const CompanyProfileSchema = z.object({
  company_size: z.string(),
  company_sector: z.string(),
  company_logo: z.string(),
  company_id: z.string(),
});

export type CompanyProfileData = z.infer<typeof CompanyProfileSchema>;

const CompanyProfile = ({ onNextStep }: ContainerProps) => {
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

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="text-center items-center">
            <h2 className="text-[#0D0D0D] text-2xl font-medium">
              Set up your company profile
            </h2>
            <p className="text-[#666666] text-base py-1">
              Kindly provide the following information
            </p>
          </div>

          <div className="flex items-center py-4">
            <ImageUploader name={'company_logo'} />
            <div className="text-left ml-4">
              <label className="text-sm text-[#0D0D0D] font-medium">
                Company Logo
                <span className="block text-[#666666] text-xs font-normal">
                  Min 400x400px, PNG or JPEG
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center py-4">
            <ImageUploader name={'company_id'} />
            <div className="text-left ml-4">
              <label className="text-sm text-[#0D0D0D] font-medium">
                Company ID (Optional)
                <span className="block text-[#666666] text-xs font-normal">
                  Min 400x400px, PNG or JPEG
                </span>
              </label>
            </div>
          </div>

          <SelectInput
            name={'company_sector'}
            label={'Company Sector*'}
            placeholder={'Select Company Size'}
            items={[
              {
                label: '1 - 5',
                value: 'SIZE_1_5',
                keywords: ['one', '1 - 5', 'five'],
              },
              {
                label: '6 - 11',
                value: 'SIZE_6_11',
                keywords: ['six', '6 - 11', 'eleven'],
              },
            ]}
          />

          <SelectInput
            name={'company_size'}
            label={'Compay Size*'}
            placeholder={'Select Company Size'}
            items={[
              {
                label: '1 - 5',
                value: 'SIZE_1_5',
                keywords: ['one', '1 - 5', 'five'],
              },
              {
                label: '6 - 11',
                value: 'SIZE_6_11',
                keywords: ['six', '6 - 11', 'eleven'],
              },
            ]}
          />

          <SubmitButton className={'text-sm py-2 rounded-lg'} type="submit">
          Apply Changes
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default CompanyProfile;
