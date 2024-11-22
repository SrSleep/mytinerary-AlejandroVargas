import { Outlet } from 'react-router-dom';

import '../App.css';
export default function StandarLayout() {
  return (
    <>   
      <main className=' w-full min-h-[95vh]'>
        <Outlet></Outlet>
      </main>
    </>
  );
}
