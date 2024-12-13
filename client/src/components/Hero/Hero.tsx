import React from "react";
import searchIcon from "../../assets/icons/search.png";

const Hero = () => {
  return (
    <form className="px-4">
      <div className="flex items-center shadow-md w-full max-w-[343px] h-[54px] rounded-[5px] mt-[-27px] bg-white space-x-2 px-4 mx-auto md:mx-0">
        <img src={searchIcon} alt="search icon" />
        <input
          type="search"
          placeholder="Search for services in your location"
          name=""
          id=""
          className="h-full w-full outline-none text-sm text-gray-500 md:text-base border-none focus-within:outline-none focus-within:border-none focus:border-none focus:outline-none bg-transparent"
        />
      </div>
    </form>
  );
};

export default Hero;
