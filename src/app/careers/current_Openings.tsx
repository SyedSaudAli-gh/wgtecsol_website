// app/components/Current_Openings.tsx

import Image from "next/image";
import { jobOpenings } from "./openings";

export default function Current_Openings() {
  return (
    <div className="w-full min-h-screen py-10 px-2 md:px-8">
      {jobOpenings.map((section) => (
        <div key={section.section} className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[#98989A] mb-6">{section.section}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-items-center md:place-items-start">
            
            {section.jobs.map((job) => (
              <div
                key={job.title}
                className="py-6 px-0 flex flex-col gap-6 w-full max-w-[431px] h-auto"
              >
                <div className="flex flex-col gap-6">
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
                </div>
                <p className="text-[#E6E6E6] text-[18px] md:text-base">{job.description}</p>
                <button className="mt-4 bg-[#232323] hover:bg-[#333] text-white rounded-md py-4 font-medium transition cursor-pointer">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}