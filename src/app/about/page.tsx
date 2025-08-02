import React from 'react'
import Banner from "../components/banner";
import { banner } from "../components/bannerData";
import Image from 'next/image';
import About from './about';
import SquareUpHero from './squareUpHero';

function Page() {
    return (
        <>
            <Banner
                bgImage={banner[3].bgImage}
                heading={banner[3].heading}
                subheading={banner[3].subheading}
            />
            <section className="w-full min-h-screen flex items-center justify-center px-2 md:px-8 py-12 ">
                <div className="max-w-[1500px] w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left: Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
                            About SquareUp
                        </h2>
                        <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                            SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative rounded-2xl overflow-hidden w-[480px] h-[480px] max-w-full bg-[#181818] flex items-center justify-center">
                            <div className="relative w-[480px] h-[480px] rounded-2xl overflow-hidden bg-[#181818] flex items-center justify-center">
                                {/* Background Image */}
                                <Image
                                    src="/images/banner.png"
                                    alt="About Background"
                                    fill
                                    className="object-cover opacity-25"
                                    priority
                                />

                                {/* Vertical (Top to Bottom) Pointed Line */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-6 flex items-center justify-center z-10 pointer-events-none">
                                    <div
                                        className="w-1 h-full bg-[#bfff00] opacity-40"
                                        style={{
                                            clipPath: "polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)"
                                        }}
                                    />
                                </div>
                                {/* Horizontal (Left to Right) Pointed Line */}
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-6 flex items-center justify-center z-10 pointer-events-none">
                                    <div
                                        className="h-1 w-full bg-[#bfff00] opacity-40"
                                        style={{
                                            clipPath: "polygon(0% 50%, 10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%)"
                                        }}
                                    />
                                </div>
                                {/* Centered Logo Box (sabse upar) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="w-[120px] h-[120px] rounded-2xl flex items-center justify-center bg-transparent">
                                        <Image
                                            src="/images/Logo.png"
                                            alt="Logo"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <SquareUpHero />
        </>
    )
}

export default Page