import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

import placeholder_icon_big from "../../../assets/images/profile_placeholder_big.png";
import gallery_icon from "../../../assets/icons/gallery_icon.png";
import camera_icon from "../../../assets/icons/camera_icon.png";

const EditPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(placeholder_icon_big);

  // Handle choosing from gallery
  const handleGalleryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string); // Ensure the result is treated as a string
        }
      };
      reader.readAsDataURL(file);
    }
  };
  

  // Handle taking a photo
  const handleTakePhoto = async () => {
    try {
      // Request access to the camera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Create a video element to stream the video
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();
  
      // Wait for the video stream to initialize
      await new Promise((resolve) => video.onloadedmetadata = resolve);
  
      // Create a canvas to capture the frame
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
  
      if (context) {
        // Set canvas dimensions to match video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
  
        // Capture the video frame into the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
        // Convert the canvas content to a base64 image URL
        const imageData = canvas.toDataURL("image/png");
        setSelectedImage(imageData);
      } else {
        console.error("Failed to get canvas context.");
      }
  
      // Stop the video stream and release resources
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing camera:", error);
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
        <button className="w-[72px] h-[33px] bg-[#c0c0c0] hover:bg-[#a6a6a6] duration-500 rounded-[3.53px] flex items-center justify-center text-white">
          Save
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
