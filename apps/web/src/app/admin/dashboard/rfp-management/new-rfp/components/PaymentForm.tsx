import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { TextInput } from '@app/components/lib/form/text-input';
import { SelectInput } from '@app/components/lib/form/select-input';
import { AddNewIcon } from '../../../../components/icons/add-new';

const PaymentForm = () => {
  const { control } = useFormContext();
  const paymentTerms = useWatch({ control, name: 'payment_terms' }); // Watch for changes in payment terms
  const [milestones, setMilestones] = useState([{ milestone: '', amount: '' }]);

  // Add a new milestone
  const addMilestone = () => {
    setMilestones([...milestones, { milestone: '', amount: '' }]);
  };

  return (
    <div className="py-4 ">
      <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm">
        <p className="text-[#666666]">PAYMENT</p>
      </div>

      <div className="flex gap-4 pt-3 w-full">
        <div className="w-1/2">
          <TextInput
            name="budget"
            label="BUDGET"
            placeholder="Enter title"
          />
        </div>
        <div className="w-1/2">
          <SelectInput
            name="payment_terms"
            label="PAYMENT TERMS"
            placeholder="Select"
            items={[
              { label: 'One-Time Payment', value: 'one_time', keywords: ['one-time'] },
              { label: 'Milestones', value: 'milestones', keywords: ['milestones'] },
            ]}
          />
        </div>
      </div>

      {/*  if 'Milestones' is selected */}
      {paymentTerms === 'milestones' && (
        <div className="bg-[#F1F1F1] rounded-xl p-4 flex flex-col gap-y-3 mt-4">
          <p>Milestones</p>

          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4 pt-3 w-full">
              <div className="w-1/2">
                <SelectInput
                  name={`milestones[${index}].milestone`}
                  label="Enter Milestone"
                  placeholder="Select"
                  className="custom-select"
                  items={[
                    { label: 'First Milestone', value: 'first_milestone', keywords: ['first'] },
                    { label: 'Second Milestone', value: 'second_milestone', keywords: ['second'] },
                  ]}
                />
              </div>
              <div className="w-1/2">
                <TextInput
                  name={`milestones[${index}].amount`}
                  label="Enter Amount"
                  placeholder="Enter amount"
                  className="custom-text"
                />
              </div>
            </div>
          ))}

          <div
            className="flex gap-x-2 items-center font-medium cursor-pointer"
            onClick={addMilestone}
          >
            <AddNewIcon />
            <p className="text-[#7209B7]">Add Milestone</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
