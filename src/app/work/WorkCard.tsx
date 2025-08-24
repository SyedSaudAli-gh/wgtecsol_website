'use client';
import Image from "next/image";
import workCard from "./workCardData";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function WorkCard() {
    const [showAll, setShowAll] = useState(false);
    const displayedWorkCard = showAll ? workCard : workCard.slice(0, 4);
    return (
        <div

            className="w-full min-h-screen py-8 sm:py-12 px-2 sm:px-4 md:px-8">
            <div

                className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#232323]">
                {displayedWorkCard.map((project) => (
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"

                        key={project.title}
                        className="border-b border-r border-[#232323] flex flex-col p-4 sm:p-6 md:p-10"
                    >
                        {/* Title */}
                        <h2 className="text-[#bfbfbf] w-full text-xl sm:text-2xl md:text-2xl font-semibold mb-4 sm:mb-6">
                            {project.title}
                        </h2>
                        {/* Image */}
                        <div className="w-full rounded-xl overflow-hidden mb-6 sm:mb-8">
                            <Image
                                src={project.image}
                                alt={project.brand}
                                width={900}
                                height={500}
                                className="w-full h-[180px] sm:h-[220px] md:h-[320px] object-cover"
                                priority
                            />
                        </div>
                        {/* Brand Name */}
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                            {project.brand}
                        </h3>
                        {/* URL Box */}
                        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
                            <span className="bg-[#232323] text-gray-400 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-base md:text-lg font-medium select-all break-all">
                                {project.url.replace("htttps:/", "https://")}
                            </span>
                            <a
                                href={project.url.replace("htttps:/", "https://")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#232323] rounded-lg p-2 hover:bg-lime-400 transition group bg-[#8CE600] hover:bg-[#9eff00] active:bg-[#9eff00] transition"
                            >
                                <Image
                                    src="/images/Icon.png"
                                    alt="External Link Icon"
                                    width={24}
                                    height={24}
                                    className="transition group-hover:brightness-0 group-active:brightness-0 touch-manipulation"
                                />
                            </a>
                        </div>
                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
            {workCard.length > 4 && (
                <div className="flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="rounded-full text-black px-6 py-3 my-2 flex items-center gap-2 duration-300 bg-[#8CE600] hover:bg-[#9eff00] active:bg-[#9eff00] transition group"
                    >
                        {showAll ? "View Less" : "View More"}
                        <span className="group-hover:animate-bounceArrow inline-block ">
                            {showAll ? (
                                <ChevronUpIcon className="h-5 w-5 " />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5" />
                            )}
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}