import React from "react";
import no_order from '../../../assets/images/no-orders.png';

export const Pending = () => {
  return (
    <div className="text-center">
      <div className="mb-[3rem]">
        <img src={no_order} alt="no pending order" className="w-[194px]" />
      </div>
      <h2 className="font-semibold text-[20px] text-[#303030] mb-3">No Pending Orders Yet</h2>
      <p className="text-[14px] text-[#9E9E9E]">You have no active order right now.</p>
    </div>
  );
};

export default Pending;
