import { Globe, City } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";
const CitiesDiv = () => {
    const { cities } = useSelector((state) => state.cityStore);
    return (
        <div className="flex justify-around flex-wrap items-center my-2">
            {cities.length === 0 ? ( 
                <div className="relative h-[50vh] w-11/12 mb-2 text-custom-gradient flex items-center justify-center text-5xl text-center">
                    <img className="absolute inset-0 -z-10 w-full h-full object-cover opacity-70 rounded-2xl" src="/Images/notFound.jpg" alt="image of a desert" />
                    <p>It seems there is nothing here.</p>
                </div>
            ) : (
                cities.map((city) => (
                    <div key={city._id} className="relative border-brand-default decoration-solid w-80  aspect-video rounded-xl overflow-hidden flex flex-col items-center justify-start mb-6">
                        <img className="w-full h-full object-cover opacity-70" src={city.image} alt={city.description} />
                        <div className="absolute top-2 left-2 z-10 text-white flex flex-col">
                            <div className="flex items-center self-start gap-2 px-2 bg-slate-950 bg-opacity-50 rounded-full mb-1">
                                <City size={16} color="currentColor" className="text-brand-hoverD" />
                                <h4 className="p-1">{city.name}</h4>
                            </div>
                            <div className="flex items-center self-start gap-2 px-2 bg-slate-950 bg-opacity-50 rounded-full">
                                <Globe size={16} color="currentColor" className="text-brand-hoverD" />
                                <p className="p-1">{city.country}</p>
                            </div>
                        </div>
                        <NavLink to={`/citydetails?id=${city._id}`}
                            type="button"
                            className="absolute right-3 bottom-3 flex items-center text-white font-medium rounded-lg text-sm p-2 md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD"
                            
                        >
                            See more
                        </NavLink>
                    </div>
                ))
            )}
        </div>
    );
}

export default CitiesDiv;
