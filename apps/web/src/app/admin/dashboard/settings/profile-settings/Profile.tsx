'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { ImageUploader } from '../../../../components/uploader/image-uploader';
import { TextInput } from '@app/components/lib/form/text-input';
import { TextAreaInput } from '@app/components/lib/form/textarea-input';
import { InfoIcon } from '../../../components/icons/i';

const ProfileSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  title: z.string().optional(),
  biography: z.string().optional(),
  image: z.string().optional(),
});

export type ProfileData = z.infer<typeof ProfileSchema>;

const Profile = () => {
  const handler = useForm<ProfileData>({
    resolver: zodResolver(ProfileSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ProfileData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[22rem]"
      >
        <div className="flex items-center py-4">
          <ImageUploader name={'image'} />
          <div className="text-left ml-4">
            <label className="text-sm text-[#0D0D0D] font-medium">
              Upload Image
              <span className="block text-[#666666] text-xs font-normal">
                Min 400x400px, PNG or JPEG
              </span>
            </label>
          </div>
        </div>

        <TextInput
          name={'first_name'}
          label={'First Name*'}
          placeholder={'Enter first name'}
        />

        <TextInput
          name={'last_name'}
          label={'Last Name*'}
          placeholder={'Enter first name'}
        />

        <TextInput
          name={'title'}
          label={'Title (optional)'}
          placeholder={'Enter first name'}
        />

        <TextAreaInput
          name={'biography'}
          label={'Biography (optional)'}
          placeholder={'Describe yourself...'}
          className="h-[5.5rem]"
        />

        <div className="flex gap-x-1 items-center">
          <InfoIcon />
          <p className="text-xs text-[#666666]">It will be displayed on your profile.</p>
        </div>

       
        <div className="flex gap-x-3">
          <button className="py-1 px-4 rounded-lg border-2 border-[#e5e5e5] w-full">Discard</button>
          <SubmitButton className={'text-sm rounded-lg px-3 w-full'} type="submit">
            Apply Changes
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default Profile;
