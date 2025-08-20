'use client';
import Image from "next/image";

interface BannerProps {
  bgImage: string;
  heading: string;
  subheading: string;
}

export default function Banner({ bgImage, heading, subheading }: BannerProps) {
  return (
    <section className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-28">
      <div className="relative w-full overflow-hidden">
        {/* Responsive padding for different screen sizes */}
        <div className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 z-10" />
            <Image
              src={bgImage}
              alt="Banner Background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          
          {/* Content container */}
          <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="text-white font-bold leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              px-4 sm:px-6 md:px-8">
              {heading}
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed
              text-sm sm:text-base md:text-lg lg:text-xl
              px-4 sm:px-6 md:px-8">
              {subheading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}