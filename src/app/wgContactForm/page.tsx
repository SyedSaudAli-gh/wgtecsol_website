import Image from "next/image";

export default function Page() {
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

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
        <section className="mb-10">
          <div className="bg-[#1f2430] text-white text-center font-bold py-2 rounded-md mb-4">
            PERSONAL INFORMATION
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
            <label className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">
              Name :
            </label>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                id="firstName"
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="First Name"
                autoComplete="given-name"
              />
              <input
                id="lastName"
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="Last Name"
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* CNIC + DOB */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 mb-3">
            <label className="text-[#cfd6df] font-semibold md:col-span-3" htmlFor="cnic">
              CNIC Num :
            </label>
            <input
              id="cnic"
              className="md:col-span-3 w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
              placeholder="CNIC Number"
              inputMode="numeric"
            />
            <div className="text-[#cfd6df] font-semibold md:col-span-3">Date of Birth :</div>
            <div className="md:col-span-3 grid grid-cols-3 gap-2">
              <input
                className="w-full h-9 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="DD"
                inputMode="numeric"
              />
              <input
                className="w-full h-9 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="MM"
                inputMode="numeric"
              />
              <input
                className="w-full h-9 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="YYYY"
                inputMode="numeric"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
            <label className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3" htmlFor="street">
              Address :
            </label>
            <div className="md:col-span-9">
              <input
                id="street"
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="Street Name"
                autoComplete="address-line1"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <input
                  className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  placeholder="City"
                  autoComplete="address-level2"
                />
                <input
                  className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  placeholder="Postal Code"
                  autoComplete="postal-code"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3">
            <div className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">Phone :</div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex gap-2">
                <input
                  className="w-16 sm:w-20 md:w-24 h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  placeholder="+"
                  inputMode="tel"
                  aria-label="Home phone country code"
                />
                <input
                  className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  placeholder="Home Phone"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
              <div className="flex gap-2">
                <input
                  className="w-16 sm:w-20 md:w-24 h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  placeholder="+"
                  inputMode="tel"
                  aria-label="Mobile phone country code"
                />
                <input
                  className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                  placeholder="Mobile Phone"
                  inputMode="tel"
                  autoComplete="tel-national"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10">
          <div className="bg-[#1f2430] text-white text-center font-bold py-2 rounded-md mb-4">
            EDUCATION
          </div>

          {/* High School */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
            <div className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">High School :</div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="Name"
              />
              <input
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="City"
              />
            </div>
          </div>

          {/* University */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3">
            <div className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">University :</div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="Name"
              />
              <input
                className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                placeholder="City"
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3 mb-2 max-sm:hidden">
            <div className="bg-[#1f2430] text-white font-bold py-2 rounded-md text-left px-3">
              SKILL
            </div>
            <div className="bg-[#1f2430] text-white font-bold py-2 rounded-md text-left px-3">
              LEVELS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            <input
              className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
              placeholder="Skill 1"
            />
            <select
              defaultValue=""
              className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
            >
              <option value="" disabled>
                Select level
              </option>
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            <input
              className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
              placeholder="Skill 2"
            />
            <select
              defaultValue=""
              className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
            >
              <option value="" disabled>
                Select level
              </option>
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-4">
            <label
              className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3"
              htmlFor="availability"
            >
              Most Available Time :
            </label>
            <input
              id="availability"
              className="md:col-span-9 w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
              placeholder="e.g., Weekdays 3 pm – 8 pm"
            />
          </div>

          <label className="flex gap-3 items-start text-sm text-[#9aa3ad] mb-6">
            <input type="checkbox" className="mt-1 h-4 w-4 accent-sky-500" />
            <span>
              I certify that all answers given herein are true and complete to the best of my
              knowledge. I authorize investigation of all statements contained in this application for
              employment as may be necessary in arriving at an employment decision.
            </span>
          </label>


          <button
            className="relative block mx-auto w-full sm:w-auto
    overflow-hidden rounded-2xl border border-gray-500 bg-transparent
    text-xl sm:text-2xl text-white cursor-pointer
    transition-colors duration-300
    hover:text-black hover:border-[#9eff00]
    focus:text-black focus:border-[#9eff00]
    active:text-black active:border-[#9eff00]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9eff00]
    focus-visible:ring-offset-2 focus-visible:ring-offset-black
    before:absolute before:inset-y-0 before:left-0 before:w-0
    before:bg-[#9eff00] before:content-[''] before:transition-all
    before:duration-300 before:ease-out
    hover:before:w-full
    focus:before:w-full
    active:before:w-full"
          >
            <span className="relative z-10 px-8 sm:px-12 md:px-16 py-2">Submit</span>
          </button>
        </section>
      </div>
    </form>
  );
}