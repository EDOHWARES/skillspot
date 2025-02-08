import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const LoginServiceProvider = () => {
  const API = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  });

  // Redirect to previous page
  const redirectToPreviousPage = () => {
    navigate(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!credentials.emailOrPhone || !credentials.password) {
      return toast.error("Both fields are required!");
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API}/api/serviceProvider/login`, {
        emailOrPhone: credentials.emailOrPhone,
        password: credentials.password,
      });

      const { message, userId } = response.data;

      // Store userId and navigate to the home page
      localStorage.setItem("userId", userId);
      toast.success(message);
      redirectToPreviousPage();
    } catch (error: unknown) {
      setLoading(false);
      console.log(error);
      // Type assertion or type narrowing to AxiosError
      if (error instanceof AxiosError) {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-white justify-center py-4 px-2 md:px-10 fixed z-50 top-0 left-0 w-full">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="absolute left-2 md:left-10 cursor-pointer">
            <GrFormPrevious className="text-2xl" />
          </Link>
          <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
            Login
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <small className=" text-gray-600 pr-4">
            Don't have an account?{" "}
            <Link
              to={"/registerServiceProvider"}
              className="text-blue-950 font-bold"
            >
              Register
            </Link>
          </small>
        </div>
      </div>

      <form
        className="mt-[7rem] space-y-4 px-4 md:px-10 md:w-2/3 py-4 mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Phone Number or Email */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Phone Number/Email Address
          </label>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="e.g 08024090962"
            value={credentials.emailOrPhone}
            onChange={handleInputChange}
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
            value={credentials.password}
            onChange={handleInputChange}
            className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[52px] bg-[#282828] text-gray-100 py-2 px-4 text-[16px] rounded-[6px] font-medium hover:scale-105 duration-500 focus:outline-none focus:ring-2 focus:ring-purple-700 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginServiceProvider;
