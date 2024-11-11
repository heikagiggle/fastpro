import React from 'react'
import { Synergy } from '../icons/synergy'
import { Headphone } from '../icons/headphone'

const Navbar = () => {
  return (
    <div className='py-6 flex px-16 justify-between border-[#E5E5E5] border-b pb-5'>
      <div>
        <Synergy/>
      </div>
      <div className='flex items-center gap-x-4'>
        <p>Need help?</p>
        <button className='px-3 py-2 rounded-lg flex gap-x-3 items-center border-2 border-[#0A0D1408]'> <Headphone/> <p>Contact Us</p></button>
        <p className='text-[#666666] font-medium cursor-pointer'>X</p>
      </div>
    </div>
  )
}

export default Navbar
