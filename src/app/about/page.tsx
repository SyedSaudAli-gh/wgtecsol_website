import React from 'react'
import Banner from "../components/banner";
import { banner } from "../components/bannerData";
import Image from 'next/image';
import Our_Story from './our_story';
import SquareUpHero from './squareUpHero';
import Our_Teams from './our_teams';

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
                            About Us – WGTecSol
                        </h2>
                        <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                            At WGTecSol – Word of Great Technology Solution – we believe technology has the power to transform ideas into impactful realities. Founded and led by Bilawal Ayoub (Founder & CEO), WGTecSol is a forward-thinking digital product agency dedicated to delivering innovative, scalable, and result-driven solutions that help businesses excel in today’s competitive digital landscape. 
                            <br />
                            <br />Our expertise spans design, engineering, and project management, enabling us to craft seamless and high-performing digital experiences tailored to the unique needs of every client. What sets us apart is our structured yet creative approach – blending industry best practices with innovation, collaboration, and a deep understanding of market trends.
                            <br />
                            <br />At WGTecSol, every project is more than just a service; it’s a partnership. We work hand-in-hand with our clients to transform their vision into reality, ensuring quality, efficiency, and long-term success. With a team driven by passion and precision, we aim not just to deliver digital products, but to create sustainable digital growth for businesses worldwide.
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
                                    <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center bg-transparent overflow-hidden">
                                        <Image
                                            src="/images/WGTecSol_About.png"
                                            alt="Logo"
                                            width={900}
                                            height={900}
                                            className="object-contain rounded-full"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Our_Story />
            <Our_Teams />
            <SquareUpHero />
        </>
    )
}

export default Page