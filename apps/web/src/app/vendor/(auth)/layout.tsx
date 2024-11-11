import { ReactNode } from 'react';
import Navbar from '../../components/navbar';
import AuthFooter from '../../components/footer/AuthFooter';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='flex flex-col w-full min-h-screen'>
    <Navbar />
    <div className="flex-grow flex justify-center items-center overflow-auto">
      <div className="flex flex-col gap-6 lg:w-[30vw] p-6 bg-white rounded-xl">
        <main>{children}</main>
      </div>
    </div>
    <AuthFooter />
  </div>
  );
};

export default AuthLayout;
