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
        <main
            data-aos="fade-right"
            className="relative flex flex-col items-center w-full min-h-screen pt-28 max-md:min-h-[600px] max-md:pt-20 max-sm:min-h-[500px] my-10 max-sm:pt-[60px] overflow-hidden bg-black">


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


            <div className="relative z-10  w-auto max-w-screen-xl flex flex-col items-center gap-12 px-4 text-center">
                <h1 className="text-white mb-6 md:mb-12 lg:mb-24 font-barlow font-semibold leading-tight flex flex-col items-center text-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[68px] mb-4">
                        Innovate with
                    </span>
                    <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mb-4">
                        <Image
                            src='/images/WGTS.png'
                            alt='WGTS'
                            width={500}
                            height={500}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[68px]">
                        In Tech Solutions
                    </span>
                </h1>


                {/* <div className="flex flex-wrap justify-center items-center gap-1.5 bg-transparent border border-neutral-800 backdrop-blur-[6px] px-10 py-6 rounded-xl max-md:px-6 max-md:py-4 max-sm:px-4 max-sm:py-3">
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
                </div> */}


                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 w-full max-w-md mx-auto sm:max-w-none">
                    <Link
                        href="/work"
                        className="text-white text-base sm:text-lg font-normal bg-[rgba(211,211,211,0.12)] border border-white hover:bg-[rgba(211,211,211,0.20)] px-5 sm:px-7 py-3 sm:py-4 rounded-[10px] transition-colors text-center"
                    >
                        View Works
                    </Link>
                    <Link
                        href="https://www.whatsapp.com/channel/0029VbBK7zwHLHQScBygVQ0u"
                        target='_blank'
                        className="text-neutral-800 text-base sm:text-lg font-normal bg-[#8CE600] hover:bg-[#9eff00] active:bg-[#7acc00] px-5 sm:px-7 py-3 sm:py-4 rounded-[10px] transition-colors text-center"
                    >
                        Updates
                    </Link>
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