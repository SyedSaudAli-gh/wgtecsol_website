"use client";
import Image from "next/image";
import React, { useState } from "react";
import Banner from "./banner";
import { banner } from "./bannerData";
import { testimonials } from "@/data/testimonialsData";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

function TestimonialsCard() {
    const [showAll, setShowAll] = useState(false);
    const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

    return (
        <>
            <Banner
                bgImage={banner[5].bgImage}
                heading={banner[5].heading}
                subheading={banner[5].subheading}
            />
            <div
            
             className="grid grid-cols-1 my-10 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {displayedTestimonials.map((testimonial, index) => (
                    <div 
                        key={index} data-aos="zoom-in-up"
                        className="rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-lg hover:shadow-xl transition-all border border-[#262626]"
                    >
                        <h3 className="text-[#c0e289] text-lg sm:text-xl lg:text-2xl font-bold mb-3">
                            {testimonial.title}
                        </h3>
                        <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                            {testimonial.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center">
                                {testimonial.image ? (
                                    <Image
                                        src={testimonial.image}
                                        alt={`${testimonial.author} avatar`}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px]"
                                    />
                                ) : (
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] bg-gray-400 rounded-full"></div>
                                )}
                                <div className="ml-3 sm:ml-4">
                                    <p className="font-medium text-sm sm:text-base lg:text-lg">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <button className="py-2 px-4 sm:px-5 lg:px-6 text-sm sm:text-base border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto">
                                Open Website
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {testimonials.length > 4 && (
                <div className="flex justify-center relative mt-8 sm:mt-10 lg:mt-12 mb-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-[#9eff00] rounded-full text-black px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 transition-all duration-300 hover:bg-[#8CE600] group text-sm sm:text-base"
                    >
                        {showAll ? "View Less" : "View More"}
                        <span className="group-hover:animate-bounceArrow inline-block">
                            {showAll ? (
                                <ChevronUpIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                            ) : (
                                <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                            )}
                        </span>
                    </button>
                </div>
            )}
        </>
    );
};

export default TestimonialsCard;