import React from 'react';
import { Globe } from '../icons/globe';
import { ArrowDown } from '../icons/arrow-down';

const AuthFooter = () => {
  return (
    <div className="py-6 flex px-16 justify-between border-[#E5E5E5] border-b pb-5">
      <div>
      © 2024 FastPro
      </div>
      <div className="flex items-center gap-x-4">
        <Globe/>
        <p>ENG</p>
        <ArrowDown className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default AuthFooter;
