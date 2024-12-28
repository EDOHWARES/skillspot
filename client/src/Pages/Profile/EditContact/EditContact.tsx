import { useState, useEffect } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Success from "../Modal/Sucess";
import email_upload_success from "../../../assets/images/email_success.png";
import { useAppContext } from "../../../Context/StoreContext";
import { FadeLoader } from "react-spinners";

const EditContact = () => {
  const API = import.meta.env.VITE_API_URL;
  const { serviceProviderProfileInfo, loadingServiceProviderProfileInfo } =
  useAppContext();

  const [contact, setContact] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [contactSaved, setContactSaved] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Helper function to get localStorage
  const getLocalStorage = (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      console.error("Error accessing localStorage", err);
      return null;
    }
  };

  // Handle save name
  const saveContact = async () => {
    const userId = getLocalStorage("skillspot_userId");
    if (!userId) {
      toast.error("User Id not found!");
      return;
    }
    if (!contact) {
      toast.error("No changes found!");
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch(
        `${API}/api/serviceProvider/updateProfile/${userId}/contact`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contact }),
        }
      );

      if (response.ok) {
        setContactSaved(true);
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        console.error("Error updating contact:", errorData);
        toast.error("Failed to update profile contact.");
      }
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("An error occurred while saving the contact.");
    } finally {
      setIsSaving(false);
    }
  };

  // Hide success modal function
  const hideModal = () => {
    setShowSuccessModal(false);
    window.location.reload();
  };

    // Initialize profile contact
  useEffect(() => {
    if (!loadingServiceProviderProfileInfo) {
      if (serviceProviderProfileInfo) {
        setContact(serviceProviderProfileInfo.phone);
      }
    }
  }, [loadingServiceProviderProfileInfo]);

  if (loadingServiceProviderProfileInfo) {
    return (
      <div className="z-50 w-screen h-screen flex items-center justify-center">
        <FadeLoader color="#276100" loading={true} />
      </div>
    );
  }

  if (!serviceProviderProfileInfo) {
    return <div>Error loading profile data.</div>;
  }

  return (
    <>
      <div className="px-4 md:px-10">
        <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
          <Link
            to={"/profile"}
            className="absolute left-2 md:left-10 cursor-pointer"
          >
            <GrFormPrevious className="text-2xl" />
          </Link>
          <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
            Edit Contact
          </h1>
          <button
            type="button"
            className={`w-[72px] h-[33px] ${
              contactSaved
                ? "bg-[#282828] hover:bg-[#525151]"
                : "bg-[#c0c0c0] hover:bg-[#a6a6a6]"
            } duration-500 rounded-[3.53px] flex items-center justify-center text-white`}
            onClick={saveContact}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : contactSaved ? "Saved" : "Save"}
          </button>
        </div>

        <div className="mt-[8rem] border-b border-gray-300">
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="font-semibold text-[17.46px] text-gray-900 border-none w-full outline-none focus:border-none focus:outline-none bg-transparent focus-within:outline-none focus-within:border-none"
          />
        </div>
      </div>
      {showSuccessModal && (
        <Success
          img={email_upload_success}
          message="Contact updated successfully"
          hideModal={hideModal}
        />
      )}
    </>
  );
};

export default EditContact;
