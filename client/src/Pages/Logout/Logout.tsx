import { useEffect } from "react";
import { useAppContext } from "../../Context/StoreContext";

const Logout = () => {
    const {setShowMenu, setShowLogoutModule} = useAppContext();

  useEffect(() => {
    setShowLogoutModule(false);
    setShowMenu(false);
  }, []);
  
  return <div>Logout</div>;
};

export default Logout;
