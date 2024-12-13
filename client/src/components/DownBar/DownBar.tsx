import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";

const DownBar = () => {
  return (
    <nav className='fixed bg-white bottom-0 h-[73px] w-full md:hidden px-4 py-3'>
      <ul className='flex items-center justify-between space-x-2'>
        <li className='flex flex-col items-center text-black'>
          <span className='text-2xl'><MdOutlineHome /></span>
          <span className='text-[12px] font-semibold'>Home</span>
        </li>
        <li className='flex flex-col items-center text-gray-500'>
          <span className='text-2xl'><LuNotebookText /></span>
          <span className='text-[12px]'>Orders</span>
        </li>
        <li className='flex flex-col items-center text-gray-500'>
          <span className='text-2xl'><GoGift /></span>
          <span className='text-[12px]'>Promotion</span>
        </li>
        <li className='flex flex-col items-center text-gray-500'>
          <span className='text-2xl'><IoMdNotificationsOutline /></span>
          <span className='text-[12px]'>Notifications</span>
        </li>
      </ul>
    </nav>
  )
}

export default DownBar