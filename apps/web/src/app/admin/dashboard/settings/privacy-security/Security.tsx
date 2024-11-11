'use client';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SelectionComponent } from '../../../../components/widgets/SelectionComponent';
import { Envelope } from '../../../../components/icons/envelope';
import { ChatIcon } from '../../../components/icons/chat';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';

const SecuritySchema = z.object({
  code: z.string(),
});

export type SecuritySchema = z.infer<typeof SecuritySchema>;
const Security = () => {
  const handler = useForm<SecuritySchema>({
    resolver: zodResolver(SecuritySchema),
    mode: 'onChange',
  });

  const onSubmit = (data: SecuritySchema) => {
    console.log(data);
  };
  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[22rem]"
      >
        <div className="flex flex-col pb-2 border-b border-[#e5e5e5]">
          <h2 className="text-[#0E121B] lg:text-base font-medium">
            2FA Security
          </h2>
          <p className="text-[#525866] text-sm py-1">
            Enable two-factor authentication to your account.
          </p>
        </div>

        <SelectionComponent
          name="code"
          label=""
          options={[
            {
              label: 'SMS Code',
              description:
                'Receive a one-time verification code via SMS to enter during login.',
              value: 'sms_code',
              icon: ChatIcon,
            },
            {
              label: 'Email Code',
              description:
                'Get a temporary verification code sent to your email for added security.',
              value: 'email_code',
              icon: Envelope,
            },
          ]}
        />

        <SubmitButton
          className={'text-sm rounded-lg px-3 w-full'}
          type="submit"
        >
          Enable 2FA Security
        </SubmitButton>
      </form>
    </Form>
  );
};

export default Security;
