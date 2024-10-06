import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
export default function Footer() {
  return (
    <div className='flex justify-around flex-wrap bg-slate-900 py-2 backdrop-blur-md bg-gray-900/80'>
      <div className='flex flex-col justify-center mx-2 items-center'>
        <a className='rounded-lg px-3 hover:bg-slate-600 text-gray-300' href=''>
          Home
        </a>
        <a className='rounded-lg px-3 hover:bg-slate-600 text-gray-300' href=''>
          Cities
        </a>
        <a className='rounded-lg px-3 hover:bg-slate-600 text-gray-300' href=''>
          Login
        </a>
      </div>

      <div className='flex flex-col justify-center mx-2 items-center flex-wrap '>
        <div className='flex flex-row items-center rounded-lg px-3 hover:bg-slate-600'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <img className='w-6 h-6 me-1' src={facebook} alt='' />
          </a>
          <p>Facebook</p>
        </div>
        <div className='flex flex-row items-center rounded-lg px-3 hover:bg-slate-600'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} className='w-6 h-6 me-1' alt='' />
          </a>
          <p className=''>Instagram</p>
        </div>
        <div className='flex flex-row items-center rounded-lg px-3 hover:bg-slate-600'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <img src={twitter} className='w-6 h-6 me-1' alt='' />
          </a>
          <p className=''>Twitter</p>
        </div>
      </div>
      <div className='flex flex-col items-center mx-2'>
        <p>Contact Us</p>
        <p>742 de Evergreen Terrace</p>
        <p>Email: Contact@mytinerary.com</p>
        <p>Phone: (123) 390-7809</p>
      </div>
    </div>
  );
}
