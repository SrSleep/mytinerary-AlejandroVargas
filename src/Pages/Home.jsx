import Slider from '../Components/Slider/Slider';
import Hero from '../Components/Hero/Hero';
import { data } from '../MockData/Data';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/authActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Home() {
  const loginWithToken = async (token) => {
    try {
      const response = await axios.get("http://localhost:8080/api/auth/validatetoken", { headers: { Authorization: `Bearer ${token}` } });
      console.log("LOG de response app: ", response.data);
  
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  
  }


  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }));
      })
    }
    navigate('/');
  }, [dispatch]);



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
