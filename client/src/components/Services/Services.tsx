import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import image_placeholder from "../../assets/icons/avatarprofile.png";
import { FadeLoader } from "react-spinners";

import cleaner from "../../assets/icons/cleaning.png";
import electrician from "../../assets/icons/electrician.png";
import mechanic from "../../assets/icons/mechanic.png";
import plumber from "../../assets/icons/plumber.png";
import sewing from "../../assets/icons/sewing.png";
import digiter from "../../assets/icons/content-strategy.png";
import carpenter from "../../assets/icons/carpenter.png";
import houseAgent from "../../assets/icons/house-agent.png";
import more from "../../assets/icons/more.png";

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
          Reach out
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const API = import.meta.env.VITE_API_URL;
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);

  // Fetch all services on page load
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API}/api/serviceProvider/`);
        const data = await response.json();
        if (data.success) {
          setServiceProviders(data.data);
        } else {
          console.error("Failed to fetch service providers");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoadingPage(false);
      }
    };

    fetchServices();
  }, []);

  if (loadingPage) {
    return (
      <div className="z-50 w-screen h-screen flex items-center justify-center">
        <FadeLoader color="#276100" loading={true} />
      </div>
    );
  }

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
      <div className="flex flex-col space-y-5">
        {serviceProviders.map((provider: ProviderType) => (
          <Service
            key={provider._id}
            name={provider.name}
            profileImage={
              provider.profileImage == "https://via.placeholder.com/150"
                ? image_placeholder
                : `${API}/${provider.profileImage}`
            }
            location={provider.location}
            services={provider.servicesAndSkills}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
