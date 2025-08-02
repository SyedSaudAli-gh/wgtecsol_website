'use client';
import Image from "next/image";

interface BannerProps {
  bgImage: string;
  heading: string;
  subheading: string;
}

export default function Banner({ bgImage, heading, subheading }: BannerProps) {
  return (
    <section className="w-full px-4 mt-20">
      <div className="relative w-full overflow-hidden  sm:py-24 px-2 sm:px-4">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgb(0,0,0)] to-[rgba(0,0,0,0.19)]">
          <Image
            src={bgImage}
            alt="Banner Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        {/* Heading & Subheading */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
            {heading}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            {subheading}
          </p>
        </div>
      </div>
    </section>
  );
}