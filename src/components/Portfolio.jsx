import React from "react";
import port1 from "../assets/bringJob.jpg"

const Portfolio = () => {
    return(
        <div>
            <h4 className="flex justify-center items-center sm:text-6xl text-neutral-700 mt-11 tracking-wide text-5xl"> Portfolio</h4>

           <div  className="flex flex-wrap">
            <div className="flex flex-wrap w-full lg:h-1/3  px-6 mt-10 gap-4   sm:gap-4  justify-center items-center ">
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port1} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
            </div>
            </div>
        </div>
    )
}

export default Portfolio