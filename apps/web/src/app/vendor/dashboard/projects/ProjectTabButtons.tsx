'use client';
import { useState, ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '../../components/icons/calendar';
import { FilterIcon } from '../../components/icons/filter';
import { SearchIcon } from '../../../components/icons/search-icon';

interface TopBarProps {
  setSearchQuery: (query: string) => void;
}

const ProjectTabButtons = ({ setSearchQuery }: TopBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query: string = event.target.value;
    setSearchTerm(query);
    setTimeout(() => {
      setSearchQuery(query);
    }, 1500);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex gap-x-3 items-center">
      <div className="flex items-center gap-x-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4 text-[15px]">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pl-2">
                <SearchIcon />
              </div>

              <input
                type="search"
                id="search"
                className="containerBorder block w-[400px] pl-10 px-2 py-2.5 ps-10 text-sm outline-none"
                placeholder="search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default ProjectTabButtons;
