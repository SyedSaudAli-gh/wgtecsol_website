import Image from "next/image";
import Personal_info from "./Personal_info";
import Education from "./Education";
import Skills from "./Skills";

export default function Page() {
  return (
    <form className="min-h-auto py-8 sm:py-10 px-4 sm:px-6 flex justify-center items-start print:p-0">
      <div
        className="
          w-full max-w-3xl lg:max-w-4xl
          bg-[#121418] rounded-xl shadow-2xl
          px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8
          print:w-[210mm] print:min-h-[297mm] print:px-[20mm] print:py-[20mm]
          print:shadow-none print:border-0 print:rounded-none
        "
      >
        <header className="text-center mt-10 mb-4 sm:mb-6">
          <Image
            src="/images/WGTS.png"
            alt="WGTS Logo"
            width={220}
            height={50}
            className="mx-auto"
            priority
          />
          <div className="text-xs text-[#9aa3ad] mt-1">Innovate. Elevate. Transform</div>
        </header>

        {/* PERSONAL INFORMATION */}
        <Personal_info />

        {/* EDUCATION */}
        <Education />

        {/* SKILLS */}
        <Skills />
      </div>
    </form>
  );
}