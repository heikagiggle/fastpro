'use client';
import { useRouter } from 'next/navigation';
import PersonalDetails from './PersonalDetails';
import CompanyDetails from './CompanyDetails';
import CompanyProfile from './CompanyProfile';
import Success from './Success';

const RegisterForm = ({ step }: { step?: string | boolean | string[] }) => {
  const { push } = useRouter();
  const currentStep = parseInt((step as string) ?? '0');

  const handleNextStep = () => {
    push(`?step=${currentStep + 1}`);
  };

  const handlePrevStep = () => {
    push(`?step=${currentStep - 1}`);
  };
  return (
    <div>
      {step === '1' && (
        <PersonalDetails
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '2' && (
        <CompanyDetails
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '3' && (
        <CompanyProfile
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '4' && <Success />}
    </div>
  );
};

export default RegisterForm;
