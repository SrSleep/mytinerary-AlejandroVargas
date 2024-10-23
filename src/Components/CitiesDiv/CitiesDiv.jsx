import { Globe, City } from "@phosphor-icons/react";

const CitiesDiv = ({cities}) => {
    return (
        <div className="flex justify-around flex-wrap items-center my-2">
            {/* dale un tamano al div principar  y despues le das las funciones que te dio gpt */}
            {cities.map((city) => (
                <div className="relative border-brand-default decoration-solid w-80 aspect-video rounded-xl overflow-hidden flex flex-col  items-center justify-start mb-6">
                    <img className="w-full h-full object-cover opacity-70" src={city.image} alt={city.description} />
                    <div className="absolute top-2 left-2 z-10 text-white flex flex-col">
                        <div className="flex items-center w- gap-2 px-2 bg-slate-950 bg-opacity-50 rounded-full mb-1 ">
                            <City size={16} color="currentColor" className="text-brand-hoverD" />
                            <h4 className="p-1 ">{city.name}</h4>
                        </div>
                        <div className="flex items-center  gap-2 px-2 bg-slate-950 bg-opacity-50 rounded-full">
                            <Globe size={16} color="currentColor" className="text-brand-hoverD"
                            />
                            <p className="p-1">{city.country}</p>
                        </div>
                    </div>
                    <button type="button" className=" absolute right-3 bottom-3 flex items-center text-white font-medium rounded-lg text-sm p-2  md:px-3 md:py-2 text-center bg-brand-default hover:bg-brand-hoverD" onClick={() => handlerClickDetails(city.name)}>
                        See more
                    </button>
                </div>
            ))}
        </div>
    )
}
export default CitiesDiv