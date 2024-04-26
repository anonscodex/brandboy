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
import port11 from "../assets/BULC1.jpg"

const images = [port2, port3, port4, port5, port6, port7, port8, port9, port10, port11]

const Portfolio = () => {
    return(
        <div>
            <h4 className="flex justify-center items-center sm:text-6xl text-neutral-700 mt-11 tracking-wide text-5xl"> Portfolio</h4>

           <div  className="flex flex-wrap">
                <div className="flex flex-wrap w-full lg:h-1/3  px-6 mt-10 gap-4   sm:gap-4  justify-center items-center ">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="'flyer${index}'" className="w-58 h-58 sm:w-56 sm:h-56 border border-my-logo-color shadow-my-second-color rounded-md" />
                    ))}
                </div>


            </div>
        </div>
        
    )
}

export default Portfolio