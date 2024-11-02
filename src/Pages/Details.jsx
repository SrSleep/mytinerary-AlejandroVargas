import { useSearchParams, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Itinerary from "../Components/Itinerary/Itinerary";

export default function Details() {
  useEffect(() => {
    // const urlApi = `http://localhost:8080/api/city/name/${cityName}`
    const urlApi = `http://192.168.0.153:8080/api/itinerary/cityItineraries/${idCity}`
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {


        setcity(data.itineraries[0].cityId)
        setPlan(data.itineraries)
        console.log( "Los datoss use efect "+ data.itineraries);

      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })
  }, [])


  const [searchParams] = useSearchParams();
  const idCity = searchParams.get('id')

  const [city, setcity] = useState([])
  const [plan, setPlan] = useState([])

console.log(plan);


  




  return (
    <div>
      <div className="relative">
        <div className=" w-full  z-0 pt-16">
          <img className="w-full h-64 object-cover opacity-70" src={city.image} alt="image city" />
        </div>
        <div className="absolute flex flex-col items-center gap-3 top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="font-bold text-white text-center text-2xl md:text-4xl p-2">
            {city.name}
          </h3>

          <NavLink to={-1} type="button" className="items-center text-white font-medium rounded-lg text-sm p-2  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD">
            Back to cities
          </NavLink>
        </div>
      </div>
      
      <Itinerary plan={plan} ></Itinerary>



    </div>
  );
}
