import React, { useContext } from "react";
import cross from "../../assets/icons/cross.png";
import { Link } from "react-router";
import './Menu.css';

import user from "../../assets/icons/user.png";
import contact from "../../assets/icons/contacts.png";
import next from "../../assets/icons/arrow-next-small.png";
import worker from "../../assets/icons/construction-worker.svg";
import brick from "../../assets/icons/bricks.svg";
import share from "../../assets/icons/share.png";
import star from "../../assets/icons/star.png";
import logout from "../../assets/icons/log-out.png";
import { useAppContext } from "../../Context/StoreContext";
import Logout from "../Logout/Logout";

const Menu = () => {
  const {showMenu, setShowMenu} = useAppContext()
  return (
    <>
      { showMenu &&
        <div className={`menu fixed right-0 top-0 z-50 h-screen w-[100%] md:w-[20rem] bg-[#F3F5FD] shadow-md
        ${showMenu ? 'open' : 'closed'}
        `}>
          <div className="w-full flex items-center justify-between text-2xl font-bold bg-white py-2 px-4 mb-3">
            <p>SkillSpot</p>
            <img
              onClick={() => setShowMenu((prev: boolean) => !prev)}
              src={cross}
              alt="cancel menu icon"
              className="cursor-pointer"
            />
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between bg-white mb-[1px] py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={user} alt="user icon" />
                <span className="text-[15px] text-gray-900">My Profile</span>
              </div>
              <img src={next} alt="next icon" />
            </div>
            <div className="flex items-center justify-between bg-white py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={contact} alt="contact icon" />
                <span className="text-[15px] text-gray-900">Contact us</span>
              </div>
              <img src={next} alt="next icon" />
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between bg-white mb-[1px] py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={worker} alt="worker icon" />
                <span className="text-[15px] text-gray-900">
                  Become a worker
                </span>
              </div>
              <img src={next} alt="next icon" />
            </div>
            <div className="flex items-center justify-between bg-white py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={brick} alt="brick icon" />
                <span className="text-[15px] text-gray-900">
                  Register a company
                </span>
              </div>
              <img src={next} alt="next icon" />
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between bg-white mb-[1px] py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={share} alt="share icon" />
                <span className="text-[15px] text-gray-900">Share</span>
              </div>
              <img src={next} alt="next icon" />
            </div>
            <div className="flex items-center justify-between bg-white mb-[1px] py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={star} alt="star icon" />
                <span className="text-[15px] text-gray-900">Rate</span>
              </div>
              <img src={next} alt="next icon" />
            </div>
            <div className="flex items-center justify-between bg-white py-2 px-4 h-[60px]">
              <div className="flex items-center space-x-4">
                <img src={logout} alt="logout icon" />
                <Link to={'/logout'} className="text-[15px] text-gray-900">Logout</Link>
              </div>
              <img src={next} alt="next icon" />
            </div>
          </div>
          <Logout />
        </div>
      }
    </>
  );
};

export default Menu;
