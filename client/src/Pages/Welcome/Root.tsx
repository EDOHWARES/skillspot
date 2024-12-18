import { AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from '../../assets/icons/skillspot-icon.png';

const Root = () => {
  return (
    <div className='bg-[#CCFD04] w-full h-screen flex items-center justify-center text-center'>
        <div className="logo flex flex-col items-center justify-center space-y-3">
            <img src={logo} alt="skilspot logo" className='w-[99px]' />
            <span className="font-bold text-[28.81px] text-[#282828]">SkillSpot</span>
            <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
    </div>
  )
}

export default Root