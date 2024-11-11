import React from 'react';

const Invoice = () => {
  // TODO
  return (
    <div className="w-[60%] p-4 rounded-xl border border-[rgba(0,0,0,0.3)] bg-white flex flex-col">
      <div className="bg-[#F2F5F9] px-6 py-2 rounded-lg">
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between py-2">
            <p className="text-lg text-[#121722] font-bold">
              Invoice
            </p>

            <div>
              <p className="text-[#60737D] text-xs">Invoice No.</p>
              <p className="font-bold text-sm">#000123</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-[#60737D] text-xs">Bill from:</p>
              <p className="py-2 text-sm text-[#121722] font-bold">
                Vendor Name
              </p>
              <p className="text-[#121722] text-xs">Address / Contact Info</p>
            </div>

            <div className="flex flex-col text-xs text-right gap-y-3">
              <div>
                <p className="text-[#60737D] text-xs">Issued on</p>
                <p className="text-xs text-[#121722]">1st July 2024</p>
              </div>
              <div>
                <p className="text-[#60737D] text-xs">Payment Due</p>
                <p className="text-xs text-[#121722]">December 22, 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="mt-10 mx-8 flex flex-grow flex-col">
        <table className="w-full text-xs flex-grow border-collapse h-full">
       
          <thead>
            <tr>
              <th className="py-2 text-left text-[#121722] font-bold">
                Description
              </th>
              <th className="py-2 text-right text-[#60737D]">Qty.</th>
              <th className="py-2 text-right text-[#60737D]">Price</th>
              <th className="py-2 text-right text-[#60737D]">Total</th>
            </tr>
          </thead>

          <tbody className='mt-0'>
            <tr>
              <td className="py-4 text-[#121722]">Invoice Item 1</td>
              <td className="py-4 text-right text-[#60737D]">1</td>
              <td className="py-4 text-right text-[#60737D]">4,000.00</td>
              <td className="py-4 text-right">4,000.00</td>
            </tr>
          </tbody>
     

          <tfoot className="mt-auto">
            <tr>
              <td colSpan={3} className="py-2 text-right text-[#60737D]">
                Sub Total (USD)
              </td>
              <td className="py-2 text-right text-[#60737D]">4,000.00</td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 text-right text-[#121722]">
                Tax
              </td>
              <td className="py-2 text-right text-[#121722]">120.00</td>
            </tr>
            <tr className="bg-[#F2F5F9]">
              <td
                colSpan={3}
                className="py-2 text-right font-semibold text-[#60737D]"
              >
                Total <span className="text-[#121722]">(USD)</span>
              </td>
              <td className="py-2 text-right font-bold text-[#121722]">
                4,120.00
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
