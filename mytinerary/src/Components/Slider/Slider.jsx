// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './Slider.css';

const Slider = (data) => {
  console.log(data.data);

  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 4,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
          },
        }}
        className='mySwiper'>
        {data?.data.map((d, i) => (
          <SwiperSlide key={i}>
            <div className='mb-6 relative bg-white shadow-md rounded-xl overflow-hidden '>
              <div className=' h-56 rounded-xl  flex justify-center items-center '>
                <img
                  src={d.img}
                  alt={d.name}
                  className='h-44 w-44 object-cover'
                />
              </div>
              <div className='p-4 absolute bottom-3 right-3'>
                <p className='text-white font-bold text-3xl'>{d.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;