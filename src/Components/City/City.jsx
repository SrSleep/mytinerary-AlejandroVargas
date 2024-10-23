
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CityImage from "../CityImage/CityImage"
import SearchBar from "../SearchBar/SearchBar"
import CitiesDiv from "../CitiesDiv/CitiesDiv"

const City = () => {
  const [cities, setCities] = useState([])
  const navigate= useNavigate();
  const handlerClickDetails = (cityName) => {
      navigate(`/citydetails?name=${cityName}`)
  }
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
        <CityImage></CityImage>
        <SearchBar></SearchBar>
        <CitiesDiv cities={cities} ></CitiesDiv>
        
      </div>
    </>
  );
};

export default City;
