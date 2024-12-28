import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import time_icon from "../../assets/icons/time-icon.png";
import order_accepted from "../../assets/icons/order_accepted.png";
import order_completed from "../../assets/icons/order_completed.png";
import order_canceled from "../../assets/icons/order_canceled.png";
import order_confirmed from "../../assets/icons/order_confirmed.png";
import order_assigned from "../../assets/icons/order_assigned.png";
import order_announcement from "../../assets/icons/order_announcement.png";

interface NotificationCardPropTypes {
  icon: string;
  title: string;
  text: string;
  time: string;
}

const NotificationCard: React.FC<NotificationCardPropTypes> = ({
  icon,
  title,
  text,
  time,
}) => {
  return (
    <div className="flex items-center  bg-white w-full px-4 md:px-10 space-x-3 h-[92px]">
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[16px] text-black font-medium">{title}</h3>
          <span className="flex items-center text-[15px] text-gray-500">
            <img src={time_icon} alt="time icon" />
            <span>{time}</span>
          </span>
        </div>
        <p className="text-gray-500 text-[14px] font-normal">{text}</p>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="w-full mb-[10rem] mt-[6.3rem]">
      {/* <div className="fixed top-0 w-full left-0">
        <div className="bg-white mb-3 py-4 px-2 md:px-10 flex items-center justify-between relative">
          <span className="absolute left-4 md:left-10">
            <CiMenuKebab />
          </span>
          <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
            Notifications
          </h1>
        </div>
      </div> */}

      <div className="mx-auto w-full my-auto h-full space-y-[4px] mt-[4.5rem]">
        <NotificationCard
          icon={order_accepted}
          title="Order Accepted"
          text="We have accepted your order. Click to view details."
          time="2 hrs ago"
        />

        <NotificationCard
          icon={order_completed}
          title="Order Completed"
          text="Your order has been completed. Please check the work done"
          time="3 hrs ago"
        />

        <NotificationCard
          icon={order_confirmed}
          title="Confirm Order"
          text="We have added items in your order. Please check and confirm."
          time="4 hrs ago"
        />

        <NotificationCard
          icon={order_canceled}
          title="Order Canceled"
          text="Your order has been cancelled. Click to view details."
          time="5 hrs ago"
        />

        <NotificationCard
          icon={order_assigned}
          title="Order Assigned"
          text="We have assigned your order to a worker. Click to view details."
          time="6 hrs ago"
        />

        <NotificationCard
          icon={order_announcement}
          title="Announcement"
          text="Our service will be down tomorrow for planned maintenance."
          time="7 hrs ago"
        />
      </div>
    </div>
  );
};

export default Notifications;
