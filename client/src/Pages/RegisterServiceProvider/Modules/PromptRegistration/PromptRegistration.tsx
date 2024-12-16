import React, { useEffect } from "react";
import worker_img from "../../../../assets/images/worker.jpeg";
import { Link } from "react-router";

import cancel_icon from "../../../../assets/icons/cancel.svg";
import clock_icon from "../../../../assets/icons/clock.svg";
import medal_icon from "../../../../assets/icons/medal.svg";
import wallet_icon from "../../../../assets/icons/wallet.svg";
import { useAppContext } from "../../../../Context/StoreContext";

interface FeaturesCardPropTypes {
  icon: string;
  title: string;
  body: string;
}

const FeaturesCard: React.FC<FeaturesCardPropTypes> = ({
  icon,
  title,
  body,
}) => {
  return (
    <div className="robotoFlex flex items-start space-x-3 w-fit">
      <img src={icon} alt="title" className="w-[30px]" />
      <div className="flex flex-col ">
        <h3 className="font-semibold text-[14px]">{title}</h3>
        <p className="font-normal text-[13.04px] text-gray-700">{body}</p>
      </div>
    </div>
  );
};

const PromptRegistration = () => {
  const { setShowMenu } = useAppContext();

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="relative z-50 space-y-6 bg-white min-h-screen pb-5">
      <div className="hd w-full relative">
        <Link to={'/'} className="cursor-pointer absolute top-[2rem] right-[2rem] hover:scale-105 duration-500">
        <img src={cancel_icon} alt="cancel_icon" />
        </Link>
        <img
          src={worker_img}
          alt="worker img"
          className="w-full md:h-[15rem] object-cover"
        />
      </div>
      <div className="bd px-4 md:px-10 space-y-6">
        <div className="text-center">
          <h2 className="robotoFlex font-bold text-[18.62px] text-black">
            REGISTER AS A SERVICE PROVIDER?
          </h2>
          <p className="text-gray-500 font-normal text-[13.9px]">
            Join The Workforce Today
          </p>
        </div>
        <div className="space-y-5">
          <FeaturesCard
            icon={clock_icon}
            title="Increase Job Opportunities"
            body=" Expand your client base and enjoy flexible working hours."
          />

          <FeaturesCard
            icon={medal_icon}
            title="Enhanced Professional Reputation"
            body="Build credibility through user reviews and showcase your work."
          />

          <FeaturesCard
            icon={wallet_icon}
            title="Convenient Business Management"
            body="Enjoy a hassle-free payment process, with secure and direct earnings deposited into your account."
          />
        </div>
        <Link to={'/registerServiceProvider'} className="bg-[#282828] cursor-pointer w-[300px] text-gray-100 flex items-center justify-center h-[53.42px] rounded-[6.16px] font-medium mx-auto hover:scale-105 duration-500">Register Now</Link>
        <div className="w-fit mx-auto text-gray-500 text-[16.44px]">
          <Link to="">Need Help?</Link>
        </div>
      </div>
    </div>
  );
};

export default PromptRegistration;
