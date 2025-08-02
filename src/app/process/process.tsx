'use client';
import processData from './processData';

export default function Process() {
    return (
        <section className="w-full min-h-screen px-2 sm:px-4 md:px-8">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#232323]">
                {processData.map((step) => (
                    <div
                        key={step.number}
                        className="border-b border-r border-[#232323] flex flex-col p-4 sm:p-6 md:p-10"
                    >
                        <div className="flex items-center">
                            <span
                                className="text-[#d8ff99] font-semibold text-[48px] sm:text-[56px] md:text-[100px] lg:text-[159px] flex items-center mr-4"
                                style={{ minWidth: 80, minHeight: 60 }}
                            >
                                {step.number}
                            </span>
                            <span className="relative text-white mt-6 sm:mt-10 text-base sm:text-lg md:text-2xl font-semibold  pb-1 w-full sm:w-auto">
                                {step.title}
                                <p className='hidden sm:block w-[180px] md:w-[320px] lg:w-[480px] h-0.5 absolute top-10 md:top-14 underline border-b-2 border-[#232323]'></p>
                            </span>
                        </div>
                        <div className="h-[1px] w-full  mb-4 sm:mb-6" />
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}