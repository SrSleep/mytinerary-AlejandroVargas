import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CityImage from "../CityImage/CityImage"
import SearchBar from "../SearchBar/SearchBar"
import CitiesDiv from "../CitiesDiv/CitiesDiv"

const City = () => {
  const [cities, setCities] = useState([])
  const [textSearch, setTextSearch] = useState([])
  const navigate= useNavigate();

  const handlerClickDetails = (cityName) => {
      navigate(`/citydetails?name=${cityName}`);
  }

  const textSearchHandler =(text)=>{
    setTextSearch(text);
    const urlApi= `http://localhost:8080/api/city/all?name=${text}`
    fetch(urlApi)
    .then((response) => response.json())
    .then((data)=>{
      setCities(data.cities)
      
    })
    .catch((error)=>{
      console.error('Error al obtener los datos:', error);
    })

    
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

  return (
    <>
      <div className="pt-16">
        <CityImage></CityImage>
        <SearchBar textSearchHandler={textSearchHandler} textSearch={textSearch} ></SearchBar>
        <CitiesDiv cities={cities} handlerClickDetails={handlerClickDetails} ></CitiesDiv>
        
      </div>
    </>
  );
};

export default City;
