import logo from "../../assets/icons/skillspot-icon.png";
import menu from "../../assets/icons/menu.png";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useAppContext } from "../../Context/StoreContext";
import { nigeriaStatesLGA } from "../../data/nigeriaStatesLGA";

import { MdOutlineHome } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import searchIcon from "../../assets/icons/search.png";
import { FaFilter } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const location: any = useLocation();
  const { setShowMenu } = useAppContext();
  const [filtering, setFiltering] = useState(true);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");
  const {setSearchTerm } = useAppContext();

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle State Selection
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedLGA(""); // Reset LGA when the state changes
    setSearchTerm(e.target.value);
  };

  // Handle LGA change
  const handleLGAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLGA(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 bg-[#CCFD04] ${
          location.pathname == "/" ? "h-[190px]" : "h-fit py-6"
        } w-full px-4 md:px-10 py-2 md:py-4 z-40`}
      >
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
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${
                  location.pathname == "/"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
              >
                <span className="text-xl">
                  <MdOutlineHome />
                </span>
                <span>Home</span>
              </Link>
              <Link
                to={"/orders"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${
                  location.pathname == "/orders"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
              >
                <LuNotebookText />
                <span>Orders</span>
              </Link>
              <Link
                to={"/promotion"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${
                  location.pathname == "/promotion"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
              >
                <span>
                  <GoGift />
                </span>
                <span>Promotion</span>
              </Link>
              <Link
                to={"/notifications"}
                className={`flex items-center space-x-1 cursor-pointer pl-1 border-t border-l hover:border-t hover:border-l hover:border-gray-600 duration-500 ${
                  location.pathname == "/notifications"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
              >
                <span>
                  <IoMdNotificationsOutline />
                </span>
                <span>Notifications</span>
              </Link>
            </ul>
            <div
              onClick={() => setShowMenu((prev: boolean) => !prev)}
              className="cursor-pointer"
            >
              <img src={menu} alt="menu icon" className="cursor-pointer" />
            </div>
          </div>

          {location.pathname == "/" && (
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                id=""
                className="absolute z-50 flex space-x-2 items-center left-0 right-0 md:right-[100%] bottom-0 mx-auto w-full max-w-[500px] mb-[-27px] px-4"
              >
                <div className="flex items-center shadow-md w-full max-w-[500px] h-[54px] rounded-[5px] rounded-r-none bg-white space-x-2 mx-auto px-4 md:mx-0">
                  <img src={searchIcon} alt="search icon" />
                  <input
                    type="search"
                    placeholder="Search for services around you..."
                    name=""
                    id=""
                    onChange={handleSearch}
                    className="h-full w-full outline-none text-sm text-gray-500 md:text-base border-none focus-within:outline-none focus-within:border-none focus:border-none focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  onClick={() => setFiltering((prev) => !prev)}
                  className={`px-4 md:px-6 border ${
                    filtering
                      ? "bg-gray-900/85 text-[#CCFD04] hover:bg-black duration-500"
                      : "bg-white text-gray-500"
                  } h-[54px] flex items-center outline-none justify-center space-x-1 rounded-r-[4px] hover:bg-gray-100 duration-500`}
                >
                  <span>
                    {filtering ? (
                      <FaFilter className="text-xl" />
                    ) : (
                      <CiFilter className="text-xl" />
                    )}
                  </span>
                  <span>Filter</span>
                </button>
              </form>
              {filtering && (
                <div className="mt-[1rem] w-full px-6 text-sm pt-8 md:pt-10 border-b absolute left-0 bg-[#F3F5FD] py-2 text-gray-500 flex items-center justify-start space-x-4">
                  <span className="flex items-center space-x-2">
                    <p>State:</p>
                    <select
                      id="states"
                      value={selectedState}
                      onChange={handleStateChange}
                      className="bg-transparent px-2 py-1 md:px-4 md:py-2 border rounded-[6px] text-[#33353C] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
                    >
                      <option value="">-- Select State --</option>
                      {Object.keys(nigeriaStatesLGA).map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </span>
                  <span className="flex items-center space-x-2">
                    <p>LGA:</p>
                    <select
                      id="lgas"
                      value={selectedLGA}
                      onChange={handleLGAChange}
                      className="bg-transparent px-2 py-1 md:px-4 md:py-2 border rounded-[6px] text-[#33353C] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
                    >
                      <option value="">-- Select LGA --</option>
                      {selectedState &&
                        nigeriaStatesLGA[selectedState].map((lga) => (
                          <option key={lga} value={lga}>
                            {lga}
                          </option>
                        ))}
                    </select>
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
