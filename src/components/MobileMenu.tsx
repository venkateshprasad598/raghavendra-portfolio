import React from 'react';
import { Drawer, Menu } from 'antd';
import { Link } from 'react-scroll';
import { GraduationCap, Briefcase, TestTube, User, Mail, Menu as MenuIcon } from 'lucide-react';

interface MobileMenuProps {
  visible: boolean;
  onClose: () => void;
}

const MobileMenu = ({ visible, onClose }: MobileMenuProps) => {
  const menuItems = [
    {
      key: 'about',
      icon: <User className="h-4 w-4" />,
      label: <Link to="about" smooth={true} duration={500} onClick={onClose}>About</Link>
    },
    {
      key: 'education',
      icon: <GraduationCap className="h-4 w-4" />,
      label: <Link to="education" smooth={true} duration={500} onClick={onClose}>Education</Link>
    },
    {
      key: 'internship',
      icon: <Briefcase className="h-4 w-4" />,
      label: <Link to="internship" smooth={true} duration={500} onClick={onClose}>Internship</Link>
    },
    {
      key: 'projects',
      icon: <TestTube className="h-4 w-4" />,
      label: <Link to="projects" smooth={true} duration={500} onClick={onClose}>Projects</Link>
    },
    {
      key: 'contact',
      icon: <Mail className="h-4 w-4" />,
      label: <Link to="contact" smooth={true} duration={500} onClick={onClose}>Contact</Link>
    }
  ];

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={visible}
      width={280}
      className="p-0"
    >
      <Menu
        mode="inline"
        items={menuItems}
        className="border-none"
        style={{ marginTop: '20px' }}
      />
    </Drawer>
  );
};

export default MobileMenu;