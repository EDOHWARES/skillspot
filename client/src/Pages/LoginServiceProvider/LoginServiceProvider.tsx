import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router";

const LoginServiceProvider = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="bg-white justify-center py-4 px-2 md:px-10 fixed z-50 top-0 left-0 w-full">
        <div className=" flex items-center justify-between">
          <Link to={"/"} className="absolute left-2 md:left-10 cursor-pointer">
            <GrFormPrevious className="text-2xl" />
          </Link>
          <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
            Login
          </h1>
        </div>
        <small className="float-end text-gray-600 pr-4">
          Don't have an account ?{" "}
          <Link
            to={"/registerServiceProvider"}
            className="text-[#282828] font-bold"
          >
            Register
          </Link>
        </small>
      </div>

      <form className="mt-[7rem] space-y-4 px-4 md:px-10 md:w-2/3 py-4 mx-auto ">
        {/* Phone Number or Email */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Phone Number/Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="edohemmanuel@gmail.com"
            required={false}
            className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            required
            className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[52px] bg-[#282828] text-gray-100 py-2 px-4 text-[16px] rounded-[6px] font-medium hover:scale-105 duration-500 focus:outline-none focus:ring-2 focus:ring-purple-700 flex items-center justify-center"
        >
          {loading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginServiceProvider;
