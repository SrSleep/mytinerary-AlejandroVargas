import Slider from '../Components/Slider/Slider';
import Hero from '../Components/Hero/Hero';
import { data } from '../MockData/Data';
export default function Home() {
  return (
    <>
      <div className='custom-gradient'>
        <div className='pt-16 '>
          <Hero />
        </div>

        <div className='max-w-[1280px] w-full mx-auto px-4'>
          <Slider data={data} />
        </div>
      </div>
    </>
  );
}
