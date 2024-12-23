import { useId, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

import placeholder_icon_big from "../../../assets/images/profile_placeholder_big.png";
import gallery_icon from "../../../assets/icons/gallery_icon.png";
import camera_icon from "../../../assets/icons/camera_icon.png";
import { toast } from "react-toastify";

const EditPhoto = () => {
  const API = import.meta.env.VITE_API_URL;
  const [selectedImage, setSelectedImage] = useState(placeholder_icon_big);
  const [imageFile, setImageFile] = useState<File | null>(null); // Store file for upload
  const [isSaving, setIsSaving] = useState(false);

  // Handle choosing from gallery
  const handleGalleryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file); // Store file for uploading
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string); // Preview the image
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle taking a photo
  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      await new Promise((resolve) => (video.onloadedmetadata = resolve));

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL("image/png");
        setSelectedImage(imageData);

        // Convert base64 to a file for upload
        const res = await fetch(imageData);
        const blob = await res.blob();
        const file = new File([blob], "photo.png", { type: "image/png" });
        setImageFile(file);
      }

      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Handle save (API call to upload image)
  const saveImage = async () => {
    const userId = localStorage.getItem("skillspot_userId");
    if (!userId) {
      toast.error('User Id not found!')
    }
    if (!imageFile) {
      alert("No image selected.");
      return;
    }

    setIsSaving(true);

    const formData = new FormData();
    formData.append("profileImg", imageFile);

    try {
      const response = await fetch(
        `${API}/api/serviceProvider/updatePhoto/name`,
        {
          method: "PATCH",
          body: formData,
          headers: {
            // Add authorization headers if needed
          },
        }
      );

      if (response.ok) {
        alert("Profile photo updated successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error updating photo:", errorData);
        alert("Failed to update profile photo.");
      }
    } catch (error) {
      console.error("Error updating photo:", error);
      alert("An error occurred while saving the photo.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
        <Link
          to={"/profile"}
          className="absolute left-2 md:left-10 cursor-pointer"
        >
          <GrFormPrevious className="text-2xl" />
        </Link>
        <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
          Edit photo
        </h1>
        <button
          className="w-[72px] h-[33px] bg-[#c0c0c0] hover:bg-[#a6a6a6] duration-500 rounded-[3.53px] flex items-center justify-center text-white"
          onClick={saveImage}
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>

      <div className="flex flex-col items-center mt-[8rem] space-y-8">
        <img
          src={selectedImage}
          alt="profile"
          className="w-[138px] h-[138px] object-cover mx-auto"
        />
        <ul className="flex items-start flex-col space-y-2">
          <li className="relative">
            <div className="flex items-center px-2 space-x-3 bg-[#E2E8FF] hover:bg-[#ced8ff] duration-500 h-[43.47px] w-[229px] rounded-[3.18px] cursor-pointer">
              <img src={gallery_icon} alt="gallery icon" />
              <span>Choose from Gallery</span>
            </div>
            <input
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleGalleryChange}
            />
          </li>
          <li
            className="flex items-center px-2 space-x-3 bg-[#E2E8FF] hover:bg-[#ced8ff] duration-500 h-[43.47px] w-[229px] rounded-[3.18px] cursor-pointer"
            onClick={handleTakePhoto}
          >
            <img src={camera_icon} alt="camera icon" />
            <span>Take Photo</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditPhoto;
