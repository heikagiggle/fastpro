import RegisterForm from '../components/register-form';
import { PageParams } from '../../../utils/type';

const Register = ({ searchParams }: PageParams) => {
  const step = searchParams.step ?? '1';
  return (
    <div>
      <RegisterForm step={step}/>
    </div>
  );
};

export default Register;
