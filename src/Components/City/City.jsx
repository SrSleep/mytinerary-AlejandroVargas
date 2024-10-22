import { MagnifyingGlass, ArrowDown, Globe, City as CityIcon, } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const City = (data) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const urlApi = 'http://localhost:8080/api/city/all'
    fetch(urlApi)
      .then((response) => response.json())
      .then((data)=>{
        setCities(data.cities)
      })
      .catch((error)=>{
        console.error('Error al obtener los datos:', error);
      })
  },[])
console.log(cities);

  return (
    <>
      <div className="pt-16">
        <div className="relative flex flex-col items-center justify-center w-full h-64 overflow-hidden ">
          <img className="absolute inset-0 -z-10 w-full h-full object-cover opacity-70" src="/Images/cities.jpg" alt="View of a landscape with a road and a lake."
          />
          <div className="m-4 md:mx-auto  md:max-w-96">
            <h3 className="font-bold text-white text-center text-2xl md:text-4xl p-2">
              Cities
            </h3>
            <p className="font-light text-gray-400 text-center text-xl md:text-2xl p-2 text-shadow">
              Collection of the most beautiful places and experience
            </p>
          </div>
        </div>
        <div>
          <form class="flex items-center max-w-72 md:max-w-2xl mx-auto">
            <label for="citiesSearch" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlass color="#f7f7f7" />
              </div>
              <input type="text" id="citiesSearch"
                class="text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-brand-hoverD"
                placeholder="Enter a city..."
              />
              <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                <ArrowDown color="#f7f7f7" />
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-around flex-wrap items-center ">
        {cities.map((city) => (
            <div className="relative border-brand-default decoration-solid w-80 aspect-video rounded-xl overflow-hidden flex flex-col  items-center justify-start mb-6">
              <img className="w-full h-full object-cover opacity-80" src={city.image} alt="descirpciond city" />
              <div className="absolute top-0 left-4 flex flex-col z-10 text-white">
                <div className="flex items-center gap-2">
                  <CityIcon size={16} color="currentColor" className="text-brand-hoverD" />
                  <h4 className="p-1">{city.name}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} color="currentColor" className="text-brand-hoverD"
                  />
                  <p className="p-1">{city.country}</p>
                </div>
              </div>
              <button type="button" className=" absolute right-3 bottom-3 flex items-center text-white font-medium rounded-lg text-sm p-2  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD" >
                See more
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default City;
