import { ArrowRight } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-transparent rounded-xl">
      <div className="grid max-w-screen-xl h-[90vh] md:h-auto lg:h-[90vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mr-auto place-self-center lg:col-span-7 flex flex-col items-center lg:items-start">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-7xl text-white">
            MyTinerary
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-2xl lg:text-4xl text-gray-400">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </p>

          <NavLink
            to={"/cities"}
            className="inline-flex items-center animate-bounce justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-brand-default hover:bg-brand-hoverD focus:ring-4 focus:ring-white"
          >
            Get started <ArrowRight className="w-8 h-8 ms-1" color="#f7f7f7" />{" "}
          </NavLink>
        </div>
        <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex ">
          <img
            className="rounded-xl object-cover"
            src="../../../Images/travel.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
