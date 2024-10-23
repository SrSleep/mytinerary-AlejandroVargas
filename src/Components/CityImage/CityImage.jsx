const CityImage = () => {
    return(
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
    )
}
export default CityImage