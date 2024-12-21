import { useEffect } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router";

import profile_placeholder from "../../../assets/images/profile_placeholder.png";
import next_icon from "../../../assets/icons/arrow-next-small_grey.png";
import { useAppContext } from "../../../Context/StoreContext";

const ProfileHome = () => {
  const { setShowMenu } = useAppContext();

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="robotoFlex">
      <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
        <Link to={'/'} className="absolute left-2 md:left-10 cursor-pointer">
          <GrFormPrevious className="text-2xl" />
        </Link>
        <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
          My profile
        </h1>
      </div>
      <section>
        <Link to={'/profile/editPhoto'} className="h-[103px] w-full flex items-center justify-between mt-[5.5rem] bg-white px-2 md:px-10 cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500">
          <span className="font-bold text-[15px] text-gray-800">Profile photo</span>
          <div className="flex items-center space-x-8">
            <img src={profile_placeholder} alt="placeholder" />
            <img src={next_icon} alt="next icon" />
          </div>
        </Link>
        <div className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500">
          <span className="font-bold text-[15px] text-gray-800">Name</span>
          <div>
            <img src={next_icon} alt="next icon" />
          </div>
        </div>
        <div className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500">
          <span className="font-bold text-[15px] text-gray-800">Email</span>
          <div className="flex items-center space-x-8">
            <span className="text-[15px] text-gray-500">edoh@example.com</span>
            <img src={next_icon} alt="next icon" />
          </div>
        </div>
        <div className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500">
          <span className="font-bold text-[15px] text-gray-800">Contact</span>
            <div className="flex items-center space-x-8">
              <span className="text-[15px] text-gray-500">234-456-7890</span>
              <img src={next_icon} alt="next icon" />
            </div>
        </div>
        <div className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500">
          <span className="font-bold text-[15px] text-gray-800">Contact</span>
            <div>
              <img src={next_icon} alt="next icon" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileHome;
