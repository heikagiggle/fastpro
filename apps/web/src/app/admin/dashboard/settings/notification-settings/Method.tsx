'use client';
import { useForm } from 'react-hook-form';
import { InfoIcon } from '../../../components/icons/i';
import { ButtonComponent } from '../../../../components/button';
import { CheckboxInput } from '../../../../components/inputs/checkbox-input';

const Method = () => {
  const handler = useForm({
    mode: 'onChange',
  });


  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handler.handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-[22rem]"
    >
      <div className="flex flex-col pb-2 border-b border-[#e5e5e5]">
        <h2 className="text-[#0E121B] lg:text-base font-medium">
          Notification Preferences
        </h2>
        <p className="text-[#525866] text-sm py-1">
          Choose what notifications you want to receive.
        </p>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-4">
          <CheckboxInput label={''} handler={handler} title={'checkbox'} />
          <div className="flex flex-col gap-y-1">
            <h2 className="font-medium text-sm">Email Notifications</h2>
            <p className="text-[#666666] text-xs">
              Receive notifications via email
            </p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <CheckboxInput label={''} handler={handler} title={'checkbox'} />
          <div className="flex flex-col gap-y-1">
            <h2 className="font-medium text-sm">Push Notifications</h2>
            <p className="text-[#666666] text-xs">
              Get real-time updates and alerts directly on your device
            </p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <CheckboxInput label={''} handler={handler} title={'checkbox'} />
          <div className="flex flex-col gap-y-1">
            <h2 className="font-medium text-sm">SMS Notifications</h2>
            <p className="text-[#666666] text-xs">
              Receive notifications via SMS{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-x-2 bg-[#EBF1FF] p-3 rounded-lg">
        <InfoIcon primaryColor="#335CFF" />
        <p className="text-xs text-[#666666] ">
          Maximize your app usage by leaving notification settings active.
        </p>
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

export default Method;
