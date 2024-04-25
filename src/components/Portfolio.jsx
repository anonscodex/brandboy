import React from "react";
import port1 from "../assets/bringJob.jpg"
import port2 from "../assets/hangout1.jpg"
import port3 from "../assets/mustaqeemext2.jpg"
import port4 from "../assets/meeday2.jpg"
import port5 from "../assets/photosbysb.jpg"
import port6 from "../assets/rayynet.jpg"
import port7 from "../assets/maid.jpg"
import port8 from "../assets/ACOSA2.jpg"
import port9 from "../assets/memys.jpg"
import port10 from "../assets/natcon.jpg"

const Portfolio = () => {
    return(
        <div>
            <h4 className="flex justify-center items-center sm:text-6xl text-neutral-700 mt-11 tracking-wide text-5xl"> Portfolio</h4>

           <div  className="flex flex-wrap">
            <div className="flex flex-wrap w-full lg:h-1/3  px-6 mt-10 gap-4   sm:gap-4  justify-center items-center ">
                <img src={port9} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port2} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port3} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port4} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port5} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port6} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port7} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port8} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port10} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
                <img src={port4} alt="flyer1" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md"/>
            </div>
            </div>
        </div>
    )
}

export default Portfolio