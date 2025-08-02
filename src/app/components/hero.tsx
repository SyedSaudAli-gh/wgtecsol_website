'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeroProps {
    onWorksClick?: () => void;
    onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorksClick, onContactClick }) => {
    const tags = [
        { label: "For", highlighted: false },
        { label: "Startups", highlighted: true },
        { label: ",", highlighted: false },
        { label: "Enterprise leaders", highlighted: true },
        { label: ",", highlighted: false },
        { label: "Media & Publishers", highlighted: true },
        { label: "and", highlighted: false },
        { label: "Social Good", highlighted: true },
    ];

    return (
        <main className="relative flex flex-col items-center w-full min-h-screen pt-28 max-md:min-h-[600px] max-md:pt-20 max-sm:min-h-[500px] max-sm:pt-[60px] overflow-hidden bg-black">


            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.18 }}>
                    <defs>
                        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#fff" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>


            <div className="relative z-10 w-auto max-w-screen-xl flex flex-col items-center gap-12 px-4 text-center">
                <h1 className="text-white font-barlow text-[68px] font-semibold max-md:text-5xl max-sm:text-[32px] leading-tight">
                    Innovate with <br className="max-sm:hidden" /> WGTecSol in <br className="max-sm:hidden" />
                    Digital Solutions
                </h1>


                <div className="flex flex-wrap justify-center items-center gap-1.5 bg-transparent border border-neutral-800 backdrop-blur-[6px] px-10 py-6 rounded-xl max-md:px-6 max-md:py-4 max-sm:px-4 max-sm:py-3">
                    {tags.map((tag, index) => (
                        tag.highlighted ? (
                            <span
                                key={index}
                                className="inline-flex items-center text-white text-[22px] font-normal bg-neutral-800 hover:bg-neutral-700 px-3.5 py-2.5 rounded-lg max-md:text-xl max-sm:text-base transition-colors"
                            >
                                {tag.label}
                            </span>
                        ) : (
                            <span
                                key={index}
                                className="text-[#98989A] text-[22px] font-normal max-md:text-xl max-sm:text-base"
                            >
                                {tag.label}
                            </span>
                        )
                    ))}
                </div>


                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <button
                        onClick={onWorksClick || (() => console.log('Navigate to works section'))}
                        className="text-white text-lg font-normal bg-[rgba(211,211,211,0.12)] border border-white hover:bg-[rgba(211,211,211,0.20)] px-7 py-4 rounded-[10px] transition-colors"
                        aria-label="View our portfolio and previous work"
                    >
                        <Link href="/work">
                            View Works
                        </Link>
                    </button>
                    <button
                        onClick={onContactClick || (() => console.log('Open contact form'))}
                        className="text-neutral-800 text-lg font-normal bg-[#9EFF00] hover:bg-[#8CE600] px-7 py-4 rounded-[10px] transition-colors"
                        aria-label="Get in touch with our team"
                    >
                        <Link href="/contact" >
                            Contact Us
                        </Link>

                    </button>
                </div>
            </div>



            <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
                <Image
                    src="/images/Abstract-Design.png"
                    alt="3D Graph"
                    className="w-full object-cover"
                    style={{ maxHeight: 350 }}
                    width={1920} 
                    height={350} 
                    priority 
                />
            </div>
        </main>
    );
};