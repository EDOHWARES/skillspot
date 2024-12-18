import React from "react";

interface SlideCardPropTypes {
  img: string;
  title: string;
  details: string;
  slide: number;
  handleNext: () => void;
  handleBoarded: () => void;
}

const SlideCard: React.FC<SlideCardPropTypes> = ({
  img,
  title,
  details,
  slide,
  handleNext,
  handleBoarded,
}) => {
  return (
    <>
      {/* Dynamic Styles with Keyframes */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .slideIn {
            opacity: 0;
            animation: slideIn 0.5s ease-out forwards, fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>

      <div className="slideIn bg-white flex items-center space-y-14 justify-around text-center flex-col h-screen w-full px-4 md:px-52 py-4">
        <div>
          <img src={img} alt={title} className="w-[276px]" />
        </div>
        <div className="flex items-center flex-col space-y-3 ">
          <h2 className="font-bold text-[22px] text-[#33353C]">{title}</h2>
          <p className="text-gray-700 text-[16px] w-4/5 md:w-full">{details}</p>
        </div>
        <div className="flex items-center space-x-3">
          <span
            className={`w-[8.26px] h-[8.26px] rounded-full ${
              slide == 3 ? "bg-[#231F20]" : "bg-[#C4C4C4]"
            }`}
          ></span>
          <span
            className={`w-[8.26px] h-[8.26px] rounded-full ${
              slide == 4 ? "bg-[#231F20]" : "bg-[#C4C4C4]"
            }`}
          ></span>
          <span
            className={`w-[8.26px] h-[8.26px] rounded-full ${
              slide == 5 ? "bg-[#231F20]" : "bg-[#C4C4C4]"
            }`}
          ></span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span
            onClick={handleBoarded}
            className="text-[17px] text-[#282828] hover:underline duration-500"
          >
            Skip
          </span>
          {slide !== 5 && (
            <button
              onClick={handleNext}
              className="bg-[#282828] flex items-center justify-center font-semibold text-[#CCFD04] rounded-[4.32px] text-[17px] h-[39.74px] w-[108px] hover:scale-105 duration-500"
            >
              Next
            </button>
          )}
          {slide == 5 && (
            <button
              onClick={handleBoarded}
              className="bg-[#282828] flex items-center justify-center font-semibold text-[#CCFD04] rounded-[4.32px] text-[17px] h-[39.74px] w-[108px] hover:scale-105 duration-500"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SlideCard;
