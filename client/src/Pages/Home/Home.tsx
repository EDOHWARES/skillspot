import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import { Routes, Route } from "react-router-dom";
import PromptRegistration from "../RegisterServiceProvider/Modules/PromptRegistration/PromptRegistration";
import RegisterServiceProvider from "../RegisterServiceProvider/RegisterServiceProvider";
import ContactUs from "../ContactUs/ContactUs";

const HomeHome = () => {
  return (
    <>
      <Header />
      <div className="px-4 md:px-10">
        <Services />
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeHome />} />
        <Route path="/prompt-registration" element={<PromptRegistration />} />
        <Route path="/registerServiceProvider" element={<RegisterServiceProvider />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default Home;
