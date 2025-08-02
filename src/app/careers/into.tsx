import React from 'react'

type Section = {
    heading: string;
    description: string;
    boxText?: string;
};

type IntoProps = {
    section: Section;
};

function Into({ section }: IntoProps) {
  return (
    <div className='w-auto h-auto mt-16'>
      <section className="pt-4 md:pt-6 pb-8 md:pb-10">
        <div className="max-w-[1500px] mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-[50px] mb-5">
            {section.heading}
          </h1>
          <p className="text-[#E6E6E6] text-base md:text-lg leading-snug mb-6 md:mb-10 max-w-full md:max-w-[1290px]">
            {section.description}
          </p>
          {section.boxText && (
            <div className="inline-block bg-[#333333] rounded-lg px-4 py-2 md:px-6 md:py-3 mt-2">
              <span className="text-white text-lg md:text-2xl font-normal">
                {section.boxText}
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Into