import { Routes, Route } from "react-router-dom";
import ProfileHome from "./ProfileHome/ProfileHome";
import EditPhoto from "./EditPhoto/EditPhoto";
import { useAppContext } from "../../Context/StoreContext";
import { useEffect } from "react";
import EditName from "./EditName/EditName";

const Profile = () => {
  // Hide menu bar
  const { setShowMenu } = useAppContext();
  useEffect(() => {
    setShowMenu(false);
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<ProfileHome />} />
      <Route path="/editPhoto" element={<EditPhoto />} />
      <Route path="/editName" element={<EditName />} />
    </Routes>
  );
};

export default Profile;
