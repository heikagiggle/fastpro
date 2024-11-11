import { SuccessArrowIcon } from '../../../../../../components/icons/sucees-rfp';
import { ButtonComponent } from '../../../../../../../components/button'
import { useRouter } from 'next/navigation';

const SuccessfulRfp = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
    <div className="flex justify-center items-center">
      <SuccessArrowIcon/>
    </div>

    <div className="flex flex-col gap-y-3 text-center items-center">
      <div>
        <h2 className="text-[#0D0D0D] sm:text-2xl text-lg font-medium">
        RFP Created Successfully
        </h2>
        <p className="text-[#666666] sm:text-base text-sm py-1">
        You have successfully created a service request.
        </p>
      </div>

      <ButtonComponent
        className={'text-sm py-2 rounded-lg w-1/2'}
        type="submit"
        onClick={() => router.back()}
      >
        Done
      </ButtonComponent>
    </div>
  </div>
  )
}

export default SuccessfulRfp
