import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { nigeriaStatesLGA } from "../../data/nigeriaStatesLGA";
import Select from "react-select";
import { allSkills } from "../../data/skills";
import SubmissionSuccessful from "./Modules/SubmissionSucessful/SubmissionSuccessful";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router";

const RegisterServiceProvider = () => {
  const API = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const navigate = useNavigate();

  // Handle State Selection
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedLGA(""); // Reset LGA when the state changes
  };

  // Handle LGA change
  const handleLGAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLGA(e.target.value);
  };

  // Hide Submission Modal function
  const hideModal = () => {
    setShowSubmissionModal(false);
    navigate("/");
  };

  // Register service provider
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      yearsOfExperience: formData.get("yearsOfExperience"),
      location: {
        street: formData.get("location[address]"),
        lga: selectedLGA,
        state: selectedState,
      },
      bio: formData.get("bio"),
      servicesAndSkills: selectedSkills.map((skill) => skill.trim()),
    };

    try {
      const response = await axios.post(
        `${API}/api/serviceProvider/register`,
        data
      );
      console.log("Registration successful:", response.data);
      if (response.status === 201) {
        const { id } = response.data.serviceProvider;
        localStorage.setItem("skillspot_userId", id);
      }
      setLoading(false);
      setShowSubmissionModal(true);
    } catch (error: any) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      setLoading(false);
      alert(
        error.response?.data?.message ||
          "An error occurred during registration."
      );
    }
  };

  return (
    <>
      <div className="text-black pb-32 robotoFlex">
        <div className="bg-white justify-center py-4 px-2 md:px-10 fixed z-50 top-0 left-0 w-full">
          <div className=" flex items-center justify-between">
            <Link
              to={"/"}
              className="absolute left-2 md:left-10 cursor-pointer"
            >
              <GrFormPrevious className="text-2xl" />
            </Link>
            <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
              Become a service provider
            </h1>
          </div>
          <small className="float-end text-gray-600 pr-4">Already registered ? <Link to={'/loginServiceProvider'} className="text-[#282828] font-bold">Login</Link></small>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-[7rem] space-y-4 px-4 md:px-10 md:w-2/3 py-4 mx-auto "
        >
          {/* Name */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g Edoh Emmanuel"
              required
              className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g edohemmanuel@gmail.com"
              required={false}
              className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g 08123456789"
              required
              className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
            />
          </div>

          {/* Services Selection */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Services/Skills to offer
            </label>
            <Select
              isMulti
              name="skills"
              options={allSkills.map((skill) => ({
                value: skill,
                label: skill,
              }))}
              className="w-full"
              classNamePrefix="select"
              onChange={(selectedOptions) =>
                setSelectedSkills(selectedOptions.map((option) => option.value))
              }
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  borderColor: state.isFocused ? "#CCFD04" : "#CCCCCC",
                  borderWidth: "1px",
                  borderRadius: "6px",
                  paddingLeft: "8px",
                  minHeight: "50px",
                  boxShadow: state.isFocused ? "0 0 0 2px #CCFD04" : "none",
                  "&:hover": { borderColor: "#CCFD04" },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#33353C",
                  fontSize: "14px",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "#33353C",
                  fontSize: "14px",
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: "#F0F0F0",
                  borderRadius: "4px",
                }),
                multiValueLabel: (provided) => ({
                  ...provided,
                  color: "#33353C",
                  fontSize: "14px",
                }),
                multiValueRemove: (provided) => ({
                  ...provided,
                  color: "#33353C",
                  "&:hover": { backgroundColor: "#CCFD04", color: "white" },
                }),
              }}
            />
          </div>

          {/* Years of Experience */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Years of Experience
            </label>
            <input
              type="number"
              name="yearsOfExperience"
              placeholder="e.g 4 Years"
              max={50}
              maxLength={2}
              required
              className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Location
            </label>
            <div className="flex space-x-4">
              <select
                id="states"
                value={selectedState}
                onChange={handleStateChange}
                className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
              >
                <option value="">-- Select State --</option>
                {Object.keys(nigeriaStatesLGA).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <select
                id="lgas"
                value={selectedLGA}
                onChange={handleLGAChange}
                className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
              >
                <option value="">-- Select LGA --</option>
                {selectedState &&
                  nigeriaStatesLGA[selectedState].map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
              </select>
              <input
                type="text"
                name="location[address]"
                placeholder="123 Main Street"
                required
                className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Bio
            </label>
            <textarea
              name="bio"
              rows={3}
              placeholder="Brief description about yourself"
              required
              className="w-full bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
            ></textarea>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
              className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[52px] bg-[#282828] text-gray-100 py-2 px-4 text-[16px] rounded-[6px] font-medium hover:scale-105 duration-500 focus:outline-none focus:ring-2 focus:ring-purple-700 flex items-center justify-center"
          >
            {loading ? "Loading" : "Register"}
          </button>
        </form>
        {showSubmissionModal && <SubmissionSuccessful hideModal={hideModal} />}
      </div>
    </>
  );
};

export default RegisterServiceProvider;
