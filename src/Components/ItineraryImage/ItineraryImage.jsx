import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ItineraryImage = () => {
    const { city } = useSelector((state) => state.itineraryStore);
    
return(
<div className="relative">
        <div className=" w-full  z-0 pt-16">
          <img className="w-full h-64 object-cover opacity-70"  src={city?.image || (city?.[0]?.cityId?.image)} alt="City image" />
        </div>
        <div className="absolute flex flex-col items-center gap-3 top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="font-bold text-white text-center text-2xl md:text-4xl p-2">
            {city?.name || city?.[0]?.cityId?.name}
          </h3>

          <NavLink to={-1} type="button" className="items-center text-white font-medium rounded-lg text-sm p-2  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD">
            Back to cities
          </NavLink>
        </div>
      </div>
)

}

export default ItineraryImage