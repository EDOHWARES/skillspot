import call_icon from "../../assets/icons/call_icon.png";
import message_icon from "../../assets/icons/message_icon.png";
import facebook_icon from "../../assets/icons/facebook_icon.png";
import instagram_icon from "../../assets/icons/instagram_icon.png";
import linkedin_icon from "../../assets/icons/linkedin_icon.png";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";

import copy_icon from "../../assets/icons/copy_icon.png";
import contact_whatsapp_icon from "../../assets/icons/contact_whatsapp_icon.png";
import contact_call_icon from "../../assets/icons/contact_call_icon.png";
import sendEmail_icon from "../../assets/icons/sendEmail_icon.png";
import { useEffect, useState } from "react";
import { useAppContext } from "../../Context/StoreContext";

interface ContactUsModalPropTypes {
  // Icon and text for the first action (e.g., Copy)
  firstIcon: string; // Could also be JSX.Element for inline React components
  firstText: string;

  // Icon and text for the second action (e.g., Call)
  secondIcon: string;
  secondText: string;

  // Icon and text for the third action (e.g., WhatsApp)
  thirdIcon?: string; // Optional: might not always be needed
  thirdText?: string; // Optional: might not always be needed

  // Text to copy to clipboard
  copiedText: string;

  // Function to close the modal
  hideModal: () => void;

  // Indicates if the modal is related to a phone number
  isPhoneNumber: boolean;
}


const ContactUsModal: React.FC<ContactUsModalPropTypes> = ({
  firstIcon,
  firstText,
  secondIcon,
  secondText,
  thirdIcon,
  thirdText,
  copiedText,
  hideModal,

  isPhoneNumber,
}) => {
  // Function to handle copying
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Function to handle calling
  const handleCall = (phoneNumber: string) => {
    hideModal();
    window.location.href = `tel:${phoneNumber}`;
  };

  // Function to handle sending email
  const handleSendEmail = (email: string) => {
    hideModal();
    const subject = "Subject here"; // Add a default subject if needed
    const body = "Body text here"; // Add a default body if needed
    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, "_blank");
  };

  // Function to handle sending whatsapp message
  const handleWhatsAppMessage = (phoneNumber: string, message: string = "") => {
    hideModal();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="absolute flex items-end bg-black h-screen w-full top-0 bg-opacity-80 z-50">
      <ul className="robotoFle bottom-0 mx-auto text-[16px] flex flex-col h-auto justify-between bg-white rounded-[18.32px] py-5 px-10 w-[349px] mb-4 shadow-2xl">
        <li
          onClick={() => {
            hideModal(), handleCopy(copiedText);
          }}
          className="flex cursor-pointer hover:scale-105 duration-500 items-center space-x-4 border-b py-5"
        >
          <img src={firstIcon} alt="" />
          <span className="text-[16px] font-normal text-[#282828]">
            {firstText}
          </span>
        </li>
        <li
          onClick={
            () =>
              isPhoneNumber
                ? handleCall(copiedText) // Handle call for phone modal
                : handleSendEmail(copiedText) // Handle email for email modal
          }
          className="flex cursor-pointer hover:scale-105 duration-500 items-center space-x-4 border-b py-5"
        >
          <img src={secondIcon} alt="" />
          <span className="text-[16px] font-normal text-[#282828]">
            {secondText}
          </span>
        </li>
        {isPhoneNumber && (
          <li
            onClick={() =>
              handleWhatsAppMessage(
                "+2347048126687",
                "Hello! I would like to get in touch."
              )
            }
            className="flex cursor-pointer hover:scale-105 duration-500 items-center space-x-4 border-b py-5"
          >
            <img src={thirdIcon} alt="" />
            <span className="text-[16px] font-normal text-[#282828]">
              {thirdText}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

const ContactUs = () => {
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  const { setShowMenu } = useAppContext();

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="w-full robotoFlex flex h-screen text-center flex-col items-center gap-[5rem] py-4 px-4 md:px-10">
      <div className="flex items-start w-full absolute top-0 right-0 z-50 px-4 md:px-10 py-4">
        <IoChevronBack />
      </div>
      <div>
        <h3 className="text-[#282828] mt-[5rem] text-[22px] font-bold">
          Contact Us
        </h3>
        <p className="text-gray-500 text-[16px] font-normal">
          If you have any question we are happy to help
        </p>
      </div>

      <ul className="space-y-8">
        <li
          onClick={() => {
            setEmail(false), setPhone(true);
          }}
          className=" flex flex-col items-center space-y-3 cursor-pointer hover:scale-105 duration-500"
        >
          <img className="w-[40.51px]" src={call_icon} alt="call icon" />
          <span className="text-gray-500 text-[13.81px]">
            +234 704 812 6688
          </span>
        </li>

        <li
          onClick={() => {
            setPhone(false), setEmail(true);
          }}
          className=" flex flex-col items-center space-y-3 cursor-pointer hover:scale-105 duration-500"
        >
          <img className="w-[40.51px]" src={message_icon} alt="call icon" />
          <span className="text-gray-500 text-[13.81px]">
            contact@skillspot.service
          </span>
        </li>
      </ul>

      <div className="flex flex-col items-center gap-2">
        <h4 className="text-[#282828] text-[16px] font-normal">
          Get Connected
        </h4>
        <ul className="flex items-center space-x-3">
          <li>
            <img
              className="h-[24.09px] w-[24.09px]"
              src={facebook_icon}
              alt="facebook_icon"
            />
          </li>
          <li>
            <img
              className="h-[24.09px] w-[24.09px]"
              src={instagram_icon}
              alt="instagram_icon"
            />
          </li>
          <li>
            <img
              className="h-[24.09px] w-[24.09px]"
              src={linkedin_icon}
              alt="linkedin_icon"
            />
          </li>
          <li>
            <img
              className="h-[24.09px] w-[24.09px]"
              src={whatsapp_icon}
              alt="whatsapp_icon"
            />
          </li>
          <li>
            <FaSquareXTwitter className="h-[24.09px] w-[24.09px] fill-[#282828]" />
          </li>
        </ul>
      </div>
      {phone && (
        <ContactUsModal
          firstIcon={copy_icon}
          firstText="Copy phone number"
          secondIcon={contact_call_icon}
          secondText="Call us"
          thirdIcon={contact_whatsapp_icon}
          thirdText="Open in whatsapp"
          copiedText="+234 704 812 6687"
          isPhoneNumber={true}
          hideModal={() => {
            setPhone(false), setEmail(false);
          }}
        />
      )}

      {email && (
        <ContactUsModal
          firstIcon={copy_icon}
          firstText="Copy email"
          secondIcon={sendEmail_icon}
          secondText="Send email"
          thirdIcon={contact_whatsapp_icon}
          thirdText="Open in whatsapp"
          copiedText="contact@skillspot.service"
          isPhoneNumber={false}
          hideModal={() => {
            setPhone(false), setEmail(false);
          }}
        />
      )}
    </div>
  );
};

export default ContactUs;
