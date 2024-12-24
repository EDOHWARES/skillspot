import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { fetchServiceProviderProfile } from "../api/api";

// Service provider profile type
interface ServiceProviderProfileType {
  profileImage: string;
  contact: string;
  email: string;
  name: string;
  gender: string;
}

// Define the context value type
interface AppContextType {
  showMenu: boolean;
  showLogoutModule: boolean;
  serviceProviderProfileInfo: ServiceProviderProfileType | null;
  loadingServiceProviderProfileInfo: boolean;
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
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModule, setShowLogoutModule] = useState(false);
  const [loadingServiceProviderProfileInfo, setLoadingServiceProviderProfileInfo] =
    useState(true);
  const [serviceProviderProfileInfo, setServiceProviderProfileInfo] =
    useState<ServiceProviderProfileType | null>(null);

  // Fetch service provider profile info on initialization
  useEffect(() => {
    fetchServiceProviderProfile()
      .then((profile) => setServiceProviderProfileInfo(profile))
      .catch((error) => console.error("Failed to fetch profile:", error.message))
      .finally(() => setLoadingServiceProviderProfileInfo(false));
  }, []);

  const contextValues: AppContextType = {
    showMenu,
    setShowMenu,
    serviceProviderProfileInfo,
    loadingServiceProviderProfileInfo,
    showLogoutModule,
    setShowLogoutModule,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
