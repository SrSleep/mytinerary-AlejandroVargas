import {Outlet} from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
export default function StandarLayout() {
  return (
    <>
      <Header />
      <main className='max-w-[1200px] w-full mx-auto pt-24'>
        <Outlet></Outlet>
        <div className='h-96'></div>
      </main>
      <Footer />
    </>
  );
}
