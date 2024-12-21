import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router";

import placeholder_icon_big from "../../../assets/images/profile_placeholder_big.png";
import gallery_icon from "../../../assets/icons/gallery_icon.png";
import camera_icon from "../../../assets/icons/camera_icon.png";

const EditPhoto = () => {
  return (
    <div>
      <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
        <Link
          to={"/profile"}
          className="absolute left-2 md:left-10 cursor-pointer"
        >
          <GrFormPrevious className="text-2xl" />
        </Link>
        <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
          Edit photo
        </h1>
        <button className="w-[72px] h-[33px] bg-[#c0c0c0] hover:bg-[#a6a6a6] duration-500 rounded-[3.53px] flex items-center justify-center text-white">
          Save
        </button>
      </div>

      <div className="flex flex-col items-center mt-[8rem] space-y-8">
        <img
          src={placeholder_icon_big}
          alt="placeholder"
          className="w-[138px] h-[138px] mx-auto"
        />
        <ul className="flex items-start flex-col space-y-2">
          <li className="relative">
            <div className="flex items-center px-2 space-x-3 bg-[#E2E8FF] hover:bg-[#ced8ff] duration-500 h-[43.47px] w-[229px] rounded-[3.18px] cursor-pointer">
              <img src={gallery_icon} alt="gallery icon" />
              <span>Choose from Gallery</span>
            </div>
            <div className="absolute top-0 h-[43.47px] bg-black opacity-0 flex items-center justify-center w-[229px]">
              <input
                className="w-full h-full"
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>
          </li>
          <li className="flex items-center px-2 space-x-3 bg-[#E2E8FF] hover:bg-[#ced8ff] duration-500 h-[43.47px] w-[229px] rounded-[3.18px] cursor-pointer">
            <img src={camera_icon} alt="camera icon" />
            <span>Take Photo</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditPhoto;
