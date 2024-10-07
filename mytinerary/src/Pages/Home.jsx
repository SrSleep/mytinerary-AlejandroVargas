import Slider from '../Components/Slider/Slider';
import Hero from '../Components/Hero/Hero';
import {data} from '../MockData/Data';
export default function Home() {
  return (
    <div className='px-4'>
      <Hero />
      <Slider data={data} />
    </div>
  );
}
