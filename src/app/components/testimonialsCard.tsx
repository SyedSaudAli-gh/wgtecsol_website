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
            <div className="grid grid-cols-1 md:grid-cols-2">
                {displayedTestimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-lg md:px-32 sm:px-12 py-16 shadow-lg hover:shadow-xl transition-all border border-[#262626]">
                        <h3 className="text-[#c0e289] text-xl font-bold mb-3">{testimonial.title}</h3>
                        <p className="mb-6">{testimonial.description}</p>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                {testimonial.image ? (
                                    <Image
                                        src={testimonial.image}
                                        alt={`${testimonial.author} avatar`}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-[50px] h-[50px] bg-gray-400 rounded-full"></div>
                                )}
                                <div className="ml-4">
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-gray-300 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                            <button className="py-2 px-4 text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                                Open Website
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {testimonials.length > 4 && (
                <div className="flex justify-center relative">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="absolute left-1/2 -translate-x-1/2 -top-5 z-20 bg-[#9eff00] rounded-full text-black px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:bg-[#8CE600] group"
                    >
                        {showAll ? "View Less" : "View More"}
                        <span className="group-hover:animate-bounceArrow inline-block">
                            {showAll ? (
                                <ChevronUpIcon className="h-5 w-5" />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5" />
                            )}
                        </span>
                    </button>
                </div>
            )}
        </>
    );
};

export default TestimonialsCard;