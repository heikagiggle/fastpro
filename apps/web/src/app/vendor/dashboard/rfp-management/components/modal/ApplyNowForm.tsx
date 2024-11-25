import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@app/components/lib/ui/form';
import { TextAreaInput } from '@app/components/lib/form/textarea-input';
import { TextInput } from '@app/components/lib/form/text-input';
import { FileUploader } from '../../../../../components/uploader/file-uploader';
import { ContainerProps } from '../../../../../utils/type';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';

const ApplyProfileSchema = z.object({
  title: z.string(),
  summary: z.string(),
  portfolio: z.string().optional(),
  attachments: z.string().optional(),
});

export type ApplyProfileData = z.infer<typeof ApplyProfileSchema>;
const ApplyNowForm = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<ApplyProfileData>({
    resolver: zodResolver(ApplyProfileSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: ApplyProfileData) => {
    console.log(data);
    onNextStep && onNextStep();
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <TextInput
          name={'title'}
          label={'Proposal Title '}
          placeholder={'Enter'}
        />
        <TextAreaInput
          name={'summary'}
          label={'Executive Summary'}
          placeholder={'summary...'}
          className="h-[100px]"
        />

        <FileUploader name="portfolio" />

        <FileUploader name="attachments" />

        <div className="flex items-center gap-x-3 full">
          <button
            className={
              'text-sm py-2 px-3 rounded-lg w-full shadow-sm border border-[#E5E5E5] bg-transparent text-black'
            }
          >
            cancel
          </button>
          <SubmitButton
            className={'text-sm py-2 rounded-lg w-full'}
            type="submit"
          >
            Send
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default ApplyNowForm;
