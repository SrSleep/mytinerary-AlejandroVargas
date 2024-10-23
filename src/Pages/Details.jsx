 import { useSearchParams, useNavigate } from "react-router-dom";
 import { useState } from "react";
 import { useEffect } from "react";

export default function Details() {
  const navigate= useNavigate();
  const BackCities = () => {
    navigate(-1)
}

const [searchParams] = useSearchParams();
const cityName = searchParams.get('name')

const[city,setcity] = useState([])


useEffect(() => {
  const urlApi = `http://localhost:8080/api/city/name/${cityName}`
  fetch(urlApi)
    .then((response) => response.json())
    .then((data)=>{
      console.log(data);
      
      setcity(data.nameCity[0])
    })
    .catch((error)=>{
      console.error('Error al obtener los datos:', error);
    })
},[])
console.log(city);




  return (
    <div className="flex flex-col justify-center items-center h-[93vh] mb-2">
      <p className=" text-3xl text-cyan-600">{city.name}</p>
      <img className="w-full h-64 object-cover opacity-80" src={city.image} alt="descirpciond city" />
      <button type="button" className=" flex items-center text-white font-medium rounded-lg text-sm p-2  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD" onClick={() => BackCities()}>
        Back
      </button>
      <p className=" text-9xl text-cyan-600 ">Under construction</p>
    </div>
  );
}
