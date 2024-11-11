import { useState } from 'react';
import Select, { ITimezone } from 'react-timezone-select';
import { InfoIcon } from '../../../components/icons/i';

const LanguageTimezoneSelector = () => {
  // Initialize `selectedTimezone` as an empty ITimezone object.
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>({
    value: '',
    label: '',
    offset: 0,
    abbrev: '',
  });

  return (
    <div>
      {/* Timezone Selector */}
      <div>
        <div className="flex gap-x-1 items-center">
          <label className="text-sm font-medium">
            Timezone*
          </label>
          <InfoIcon />
        </div>
        <Select
          id="timezone-select"
          value={selectedTimezone}
          onChange={(timezone) => setSelectedTimezone(timezone as ITimezone)}
          styles={{
            control: (base, state) => ({
              ...base,
              marginTop: '8px',
              borderColor: '#E5E5E5',
              paddingTop: '3px',
              paddingBottom: '3px',
              boxShadow: 'none',
              outline: 'none',
              '&:hover': {
                borderColor: '#E5E5E5',
              },
            }),
            input: (base) => ({
              ...base,
              outline: 'none',
              boxShadow: 'none',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default LanguageTimezoneSelector;
