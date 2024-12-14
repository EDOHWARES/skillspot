import { MdOutlineHome } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router';
import { useLocation } from 'react-router';

const DownBar = () => {
  const location: any = useLocation();
  return (
    <nav className='fixed bg-white bottom-0 h-[73px] w-full md:hidden px-6 py-3'>
      <ul className='flex items-center justify-between space-x-2'>
        <Link to={'/'} className={`flex flex-col items-center cursor-pointer ${location.pathname == '/' ? 'text-black font-semibold' : 'text-gray-500'}`}>
          <span className='text-2xl'><MdOutlineHome /></span>
          <span className='text-[12px] font-semibold'>Home</span>
        </Link>
        <Link to={'/orders'} className={`flex flex-col items-center cursor-pointer ${location.pathname == '/orders' || location.pathname == '/orders/history' ? 'text-black font-semibold' : 'text-gray-500'}`}>
          <span className='text-2xl'><LuNotebookText /></span>
          <span className='text-[12px]'>Orders</span>
        </Link>
        <Link to={'/promotion'} className={`flex flex-col items-center cursor-pointer ${location.pathname == '/promotion' ? 'text-black font-semibold' : 'text-gray-500'}`}>
          <span className='text-2xl'><GoGift /></span>
          <span className='text-[12px]'>Promotion</span>
        </Link>
        <Link to={'/notifications'} className={`relative flex flex-col items-center cursor-pointer ${location.pathname == '/notifications' ? 'text-black font-semibold' : 'text-gray-500'}`}>
          <span className='text-2xl'><IoMdNotificationsOutline /></span>
          <span className='text-[12px]'>Notifications</span>
          {<span className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-[1.5rem]"></span>}
        </Link>
      </ul>
    </nav>
  )
}

export default DownBar