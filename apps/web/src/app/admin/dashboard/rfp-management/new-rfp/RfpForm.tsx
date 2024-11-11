'use client';
import { Form } from '@app/components/lib/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NewRfpData, NewRfpSchema } from './schema/schema';
import { VendorArrowIcon } from '../../../components/icons/vendor-back-arrow';
import { useRouter } from 'next/navigation';
import ServiceDetailsForm from './components/ServiceDetailsForm';
import PaymentForm from './components/PaymentForm';
import EligibilityForm from './components/EligibilityForm';
import NewRfpModal from './components/modal/NewRfpModal';

const RfpForm = () => {
  const router = useRouter();

  const handler = useForm<NewRfpData>({
    resolver: zodResolver(NewRfpSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: NewRfpData) => {
    console.log(data);
  };
  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="border border-[#E5E5E5] rounded-xl p-4"
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center text-sm ">
            <div className={'cursor-pointer'} onClick={() => router.back()}>
              <VendorArrowIcon />
            </div>

            <p className="font-medium text-lg text-[#202020]">
              Create new service request
            </p>
          </div>

          <div className="flex gap-x-3">
            <button
              className=" containerBorder border-[#1018280D] font-semibold px-3 py-2 text-sm rounded-lg cursor-pointer w-full whitespace-nowrap"
              onClick={() => router.back()}
            >
              Save as Draft
            </button>
           <NewRfpModal/>
          </div>
        </div>

        <ServiceDetailsForm />
        <PaymentForm />
        <EligibilityForm />
      </form>
    </Form>
  );
};

export default RfpForm;
