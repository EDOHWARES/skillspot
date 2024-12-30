import { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router";

import profile_placeholder from "../../../assets/images/profile_placeholder.png";
import next_icon from "../../../assets/icons/arrow-next-small_grey.png";
import { useAppContext } from "../../../Context/StoreContext";
import { FadeLoader } from "react-spinners";

const ProfileHome = () => {
  const API = import.meta.env.VITE_API_URL;
  const [selectedImage, setSelectedImage] = useState(profile_placeholder);
  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedContact, setSelectedContact] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const {
    setShowMenu,
    serviceProviderProfileInfo,
    loadingServiceProviderProfileInfo,
  } = useAppContext();

  useEffect(() => {
    setShowMenu(false);
  }, []);

  useEffect(() => {
    if (!loadingServiceProviderProfileInfo) {
      if (serviceProviderProfileInfo) {
        // setSelectedImage(`${API}/${serviceProviderProfileInfo.profileImage}`);
        setSelectedImage(
          serviceProviderProfileInfo.profileImage ==
            "https://via.placeholder.com/150"
            ? profile_placeholder
            : `${API}/${serviceProviderProfileInfo.profileImage}`
        );
        setSelectedName(serviceProviderProfileInfo.name);
        setSelectedContact(serviceProviderProfileInfo.phone);
        setSelectedEmail(serviceProviderProfileInfo.email);
        setSelectedGender(serviceProviderProfileInfo.gender);
      }
    }
  }, [loadingServiceProviderProfileInfo]);

  if (loadingServiceProviderProfileInfo) {
    return (
      <div className="z-50 w-screen h-screen flex items-center justify-center">
        <FadeLoader color="#276100" loading={true} />
      </div>
    );
  }

  if (!serviceProviderProfileInfo) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <div className="robotoFlex">
      <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
        <Link to={"/"} className="absolute left-2 md:left-10 cursor-pointer">
          <GrFormPrevious className="text-2xl" />
        </Link>
        <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
          My profile
        </h1>
      </div>
      <section>
        <Link
          to={"/profile/editPhoto"}
          className="h-[103px] w-full flex items-center justify-between mt-[5.5rem] bg-white px-2 md:px-10 cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500"
        >
          <span className="font-bold text-[15px] text-gray-800">
            Profile photo
          </span>
          <div className="flex items-center space-x-8">
            <img
              src={selectedImage}
              alt="placeholder"
              className="w-[58px] h-[58px] object-cover rounded-[3px]"
            />
            <img src={next_icon} alt="next icon" />
          </div>
        </Link>
        <Link
          to={"/profile/editName"}
          className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500"
        >
          <span className="font-bold text-[15px] text-gray-800">Name</span>
          <div className="flex items-center space-x-8">
            <span className="text-[15px] text-gray-500">{selectedName}</span>
            <img src={next_icon} alt="next icon" />
          </div>
        </Link>
        <Link
          to={"/profile/editEmail"}
          className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500"
        >
          <span className="font-bold text-[15px] text-gray-800">Email</span>
          <div className="flex items-center space-x-8">
            <span className="text-[15px] text-gray-500">{selectedEmail}</span>
            <img src={next_icon} alt="next icon" />
          </div>
        </Link>
        <Link
          to={"/profile/editContact"}
          className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500"
        >
          <span className="font-bold text-[15px] text-gray-800">Contact</span>
          <div className="flex items-center space-x-8">
            <span className="text-[15px] text-gray-500">{selectedContact}</span>
            <img src={next_icon} alt="next icon" />
          </div>
        </Link>
        <Link
          to={"/profile/editGender"}
          className="h-[63px] w-full flex items-center justify-between bg-white px-2 md:px-10 mt-[.2rem] cursor-pointer hover:scale-95 hover:bg-gray-50 duration-500"
        >
          <span className="font-bold text-[15px] text-gray-800">Gender</span>
          <div className="flex items-center space-x-8">
            <span className="text-[15px] text-gray-500">{selectedGender}</span>
            <img src={next_icon} alt="next icon" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ProfileHome;
