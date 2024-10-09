import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { links } from '../MockData/Link.js'
export default function StandarLayout() {
  return (
    <>
      <Header Links={links} />
      <main className='max-w-[1200px] w-full mx-auto pt-16'>
        <Outlet></Outlet>
      </main>
      <Footer Links={links} />
    </>
  );
}
