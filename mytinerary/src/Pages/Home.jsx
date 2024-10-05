import Slider from '../Components/Slider/Slider';
import {data} from '../MockData/Data';
export default function Home() {
  return (
    <div className=' px-4'>
      <Slider data={data} />
    </div>
  );
}
