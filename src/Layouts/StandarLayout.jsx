import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { links } from '../MockData/Link.js';

import '../App.css';
export default function StandarLayout() {
  return (
    <>
      <Header Links={links} />
      <main className=' w-full'>
        <Outlet></Outlet>
      </main>
      <Footer Links={links} />
    </>
  );
}
