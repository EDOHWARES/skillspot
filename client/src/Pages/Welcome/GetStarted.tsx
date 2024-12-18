import React from "react";
import woman_worker_img from "../../assets/images/woman_worker.png";

interface GetStartedPropTypes {
  handleNext: () => void;
}

const GetStarted: React.FC<GetStartedPropTypes> = ({ handleNext }) => {
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
      <div className="slideIn flex flex-col md:flex-row justify-between md:justify-around py-4 md:py-0 items-center bg-white min-h-screen md:max-h-screen px-4 md:px-10">
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-start space-y-4 md:space-y-6">
          <h2 className="font-bold text-[30.55px] text-center md:text-start text-[#282828] md:text-7xl leading-[32px]">
            Convenience At <br className="hidden md:block" /> Your{" "}
            <br className="md:hidden" /> Fingertips
          </h2>

          <p className="font-medium text-gray-700 text-[13.72px] md:text-base">
            With Our On-Demand Services App, <br />
            We prioritize your convenience
          </p>
          <button
            onClick={handleNext}
            className="bg-[#282828] hidden md:flex text-[#CCFD04] rounded-[6px] h-[52px] items-center justify-center w-full max-w-[300px] font-semibold hover:scale-105 duration-500"
          >
            Get Started
          </button>
        </div>
        <div className="md:h-screen mb-4 md:mb-0">
          <img
            src={woman_worker_img}
            alt="woman_worker_img"
            className="max-w-[375px] md:max-w-full md:w-full md:h-full"
          />
        </div>
        <button
          onClick={handleNext}
          className="bg-[#282828] md:hidden text-[#CCFD04] rounded-[6px] h-[52px] flex items-center justify-center w-full max-w-[300px] font-semibold hover:scale-105 duration-500"
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default GetStarted;
