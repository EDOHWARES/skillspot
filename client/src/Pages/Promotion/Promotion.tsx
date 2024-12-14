import no_promotions from "../../assets/images/no_promotions.png";
import { CiMenuKebab } from "react-icons/ci";

const Promotion = () => {
  return (
    <div className="bg-[#F3F5FD] h-full">
      <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between relative">
        <span className="absolute left-2 md:left-10">
          <CiMenuKebab />
        </span>
        <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
          Promotions
        </h1>
      </div>

      <div className="mx-auto w-fit my-auto mt-[7rem] h-full">
        <div className="text-center">
          <div className="mb-[3rem]">
            <img
              src={no_promotions}
              alt="no pending order"
              className="w-[194px]"
            />
          </div>
          <h2 className="font-semibold text-[20px] text-[#303030] mb-3">
            No Promotions Yet
          </h2>
          <p className="text-[14px] text-[#9E9E9E]">
            No promotions available at the moment. <br /> Come back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
