'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '../../../components/icons/calendar';

interface DateSelectorProps {
  initialDate?: Date | null;
  onDateChange?: (date: Date | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  initialDate = null,
  onDateChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onDateChange) onDateChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      customInput={
        <button className="flex items-center gap-x-2 text-[#344054] rounded-lg containerBorder px-2 py-2 whitespace-nowrap">
          <CalendarIcon />
          <p>{selectedDate ? selectedDate.toDateString() : 'Select date'}</p>
        </button>
      }
    />
  );
};

export default DateSelector;
