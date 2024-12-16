import { useEffect } from "react";
import logout_img from "../../assets/images/logout_img.png";
import { useAppContext } from "../../Context/StoreContext";
import "./Logout.css";
import { Link } from "react-router";


const Logout = () => {
  const {showLogoutModule, setShowLogoutModule} = useAppContext();

  return (
    <>
      {
        showLogoutModule &&
        <section className="fixed flex bottom-0 top-0 w-full p-4 mx-auto bg-transparent bg-black bg-opacity-80 h-full">
        <div className="shadow w-full bg-white flex items-center h-fit self-end flex-col gap-4 rounded-[9px] py-4">
          <img className="w-[90.66px]" src={logout_img} alt="logout img" />
          <h2 className="font-semibold text-[20px] text-#282828]">
            Come back soon!
          </h2>
          <p className="text-center text-[14px] font-normal text-[#6F7485]">
            Are you sure want <br /> to logout?
          </p>
          <Link to={'/logout'} className="bg-[#282828] text-[16px] font-semibold text-white px-4 py-2 w-[224px] h-[52px] flex items-center justify-center rounded-[6px]">
            Yes, Logout
          </Link>
          <span onClick={() => setShowLogoutModule(false)} className="text-[#EB5757] text-[16px] font-medium cursor-pointer">Cancel</span>
        </div>
      </section>
      }
    </>
  );
};

export default Logout;
