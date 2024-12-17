import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { nigeriaStatesLGA } from "../../data/nigeriaStatesLGA";

const RegisterServiceProvider = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");

  const [services, setServices] = useState([{ name: "", description: "" }]);

  // Handle State Selection
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedLGA(""); // Reset LGA when the state changes
  };

  const handleLGAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLGA(e.target.value);
  };

  const addService = () => {
    setServices([...services, { name: "", description: "" }]);
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      services,
      location: {
        address: formData.get("location[address]"),
        city: formData.get("location[city]"),
        state: formData.get("location[state]"),
      },
      bio: formData.get("bio"),
      skills: formData
        .get("skills")
        ?.toString()
        .split(",")
        .map((skill) => skill.trim()),
    };

    console.log("Form Data:", data);
    // Submit data to the server here
  };

  return (
    <div className="text-black pb-32">
      <div className="bg-white py-4 px-2 md:px-10 flex items-center justify-between absolute top-0 left-0 w-full">
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
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="edohemmanuel@gmail.com"
            className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="08123456789"
            required
            className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
          />
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

        {/* Services */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Services
          </label>
          {services.map((service, index) => (
            <div key={index} className="flex space-x-4 mb-2">
              <input
                type="text"
                name={`services[${index}][name]`}
                placeholder="Service Name"
                required
                className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
                value={service.name}
                onChange={(e) =>
                  handleServiceChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                name={`services[${index}][description]`}
                placeholder="Service Description"
                required
                className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
                value={service.description}
                onChange={(e) =>
                  handleServiceChange(index, "description", e.target.value)
                }
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addService}
            className="mt-2 text-purple-500 font-medium"
          >
            + Add Another Service
          </button>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Address
          </label>
          <input
            type="text"
            name="location[address]"
            placeholder="123 Main Street"
            required
            className="w-full h-[50px] bg-transparent px-4 py-2 border rounded-[6px] text-[#33353C] text-[14px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#CCFD04]"
          />
        </div>

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

        {/* Skills */}
        <div className="space-y-2">
          <label className="block font-normal text-gray-600 text-[14px]">
            Skills
          </label>
          <input
            type="text"
            name="skills"
            placeholder="E.g., Plumbing, Electrical Repairs"
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
  );
};

export default RegisterServiceProvider;
