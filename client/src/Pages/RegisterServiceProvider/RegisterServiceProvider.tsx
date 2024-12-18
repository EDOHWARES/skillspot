import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { nigeriaStatesLGA } from "../../data/nigeriaStatesLGA";
import Select from "react-select";
import { allSkills } from "../../data/skills";
import SubmissionSuccessful from "./Modules/SubmissionSucessful/SubmissionSuccessful";

const RegisterServiceProvider = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Handle State Selection
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedLGA(""); // Reset LGA when the state changes
  };

  const handleLGAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLGA(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      location: {
        address: formData.get("location[address]"),
        city: formData.get("location[city]"),
        state: formData.get("location[state]"),
      },
      bio: formData.get("bio"),
      skills: selectedSkills.map((skill) => skill.trim()),
    };

    console.log("Form Data:", data);
    // Submit data to the server here
  };

  return (
    <>
      <div className="text-black pb-32">
        {/* { <SubmissionSuccessful />} */}
        <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-full">
          <span className="absolute left-2 md:left-10 cursor-pointer">
            <GrFormPrevious className="text-2xl" />
          </span>
          <h1 className="text-[22px] md:text-[30px] font-bold text-[#282828] text-center flex-grow">
            Become a service provider
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-[5rem] space-y-4 px-4 md:px-10 md:w-2/3 py-4 mx-auto "
        >
          {/* Name */}
          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Edoh Emmanuel"
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
              placeholder="edohemmanuel@gmail.com"
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
              placeholder="08123456789"
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

          <div className="space-y-2">
            <label className="block font-normal text-gray-600 text-[14px]">
              Years of Experience
            </label>
            <input
              type="number"
              name="yearsOfExperience"
              placeholder="4 Years"
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
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterServiceProvider;
