import React from 'react';
import {Outlet} from 'react-router-dom';

export default function StandarLayout() {
  return (
    <>
      <main className='max-w-[1200px] w-full mx-auto'>
        <Outlet></Outlet>
      </main>
    </>
  );
}
