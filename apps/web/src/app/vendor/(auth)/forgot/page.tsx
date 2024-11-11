import { PageParams } from '../../../utils/type';
import ResetForm from '../components/reset-form';

const ForgotPassword = ({ searchParams }: PageParams) => {
  const step = searchParams.step ?? '1';
  return (
    <div>
     <ResetForm step={step} />
    </div>
  )
}

export default ForgotPassword
