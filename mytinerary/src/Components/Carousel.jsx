import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    name: 'Cabo',
    img: '/Images/ciudadDelCabo.jpg',
  },
  {
    name: 'Barcelona',
    img: '/Images/barcelona.jpg',
  },
  {
    name: 'Florencia',
    img: '/Images/florencia.jpg',
  },
  {
    name: 'hoiAn',
    img: '/Images/hoiAn.jpg',
  },
  {
    name: 'Cairo',
    img: '/Images/cairo.jpg',
  },
  {
    name: 'Chiang Mai',
    img: '/Images/barcelona.jpg',
  },
  {
    name: 'Roma',
    img: '/Images/roma.jpg',
  },
  {
    name: 'Kioto',
    img: '/Images/kioto.jpg',
  },
]

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className='w-3/4 mx-auto'>
      <div className=' mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='bg-white h-[450px] rounded-xl '>
              <div className=' h-56 rounded-t-xl bg-slate-950 flex justify-center items-center '>
                <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full object-cover' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4' >
                <p className='text-xl font-semibold' >{d.name}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsa animi quidem voluptatum, fugit vero. Similique harum rerum incidunt sunt.</p>
                <button className='bg-indi'>learn more</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
