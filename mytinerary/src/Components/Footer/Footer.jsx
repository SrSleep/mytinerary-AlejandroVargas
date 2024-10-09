import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
const Footer = (links) => {
  return (
    <>
      <div className='flex items-center mt-6  justify-center flex-wrap bg-slate-900 py-2 bg-gray-900/80 text-gray-300'>
        <div className='flex justify-center mx-2 items-center'>
          {links?.Links.map((link) => (
            <a key={link.id}>
              < NavLink to={link.to} className={({ isActive }) => isActive ?
                "block py-2 px-3 rounded-lg text-white bg-brand-default  md:bg-transparent md:text-brand-hoverL " :
                "block py-2 px-3 rounded-lg text-white hover:bg-brand-default md:hover:bg-transparent md:p-0 md:hover:text-brand-hoverL"} >
                {link.text}
              </NavLink>
            </a>
          ))}
        </div>
        <div className='flex justify-center items-center mx-2 p-2'>
          <div className='flex flex-row items-center rounded-lg px-3'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <FacebookLogo className='w-6 h-6 me-1' color="#669900" />
            </a>
            <p>Facebook</p>
          </div>
          <div className='flex flex-row items-center rounded-lg px-3'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <InstagramLogo className='w-6 h-6 me-1' color="#669900" />
            </a>
            <p className=''>Instagram</p>
          </div>
          <div className='flex flex-row items-center rounded-lg px-3'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <XLogo className='w-6 h-6 me-1' color="#669900" />
            </a>
            <p className=''>Twitter</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center p-2 gap-2'>
          <p><span className="text-brand-default">Contact Us:</span> 742 de Evergreen Terrace </p>
          <span className="hidden md:block text-brand-default">|</span>
          <p><span className="text-brand-default">Email:</span> Contact@mytinerary.com</p>
          <span className="hidden md:block text-brand-default">|</span>
          <p><span className="text-brand-default">Phone:</span> (123) 764 - 84377</p>
        </div>
      </div>
    </>
  );
};
export default Footer