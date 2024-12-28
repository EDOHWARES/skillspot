import Pending from "./Pending/Pending";
import History from "./History/History";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  return (
    <div className="bg-[#F3F5FD] h-full mt-[7rem]">
      <div className="flex flex-col gap-6 items-center bg-transparent  pt-4">
        {/* <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828]">
          Orders
        </h1> */}
        <div className=" cursor-pointer flex items-center justify-around w-full border-b">
          <Link
            to={"/orders"}
            className={`${
              location.pathname == "/orders"
                ? "font-medium border-black text-[#282828]"
                : "font-normal border-transparent text-gray-500"
            } cursor-pointer text-[16px] px-4 border-b-2`}
          >
            Pending
          </Link>
          <Link
            to={"/orders/history"}
            className={`${
              location.pathname == "/orders/history"
                ? "font-medium border-black text-[#282828]"
                : "font-normal border-transparent text-gray-500"
            } cursor-pointer text-[16px] px-4 border-b-2`}
          >
            History
          </Link>
        </div>
      </div>

      <div className="mx-auto w-fit my-auto mt-[5rem] h-full">
        <Routes>
          <Route path="/" element={<Pending />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
};

export default Orders;
