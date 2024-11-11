import React from 'react';
import { DateField } from '../../../../components/date/date-field';
import { TextInput } from '@app/components/lib/form/text-input';
import { SelectInput } from '@app/components/lib/form/select-input';

const ServiceDetailsForm = () => {
  return (
    <div className="py-3 ">
      <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm text-[#20202080]">
        <p  className='text-[#666666]'>SERVICE DETAILS</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 pt-4">
        <div>
          <SelectInput
            name={'category'}
            label={'CATEGORY'}
            placeholder={'Select Category'}
            items={[
              {
                label: '1 - 5',
                value: 'SIZE_1_5',
                keywords: ['one', '1 - 5', 'five'],
              },
              {
                label: '6 - 11',
                value: 'SIZE_6_11',
                keywords: ['six', '6 - 11', 'eleven'],
              },
            ]}
          />
        </div>

        <div>
          <TextInput
            name={'title'}
            label={'SERVICE TITLE'}
            placeholder={'Enter title'}
          />
        </div>

        <div>
          <DateField
            name={'deadline'}
            label={'SUBMISSION DEADLINE'}
            placeholder={'yyyy/mm/dd'}
          />
        </div>

        <div>
          <DateField
            name={'start_date'}
            label={'PROJECT START DATE'}
            placeholder={'yyyy/mm/dd'}
          />
        </div>
        <div>
          <DateField
            name={'end_date'}
            label={'PROJECT END DATE'}
            placeholder={'yyyy/mm/dd'}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsForm;
