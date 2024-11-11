import React from 'react';
import Accept from './modal/Accept';
import Decline from './modal/Decline';

const Notes = () => {
  return (
    <div className="w-[40%] flex flex-col justify-between rounded-xl p-4 bg-[#EEEEEE]">
      <div>
        <h2 className="text-[#121722] text-center py-2 items-center font-semibold">
          Notes
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet adipiscing viverra lectus
          velit amet morbi facilisis varius. Duis vitae ultrices est sed nullam.
          Ultrices aenean tellus egestas sit egestas nec consequat elementum at.
          Non lobortis vitae massa mauris morbi sapien.
        </p>
      </div>
      <div className="flex gap-x-3 text-white">
        <Decline />
        <Accept />
      </div>
    </div>
  );
};

export default Notes;
