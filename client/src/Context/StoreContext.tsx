import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { fetchServiceProviderProfile } from "../api/api";

// service providers type
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

// Service provider profile type
interface ServiceProviderProfileType {
  profileImage: string;
  phone: string;
  email: string;
  name: string;
  gender: string;
}

// Define the context value type
interface AppContextType {
  services: ProviderType[];
  showMenu: boolean;
  showLogoutModule: boolean;
  loadingServices: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  serviceProviderProfileInfo: ServiceProviderProfileType | null;
  loadingServiceProviderProfileInfo: boolean;
  setServices: React.Dispatch<React.SetStateAction<ProviderType[]>>;
  setLoadingServices: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLogoutModule: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const API = import.meta.env.VITE_API_URL;
  const [services, setServices] = useState<ProviderType[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [searchTerm, setSearchTerm] = useState('')
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModule, setShowLogoutModule] = useState(false);
  const [
    loadingServiceProviderProfileInfo,
    setLoadingServiceProviderProfileInfo,
  ] = useState(true);
  const [serviceProviderProfileInfo, setServiceProviderProfileInfo] =
    useState<ServiceProviderProfileType | null>(null);

  // Fetch all services on page load
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API}/api/serviceProvider/`);
        const data = await response.json();
        if (data.success) {
          // shuffle the data before setting to state
          const shuffledServices = data.data.sort(() => Math.random() - 0.5);
          setServices(shuffledServices);
        } else {
          console.error("Failed to fetch service providers");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  // Fetch service provider profile info on initialization
  useEffect(() => {
    fetchServiceProviderProfile()
      .then((profile) => setServiceProviderProfileInfo(profile))
      .catch((error) =>
        console.error("Failed to fetch profile:", error.message)
      )
      .finally(() => setLoadingServiceProviderProfileInfo(false));
  }, []);

  const contextValues: AppContextType = {
    services,
    setServices,
    loadingServices,
    setLoadingServices,
    searchTerm, 
    setSearchTerm,
    showMenu,
    setShowMenu,
    serviceProviderProfileInfo,
    loadingServiceProviderProfileInfo,
    showLogoutModule,
    setShowLogoutModule,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
