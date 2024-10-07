import {Outlet} from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
export default function StandarLayout() {
  return (
    <>
      <Header />
      <main className='max-w-[1200px] w-full mx-auto pt-16'>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
