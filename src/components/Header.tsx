import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'antd';
import { GraduationCap, Briefcase, TestTube, User, Mail, Menu as MenuIcon } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const menuItems = [
    {
      key: 'about',
      icon: <User className="h-4 w-4" />,
      label: <Link to="about" smooth={true} duration={500}>About</Link>
    },
    {
      key: 'education',
      icon: <GraduationCap className="h-4 w-4" />,
      label: <Link to="education" smooth={true} duration={500}>Education</Link>
    },
    {
      key: 'internship',
      icon: <Briefcase className="h-4 w-4" />,
      label: <Link to="internship" smooth={true} duration={500}>Internship</Link>
    },
    {
      key: 'projects',
      icon: <TestTube className="h-4 w-4" />,
      label: <Link to="projects" smooth={true} duration={500}>Projects</Link>
    },
    {
      key: 'contact',
      icon: <Mail className="h-4 w-4" />,
      label: <Link to="contact" smooth={true} duration={500}>Contact</Link>
    }
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Raghavendra
            </span>
          </div>
          
          <Menu 
            mode="horizontal" 
            items={menuItems} 
            className="border-none bg-transparent hidden md:block" 
          />

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuVisible(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu 
        visible={mobileMenuVisible} 
        onClose={() => setMobileMenuVisible(false)} 
      />
    </header>
  );
};

export default Header;