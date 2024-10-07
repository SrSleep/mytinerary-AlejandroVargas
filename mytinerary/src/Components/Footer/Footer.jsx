import { FacebookLogo, InstagramLogo,XLogo } from "@phosphor-icons/react";
export default function Footer() {
  return (
    <>
      <div className='flex flex-col items-center mt-6 justify-around flex-wrap bg-slate-900 py-2 backdrop-blur-md bg-gray-900/80 text-gray-300'>
        <div className='flex justify-center mx-2 items-center'>
          <a className='rounded-lg px-3 hover:bg-slate-600' href=''>
            Home
          </a>
          <a className='rounded-lg px-3 hover:bg-slate-600' href=''>
            Cities
          </a>
          <a className='rounded-lg px-3 hover:bg-slate-600' href=''>
            Login
          </a>
        </div>
        <div className='flex justify-center mx-2 items-center flex-wrap'>
          <div className='flex flex-row items-center rounded-lg px-3 hover:bg-slate-600'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <FacebookLogo className='w-6 h-6 me-1'  color="#669900" />
            </a>
            <p>Facebook</p>
          </div>
          <div className='flex flex-row items-center rounded-lg px-3 hover:bg-slate-600'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <InstagramLogo className='w-6 h-6 me-1' color="#669900" />
            </a>
            <p className=''>Instagram</p>
          </div>
          <div className='flex flex-row items-center rounded-lg px-3 hover:bg-slate-600'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <XLogo className='w-6 h-6 me-1' color="#669900" />
            </a>
            <p className=''>Twitter</p>
          </div>
        </div>
        <div className='flex  items-center gap-2'>
          <p>Contact Us</p>
          <p>742 de Evergreen Terrace</p>
          <p>Email: Contact@mytinerary.com</p>
          <p>Phone: (123) 764 - 84377</p>
        </div>
      </div>
    </>
  );
}
