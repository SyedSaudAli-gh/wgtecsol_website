// app/components/Current_Openings.tsx

import Image from "next/image";
import { jobOpenings } from "./openings";
import Link from "next/link";

export default function Current_Openings() {
  return (
    <div className="w-full min-h-screen py-10 px-2 md:px-8">
      {jobOpenings.map((section) => (
        <div
         data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
         key={section.section} className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[#98989A] mb-6">{section.section}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-items-center md:place-items-start">
            
            {section.jobs.map((job) => (
              <div
                key={job.title}
                className="py-6 px-0 flex flex-col gap-6 w-full max-w-[431px] h-full"
              >
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="w-[88px] h-[88px] relative">
                    <Image
                      src={job.image}
                      alt={job.title}
                      fill
                      className="object-contain rounded"
                      sizes="88px"
                    />
                  </div>
                  <span className="text-[24px] font-medium">{job.title}</span>
                  <p className="text-[#E6E6E6] text-[18px] md:text-base">{job.description}</p>
                </div>
                  <Link href='/wgContactForm' className="text-center text-black rounded-md py-4 font-semibold bg-[#8CE600] hover:bg-[#9eff00] active:bg-[#9eff00] transition cursor-pointer">
             
                  Apply Now
          
                  </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}