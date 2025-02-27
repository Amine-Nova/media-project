import React from 'react'
import { IoLogoCodepen } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from '../Navbar/ResponsiveMenu';
import logo from "../../images/navbar/mediabenotman-logo.webp";

const NavbarMenu = [
    {
        id: 1,
        title : 'HOW WE WORK',
        url : '/'
    },
    {
        id: 2,
        title : 'ABOUT US',
        url : '/about'
    },
    {
        id: 3,
        title : 'SERVICES',
        url : '/projects'
    },
    {
        id: 4,
        title : 'PORTFOLIO',
        url : '/contact'
    },
    {
        id: 5,
        title : 'FAQ',
        url : '/projects'
    },
    {
        id: 6,
        title : 'CONTACT',
        url : '/contact'
    },
]

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container flex justify-between items-center py-4 md:pt-4">
          {/* Logo section */}
          <div className='w-55 h-auto'>
            <img src={logo} alt="media" />
          </div>

          {/* Menu section */}
          <div className='hidden md:block'>
            <ul className='navtxt flex items-center gap-6 text-blue-900'>
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.url} className='inline-block py-1 px-3 hover:text-blue-950 hover:shadow-[0_3px_0_-1px_#215be0] font-semibold'>{menu.title}</a>
                </li>
              ))}
              <button></button>
            </ul>
          </div>

          {/* Mobile section */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl text-blue-700' />
          </div>
          <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
