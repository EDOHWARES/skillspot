import React from "react";
import Pending from "./Pending/Pending";

const Orders = () => {
  return (
    <div className="bg-[#F3F5FD] h-full">
      <div className="flex flex-col gap-6 items-center bg-white  pt-2">
        <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828]">Orders</h1>
        <div className=" cursor-pointer flex items-center justify-around w-full">
          <p className="cursor-pointer text-[#282828] text-[16px] font-medium px-4 border-b-2 border-black">Pending</p>
          <p className="text-gray-500 hover:text-black duration-500">History</p>
        </div>
      </div>

      <div className="mx-auto w-fit my-auto mt-[7rem] h-full">
        <Pending />
      </div>
    </div>
  );
};

export default Orders;
