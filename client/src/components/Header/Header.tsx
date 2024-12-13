import React from 'react';
import logo from '../../assets/icons/skillspot-icon.png';
import menu from '../../assets/icons/menu.png';

const Header = () => {
  return (
    <header className='bg-[#CCFD04] h-[198px] w-full px-4 md:px-10 py-2 md:py-4'>
        <div className='cont flex items-center justify-between'>
            <div className="logo flex items-center space-x-2 cursor-pointer">
                <img src={logo} alt="skillspot logo" />
                <span className='font-bold text-[28.81px]'>
                    <h1>SkillSpot</h1>
                </span>
            </div>
            <nav>
                <div className='cursor-pointer'><img src={menu} alt="menu icon" /></div>
            </nav>
        </div>
    </header>
  )
}

export default Header