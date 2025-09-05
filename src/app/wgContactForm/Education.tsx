import React from 'react'

function Education() {
    return (
        <section className="mb-10">
            <div className="bg-[#1f2430] text-white text-center font-bold py-2 rounded-md mb-4">
                EDUCATION
            </div>

            {/* High School */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
                <div className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">High School :</div>
                <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                        className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none  focus:ring-1 focus:ring-[#9EFF00]"
                        placeholder="Name"
                    />
                    <input
                        className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none  focus:ring-1 focus:ring-[#9EFF00]"
                        placeholder="City"
                    />
                </div>
            </div>

            {/* University */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3">
                <div className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">University :</div>
                <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                        className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none  focus:ring-1 focus:ring-[#9EFF00]"
                        placeholder="Name"
                    />
                    <input
                        className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none  focus:ring-1 focus:ring-[#9EFF00]"
                        placeholder="City"
                    />
                </div>
            </div>
        </section>
    )
}

export default Education