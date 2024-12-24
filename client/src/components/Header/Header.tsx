import logo from "../../assets/icons/skillspot-icon.png";
import menu from "../../assets/icons/menu.png";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useAppContext } from "../../Context/StoreContext";

import { MdOutlineHome } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import searchIcon from "../../assets/icons/search.png";


const Header = () => {
    const location: any = useLocation();
    const {setShowMenu} = useAppContext()

  return (
    <>
      <header className="fixed top-0 left-0 bg-[#CCFD04] h-[198px] w-full px-4 md:px-10 py-2 md:py-4 z-40">
        <div className="max-w-[1440px] h-full mx-auto cont flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="logo flex items-center space-x-2 cursor-pointer">
              <img src={logo} alt="skillspot logo" />
              <span className="font-bold text-[28.81px]">
                <h1>SkillSpot</h1>
              </span>
            </div>
            <ul className="hidden md:flex items-center space-x-8 text-gray-500">
              <Link
                to={"/"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${location.pathname == '/' ? 'border-gray-600' : 'border-transparent' }`}
              >
                <span className="text-xl">
                  <MdOutlineHome />
                </span>
                <span>Home</span>
              </Link>
              <Link
                to={"/orders"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${location.pathname == '/orders' ? 'border-gray-600' : 'border-transparent' }`}
              >
                <LuNotebookText />
                <span>Orders</span>
              </Link>
              <Link
                to={"/promotion"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${location.pathname == '/promotion' ? 'border-gray-600' : 'border-transparent' }`}
              >
                <span>
                  <GoGift />
                </span>
                <span>Promotion</span>
              </Link>
              <Link
                to={"/notifications"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${location.pathname == '/notifications' ? 'border-gray-600' : 'border-transparent' }`}
              >
                <span>
                  <IoMdNotificationsOutline />
                </span>
                <span>Notifications</span>
              </Link>
            </ul>
            <div onClick={() => setShowMenu((prev: boolean) => (!prev))} className="cursor-pointer">
              <img src={menu} alt="menu icon" className="cursor-pointer" />
            </div>
          </div>

          <form className="absolute left-0 right-0 md:right-[100%] bottom-0 mx-auto w-full max-w-[500px] mb-[-27px] px-4">
            <div className="flex items-center shadow-md w-full max-w-[500px] h-[54px] rounded-[5px] bg-white space-x-2 mx-auto px-4 md:mx-0">
              <img src={searchIcon} alt="search icon" />
              <input
                type="search"
                placeholder="Search for services in your location..."
                name=""
                id=""
                className="h-full w-full outline-none text-sm text-gray-500 md:text-base border-none focus-within:outline-none focus-within:border-none focus:border-none focus:outline-none bg-transparent"
              />
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
