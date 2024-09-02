
import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

export default function Skills(){
    return (
        <section id="skills">
            <div className="container px-5 py-5 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
                        Skill &amp; Techonlogies
                    </h1>
                        <p className="text-base leading-relaxed x1:-2/4 lg:w-3/4 lg:w-3/4 mx-auto">
                            Lorem ipsum dolor
                            ipsa delectus eum
                            possimus est
                        </p>
                </div>
                <div className="flex flex-wrap lg:-4/5 sm:mx-auto sm:-1/2 w-full">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink 0 mr-4"/>
                    <span className="title-font font-medium text-white">
                        {skills}
                    </span>
                </div>
            </div>
        </section>
    );
}