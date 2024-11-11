'use client'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '../../components/icons/calendar';
import { FilterIcon } from '../../components/icons/filter';

const ProjectTabButtons = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

    
  return (
    <div className="flex gap-x-3 items-center">
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      customInput={
        <button className="lg:flex items-center gap-x-2 w-ful text-[#344054] rounded-lg containerBorder px-2 py-2 whitespace-nowrap">
          <CalendarIcon />
          <p> {selectedDate ? selectedDate.toDateString() : 'Select date'}</p>
        </button>
      }
    />

    <button className="lg:flex items-center gap-x-2 text-[#344054] containerBorder px-2 py-2">
      <FilterIcon />
      <p>Filters</p>
    </button>
  </div>
  )
}

export default ProjectTabButtons