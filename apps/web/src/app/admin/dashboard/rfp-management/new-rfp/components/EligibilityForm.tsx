import { useState } from 'react';
import { TextInput } from '@app/components/lib/form/text-input';
import { TextAreaInput } from '@app/components/lib/form/textarea-input';
import { FileUploader } from '../../../../../components/uploader/file-uploader';
import { AddNewIcon } from '../../../../components/icons/add-new';

const EligibilityForm = () => {
  const [evaluationCriteria, setEvaluationCriteria] = useState([
    { id: 1, value: '' },
  ]);
  const [eligibilityCriteria, setEligibilityCriteria] = useState([
    { id: 1, value: '' },
  ]);

  // Add a new empty input to the evaluation criteria array
  const handleAddEvaluation = () => {
    setEvaluationCriteria([
      ...evaluationCriteria,
      { id: evaluationCriteria.length + 1, value: '' },
    ]);
  };

  // Add a new empty input to the eligibility criteria array
  const handleAddEligibility = () => {
    setEligibilityCriteria([
      ...eligibilityCriteria,
      { id: eligibilityCriteria.length + 1, value: '' },
    ]);
  };

  return (
    <div className="py-3">
      <div className="pt-2 ">
        <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm">
          <p className="text-[#666666]">DESCRIPTION</p>
        </div>

        <div className="flex gap-4 pt-3">
          <div className="w-full">
            <TextAreaInput
              name={'description'}
              label={'DESCRIPTION'}
              placeholder={'SPEC TITLE'}
              className="h-[100px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-8 ">
        <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm">
          <p className="text-[#666666] uppercase"> Evaluation criteria</p>
        </div>

        <div className="flex flex-col gap-4 pt-3">
          {evaluationCriteria.map((criterion, index) => (
            <div key={criterion.id} className="w-[340px]">
              <TextInput
                name={`evaluation_${index}`}
                label={`SPEC TITLE ${index + 1}`}
                placeholder={'Enter'}
                value={criterion.value}
              />
            </div>
          ))}
          <button
            onClick={handleAddEvaluation}
            className=" flex gap-x-2 items-center px-4 py-2 rounded-lg  border border-[#7209B7] self-start font-medium"
          >
            <AddNewIcon />
            <p className="text-[#7209B7]">Add new</p>
          </button>
        </div>
      </div>

      <div className="pt-8 ">
        <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm">
          <p className="text-[#666666] uppercase">Eligibility criteria</p>
        </div>

        <div className="flex flex-col gap-4 pt-3">
          {eligibilityCriteria.map((criterion, index) => (
            <div key={criterion.id} className="w-[340px]">
              <TextInput
                name={`eligibility_${index}`}
                label={`SPEC TITLE ${index + 1}`}
                placeholder={'Enter'}
                value={criterion.value}
              />
            </div>
          ))}
          <button
            onClick={handleAddEligibility}
            className="px-4 flex gap-x-2 items-center py-2 rounded-lg border border-[#7209B7] self-start font-medium"
          >
            <AddNewIcon />
            <p className="text-[#7209B7]">Add new</p>
          </button>
        </div>
      </div>

      <div className="pt-8 ">
        <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm">
          <p className="text-[#666666]">TERMS & CONDITIONS</p>
        </div>

        <div className="flex gap-4 pt-3">
          <div className="w-full">
            <TextAreaInput
              name={'terms'}
              label={''}
              placeholder={''}
              className="h-[100px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-8 ">
        <div className="border-b border-[#E5E5E5] pb-3 my-1 text-sm">
          <p className="text-[#666666]">ADDITIONAL ATTACHMENT</p>
        </div>

        <div className="flex gap-4 pt-3">
          <div className="w-full">
            <FileUploader name="attachments" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
