import {Routes, Route} from 'react-router-dom';
import ProfileHome from './ProfileHome/ProfileHome';
import EditPhoto from './EditPhoto/EditPhoto';

const Profile = () => {
  return (
    <Routes>
        <Route path='/' element={<ProfileHome />}  />
        <Route path='/editPhoto' element={<EditPhoto />} />
    </Routes>
  )
}

export default Profile;