import React from "react";

import cleaner from "../../assets/icons/cleaning.png";
import electrician from "../../assets/icons/electrician.png";
import mechanic from "../../assets/icons/mechanic.png";
import plumber from "../../assets/icons/plumber.png";
import sewing from "../../assets/icons/sewing.png";
import digiter from "../../assets/icons/content-strategy.png";
import carpenter from '../../assets/icons/carpenter.png';
import houseAgent from '../../assets/icons/house-agent.png';
import more from "../../assets/icons/more.png";

interface ServicesCardProps {
  icon: string;
  title: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title }) => {
  return (
    <div className="w-full h-[102px] flex items-center justify-center flex-col gap-[1rem] shadow-sm bg-white rounded-[9.8px] hover:scale-105 duration-500">
      <img src={icon} alt={title} className="w-[44.56px]" />
      <p className="text-[11px] md:text-balance text-gray-800">{title}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col space-y-4 mb-[10rem] mt-[16rem]">
      <h1 className="text-[22px] font-semibold text-black">Services</h1>
      <div className="services grid grid-cols-3 gap-5">
        <ServicesCard icon={cleaner} title={"Cleaning"} />

        <ServicesCard icon={electrician} title={"Repairing"} />

        <ServicesCard icon={mechanic} title={"Mechanics"} />

        <ServicesCard icon={plumber} title={"Plumbing"} />

        <ServicesCard icon={sewing} title={"Sewing"} />

        <ServicesCard icon={carpenter} title={"Carpentry"} />

        <ServicesCard icon={houseAgent} title={"House Agent"} />

        <ServicesCard icon={digiter} title={"Digital"} />

        <ServicesCard icon={more} title={"More"} />
      </div>
    </div>
  );
};

export default Services;
