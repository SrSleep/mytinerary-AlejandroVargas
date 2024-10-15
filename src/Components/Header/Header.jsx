import React from 'react';
import travel from '../../assets/icon.svg';
import { UserCircle, List } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';

const Header = (links) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='fixed left-0 right-0 t-0 l-0 z-50 backdrop-blur-md bg-gray-900/80'>
      <nav>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            href='#'
            className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={travel} className='h-8' alt='Logo of myTinerary' />
            <span className='text-lg self-center md:text-2xl font-semibold whitespace-nowrap text-white'>
              MyTinerary
            </span>
          </a>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <button
              type='button'
              className='flex items-center text-white font-medium rounded-lg text-sm px-1  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD '>
              <UserCircle className='w-5 h-5 me-1' color="#f7f7f7" />
              Login
            </button>
            <button
              
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-brand-default focus:outline-none focus:ring-2 focus:ring-brand-hoverL'
              >
              <span className='sr-only'>Open main menu</span>
              <List className='w-7 h-7' color="#f7f7f7" />
            </button>
          </div>
          <div
            className={` ${isOpen ? 'max-h-96' : 'max-h-0'
              } items-center  md:max-h-96 justify-between w-full md:flex inline-block md:w-auto md:order-1 overflow-hidden transition-all duration-200 ease-in-out' 
              `}>
            <ul className='flex flex-col text-center pt-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
              {links?.Links.map((link) => (
                <li key={link.id}>  
                 < NavLink to={link.to} className={({isActive})=>isActive? 
                 "block py-2 px-3 rounded-lg text-white bg-brand-default  md:bg-transparent md:text-brand-hoverL md:p-0":
                 "block py-2 px-3 rounded-lg text-white hover:bg-brand-default md:hover:bg-transparent md:p-0 md:hover:text-brand-hoverL" } > 
                {link.text}
                 </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;