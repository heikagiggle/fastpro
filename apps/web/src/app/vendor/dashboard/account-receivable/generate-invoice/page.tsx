import React from 'react';
import Invoice from './invoice/Invoice';
import Review from './review/Review';

const GenerateInvoice = () => {
  return (
    <div className="flex gap-4 h-screen">
      <Invoice />
      <Review />
    </div>
  );
};

export default GenerateInvoice;
