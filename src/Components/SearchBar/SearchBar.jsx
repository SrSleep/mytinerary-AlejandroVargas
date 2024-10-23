import { MagnifyingGlass, ArrowDown } from "@phosphor-icons/react";

const SearchBar = ({ textSearchHandler, textSearch }) => {
    return (
        <div>
            <form className="flex items-center max-w-72 md:max-w-2xl mx-auto my-6" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="citiesSearch" className="sr-only">
                    
                    Search
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <MagnifyingGlass color="#f7f7f7" />
                    </div>
                    <input type="text" id="citiesSearch"
                        className="text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-brand-hoverD"
                        placeholder="Enter a city..." value={textSearch} onChange={(text)=>textSearchHandler(text.target.value)} />
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <ArrowDown color="#f7f7f7" />
                    </button>
                </div>
            </form>
        </div>
    )
}
export default SearchBar