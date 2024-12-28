import { useState, useEffect } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router";
import { useAppContext } from "../../../Context/StoreContext";
import { FadeLoader } from "react-spinners";
import Success from "../Modal/Sucess";
import { toast } from "react-toastify";
import gender_update_img from '../../../assets/images/gender_update.png';

const EditGender = () => {
  const API = import.meta.env.VITE_API_URL;
  const { serviceProviderProfileInfo, loadingServiceProviderProfileInfo } =
    useAppContext();

  const [gender, setGender] = useState("");
  const [genderSaved, setGenderSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
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

  // Handle gender change  
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.id); 
  };

  // Handle save gender
  const saveGender = async () => {
    const userId = getLocalStorage("skillspot_userId");
    if (!userId) {
      toast.error("User Id not found!");
      return;
    }
    if (!gender) {
      toast.error("No changes found!");
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch(
        `${API}/api/serviceProvider/updateProfile/${userId}/gender`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gender }),
        }
      );

      if (response.ok) {
        setGenderSaved(true);
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        console.error("Error updating gender:", errorData);
        toast.error("Failed to update profile gender.");
      }
    } catch (error) {
      console.error("Error updating gender:", error);
      toast.error("An error occurred while saving the gender.");
    } finally {
      setIsSaving(false);
    }
  };

  // Hide success modal function
  const hideModal = () => {
    setShowSuccessModal(false);
    window.location.reload();
  };

  // Initialize profile gender
  useEffect(() => {
    if (!loadingServiceProviderProfileInfo) {
      if (serviceProviderProfileInfo) {
        setGender(serviceProviderProfileInfo.gender);
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
      <div>
        <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
          <Link
            to={"/profile"}
            className="absolute left-2 md:left-10 cursor-pointer"
          >
            <GrFormPrevious className="text-2xl" />
          </Link>
          <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
            Edit Gender
          </h1>
          <button
            type="button"
            className={`w-[72px] h-[33px] ${
              genderSaved
                ? "bg-[#282828] hover:bg-[#525151]"
                : "bg-[#c0c0c0] hover:bg-[#a6a6a6]"
            } duration-500 rounded-[3.53px] flex items-center justify-center text-white`}
            onClick={saveGender}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : genderSaved ? "Saved" : "Save"}
          </button>
        </div>

        <div className="mt-[8rem] flex flex-col px-3 md:px-12 space-y-6">
          <div className="flex items-center space-x-2">
            <input
              id="Male"
              name="gender"
              type="radio"
              checked={gender === 'Male'}
              className="scale-125 border-none outline-none"
              onChange={handleGenderChange}
            />
            <label
              htmlFor="Male"
              className="text-[#6F7485] text-[16px] font-normal "
            >
              Male
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="Female"
              name="gender"
              type="radio"
              checked={gender === 'Female'}
              className="scale-125 border-none outline-none"
              onChange={handleGenderChange}
            />
            <label
              htmlFor="Female"
              className="text-[#6F7485] text-[16px] font-normal "
            >
              Female
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="Other"
              name="gender"
              type="radio"
              checked={gender === 'Other'}
              className="scale-125 border-none outline-none"
              onChange={handleGenderChange}
            />
            <label
              htmlFor="Other"
              className="text-[#6F7485] text-[16px] font-normal "
            >
              Other
            </label>
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <Success
          img={gender_update_img}
          message="Gender updated successfully"
          hideModal={hideModal}
        />
      )}
    </>
  );
};

export default EditGender;
