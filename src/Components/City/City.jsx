import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CityImage from "../CityImage/CityImage"
import SearchBar from "../SearchBar/SearchBar"
import CitiesDiv from "../CitiesDiv/CitiesDiv"

const City = () => {
  const [cities, setCities] = useState([])
  const [textSearch, setTextSearch] = useState([])
  const [loading, setLoading] = useState([true])
  const navigate = useNavigate();

  const handlerClickDetails = (cityName) => {
    navigate(`/citydetails?name=${cityName}`);
  }

  const textSearchHandler = (text) => {
    setTextSearch(text);
    const urlApi = `http://localhost:8080/api/city/all?name=${text}`
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        setCities(data.cities)


      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })


  }

  useEffect(() => {
    const urlApi = 'http://localhost:8080/api/city/all'
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        setCities(data.cities)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      })
  }, [])

  return (
    <>
      <div className="pt-16">
        <CityImage></CityImage>
        <SearchBar textSearchHandler={textSearchHandler} textSearch={textSearch} ></SearchBar>
        {loading ? (<div class="flex items-center justify-center mx-auto w-full h-[50vh] rounded-lg" >
            <div class="px-3 py-1 text-3xl font-medium leading-none text-center text-white bg-brand-default rounded-full animate-pulse">LOADING...</div>
          </div>

        ) : (
          <CitiesDiv cities={cities} handlerClickDetails={handlerClickDetails} ></CitiesDiv>
        )}


      </div>
    </>
  );
};

export default City;
