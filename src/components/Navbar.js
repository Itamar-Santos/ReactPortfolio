import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar(){


    return(
        <header classname="bg-gray-800 md:sticky top-0 z-10">
            <div classname="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a classname="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" classname="ml-3 text-x1">
                    Reed Barger
                </a>
                </a>
                <nav classname="md:mr-auto md:ml-4 md:pl-4 md:border-1 md:bordergray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" classname="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
                </a>
            </div>
        </header>
    )
} 
