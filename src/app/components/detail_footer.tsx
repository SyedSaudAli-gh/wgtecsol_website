'use client';
import Image from "next/image";
import Link from "next/link";


interface SectionData {
  bgImage: string;
  logo: string;
  heading: string;
  subtext: string;
  buttonText: string;
  buttonLink?: string;
}


export default function DetailFooter({ data }: { data?: SectionData }) {
 
  const sectionsToRender = data ? [data] : []; 

  if (sectionsToRender.length === 0) {
    return null; 
  }

  return (
    <>
      {sectionsToRender.map((section, idx) => (
        <div
          key={idx}
          className="relative w-full h-auto md:h-[597px] flex items-center justify-center overflow-hidden" // Auto height on mobile, fixed on md+
        >
          {/* Background Image */}
          <Image
            src={section.bgImage}
            alt="Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />

     
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-2 md:px-4"> 
     
            <div className="flex items-center justify-center mb-4 md:mb-8">
              <Image
                src={section.logo}
                alt="Logo"
                width={60} 
                height={60}
                className="rounded-xl bg-lime-400 p-2 md:p-3 shadow-lg md:w-20 md:h-20" 
              />
            </div>
          
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 md:mb-6 text-white">
              {section.heading}
            </h1>
            
            <p className="w-full text-gray-200 text-base md:text-lg text-center mb-6 md:mb-10 max-w-full md:max-w-3xl">
              {section.subtext}
            </p>
           
            {section.buttonLink ? (
              <Link href={section.buttonLink}>
                <button className="bg-lime-400 hover:bg-lime-300 text-black text-lg md:text-xl font-medium rounded-lg px-8 md:px-12 py-3 md:py-4 shadow-lg transition">
                  {section.buttonText}
                </button>
              </Link>
            ) : (
              <button className="bg-lime-400 hover:bg-lime-300 text-black text-lg md:text-xl font-medium rounded-lg px-8 md:px-12 py-3 md:py-4 shadow-lg transition">
                {section.buttonText}
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}