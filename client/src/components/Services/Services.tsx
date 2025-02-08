import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import image_placeholder from "../../assets/icons/avatarprofile.png";
import { FadeLoader } from "react-spinners";
import notfound_icon from '../../assets/icons/notfound_icon.png';

import cleaner from "../../assets/icons/cleaning.png";
import electrician from "../../assets/icons/electrician.png";
import mechanic from "../../assets/icons/mechanic.png";
import plumber from "../../assets/icons/plumber.png";
import sewing from "../../assets/icons/sewing.png";
import digiter from "../../assets/icons/content-strategy.png";
import carpenter from "../../assets/icons/carpenter.png";
import houseAgent from "../../assets/icons/house-agent.png";
import more from "../../assets/icons/more.png";
import { useAppContext } from "../../Context/StoreContext";

// prop types for service card component
interface ServicesCardProps {
  icon: string;
  title: string;
}

// prop types for service component
interface ServicePropTypes {
  name: string;
  profileImage: string;
  location: {
    street: string;
    lga: string;
    state: string;
  };
  services: string[];
}

// prop types for provider
interface ProviderType {
  _id: string;
  name: string;
  profileImage: string;
  location: {
    street: string;
    lga: string;
    state: string;
  };
  servicesAndSkills: string[];
}

const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title }) => {
  return (
    <div className="w-full h-[102px] flex items-center justify-center flex-col gap-[1rem] shadow-md bg-white rounded-[9.8px] hover:scale-105 duration-500">
      <img src={icon} alt={title} className="w-[44.56px]" />
      <p className="text-[11px] md:text-balance text-gray-800">{title}</p>
    </div>
  );
};

const Service: React.FC<ServicePropTypes> = ({
  name,
  profileImage,
  location,
  services,
}) => {
  return (
    <div className="service-card border rounded shadow p-4 robotoFlex">
      <div className="flex items-end space-x-2">
        <img
          src={`${profileImage}`}
          alt={name}
          className="w-[3rem] h-[3rem] rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold mt-3 text-gray-700">{name}</h3>
          <span className="flex items-center space-x-1">
            <span>
              <FaLocationCrosshairs className="text-gray-500" />
            </span>
            <p className="text-sm text-gray-500 -mt-1">
              {location.street}, {location.lga}, {location.state}
            </p>
          </span>
        </div>
      </div>
      <ul className="text-sm text-gray-700 mt-3">
        {services.map((service, index) => (
          <li key={index}>• {service}</li>
        ))}
      </ul>
      <div className="mt-3">
        <button className="bg-[#CCFD04] bg-opacity-50 text-gray-800 font-semibold px-4 py-1 rounded-[3px]">
          Contact
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const API = import.meta.env.VITE_API_URL;
  const { services, loadingServices, searchTerm } = useAppContext();

  // Filtered services
  const filteredServices = searchTerm
    ? services.filter((service) => {
        return (
          service.location.state
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.location.lga
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.servicesAndSkills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      })
    : services;

  if (loadingServices) {
    return (
      <div className="z-50 w-screen h-screen flex items-center justify-center">
        <FadeLoader color="#276100" loading={true} />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4 mb-[10rem] mt-[18rem]">
      <h1 className="text-[22px] font-semibold text-black">Services</h1>
      {!searchTerm && (
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
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredServices?.length > 0 ? (
          filteredServices.map((provider: ProviderType) => (
            <Service
              key={provider._id}
              name={provider.name}
              profileImage={
                provider.profileImage === "https://via.placeholder.com/150"
                  ? image_placeholder
                  : `${API}/${provider.profileImage}`
              }
              location={provider.location}
              services={provider.servicesAndSkills}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center text-center mt-5">
            <img src={notfound_icon} alt="not found" width={100} />
            <p className="text-gray-400">
              No service provider found in the selected location...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
