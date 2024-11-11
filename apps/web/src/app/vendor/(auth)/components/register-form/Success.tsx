import { ProfileSuccessIcon } from '../../../../components/icons/profile-success';
import { ButtonComponent } from '../../../../components/button';
import { useRouter } from 'next/navigation';

const Success = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center">
        <ProfileSuccessIcon />
      </div>

      <div className="flex flex-col gap-y-3 text-center items-center">
        <div>
          <h2 className="text-[#0D0D0D] sm:text-2xl text-lg font-medium">
            Account setup completed!
          </h2>
          <p className="text-[#666666] sm:text-base text-sm py-1">
            You can now enjoy FastPro.
          </p>
        </div>

        <ButtonComponent
          className={'text-sm py-2 rounded-lg w-full'}
          type="submit"
          onClick={() => router.push('/vendor/dashboard')}
        >
          Done
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Success;
