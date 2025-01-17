// src/components/About.js
import React from "react";
export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md-flex-row flex-col items-center text-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md items-star">
                <h1 className="title-font sm:text-4x1 text 3x1 mb-4 font-medium text-white">
                    Hi, I'm Itamar
                    <br className="hidden lg:inline-block" />I love to build amazing apps.
                </h1>
                <p className="mb-8 leading-relaxed">Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
                Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
                 </p>
                 <div className="flex justify-center">
                    <a href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus-outline-none hover:be-green-600 rounded text-lg">
                        Work With me
                    </a>
                    <a href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 text-lg">

                    </a>
                 </div>
                </div> 
                <div className="lg>max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img 
                    className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                    </div>   
            </div>

        </section>
    );
}


