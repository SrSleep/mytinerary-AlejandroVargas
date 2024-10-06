import React from 'react';
import travel from '../../assets/travel.svg';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='fixed t-0 l-0 z-50 w-full backdrop-blur-md bg-gray-900/80'>
      <nav>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            href='#'
            className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={travel} className='h-8' alt='Flowbite Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              MyItenary
            </span>
          </a>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <button
              type='button'
              className='text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-700 hover:bg-blue-800 dark:focus:ring-blue-800'>
              Login
            </button>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className={` ${
              isOpen ? 'max-h-96' : 'max-h-0'
            } items-center  md:max-h-96 justify-between w-full md:flex inline-block md:w-auto md:order-1 overflow-hidden transition-all duration-200 ease-in-out' 
              id='navbar-sticky`}>
            <ul className='flex flex-col pt-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                  aria-current='page'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                  Cities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}