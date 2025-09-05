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
    { label: 'For', highlighted: false },
    { label: 'Startups', highlighted: true },
    { label: ',', highlighted: false },
    { label: 'Enterprise leaders', highlighted: true },
    { label: ',', highlighted: false },
    { label: 'Media & Publishers', highlighted: true },
    { label: 'and', highlighted: false },
    { label: 'Social Good', highlighted: true },
  ];

  return (
    <main
      data-aos="fade-right"
      className="relative flex flex-col items-center w-full min-h-[100dvh] my-10 pt-[calc(env(safe-area-inset-top)+60px)] sm:pt-[calc(env(safe-area-inset-top)+80px)] md:pt-[calc(env(safe-area-inset-top)+96px)] overflow-hidden bg-black"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ opacity: 0.18 }}
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-20">
        <div className="flex flex-col items-center text-center gap-8 sm:gap-10 lg:gap-12">
          <h1 className="text-white font-barlow font-semibold leading-tight tracking-tight">
            <span className="block text-[clamp(1.5rem,5.2vw,4.25rem)] mb-2">
              Innovate with
            </span>

            <div className="relative mx-auto mb-2 w-[min(85vw,520px)] sm:w-[min(70vw,560px)] md:w-[min(60vw,600px)]">
              <Image
                src="/images/WGTS.png"
                alt="WGTS"
                width={600}
                height={180}
                className="w-full h-auto"
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 520px"
                priority
              />
            </div>

            <span className="block text-[clamp(1.5rem,5.2vw,4.25rem)]">
              In Tech Solutions
            </span>
          </h1>

          {/* Optional tags */}
          {/* <div className="flex items-center gap-2 sm:gap-2.5 bg-transparent border border-neutral-800/80 backdrop-blur-[6px] px-4 sm:px-6 py-3 sm:py-4 rounded-xl overflow-x-auto">
            {tags.map((tag, index) =>
              tag.highlighted ? (
                <span
                  key={index}
                  className="inline-flex items-center text-white text-lg sm:text-xl bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-md transition-colors"
                >
                  {tag.label}
                </span>
              ) : (
                <span key={index} className="text-[#98989A] text-lg sm:text-xl">
                  {tag.label}
                </span>
              )
            )}
          </div> */}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-[520px]">
            <Link
              href="/work"
              onClick={() => onWorksClick?.()}
              className="w-full sm:w-auto text-white text-base sm:text-lg font-medium bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 active:bg-white/25 px-5 sm:px-7 py-3 sm:py-3.5 rounded-[10px] transition-colors text-center"
              aria-label="View our works"
            >
              View Works
            </Link>

            <Link
              href="https://www.whatsapp.com/channel/0029VbBK7zwHLHQScBygVQ0u"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-neutral-900 text-base sm:text-lg font-medium bg-[#8CE600] hover:bg-[#9EFF00] active:bg-[#7ACC00] px-5 sm:px-7 py-3 sm:py-3.5 rounded-[10px] transition-colors text-center"
              aria-label="Get updates on WhatsApp"
            >
              Updates
            </Link>

            {onContactClick && (
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto text-white text-base sm:text-lg font-medium bg-transparent border border-white/30 hover:bg-white/10 px-5 sm:px-7 py-3 sm:py-3.5 rounded-[10px] transition-colors"
                aria-label="Contact us"
              >
                Contact
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative bottom image */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none">
        <Image
          src="/images/Abstract-Design.png"
          alt=""
          aria-hidden="true"
          width={1920}
          height={400}
          className="w-full h-auto object-cover max-h-[26vh] sm:max-h-[32vh] md:max-h-[36vh] lg:max-h-[350px]"
          sizes="100vw"
          priority
        />
      </div>
    </main>
  );
};