import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../store/actions/cityActions";
import CityImage from "../CityImage/CityImage"
import SearchBar from "../SearchBar/SearchBar"
import CitiesDiv from "../CitiesDiv/CitiesDiv"

const City = () => {
  const { loading } = useSelector((state) => state.cityStore)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [])
  

  return (
    <>
      <div className="pt-16">
        <CityImage></CityImage>
        <SearchBar></SearchBar>
        {loading ? (<div className="flex items-center justify-center mx-auto w-full h-[50vh] rounded-lg" >
          <div className="px-3 py-1 text-3xl font-medium leading-none text-center text-white bg-brand-default rounded-full animate-pulse">LOADING...</div>
        </div>

        ) : (
          <>            
            <CitiesDiv></CitiesDiv>
          </>
        )}


      </div>
    </>
  );
};

export default City;
