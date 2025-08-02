import React from 'react'
import Banner from "../components/banner";
import { banner } from "../components/bannerData";
import DetailFooter from '../components/detail_footer';
import { detailFooter } from '../components/detailFooterData';
import ContactForm from '../components/ContactForm';
import Process from './process';

const sections = [
    {
        heading: "At Wgtecsol",
        description:
            "We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.",
        boxText: "Here's an overview of our typical process:",

    },
]
function Page() {
    return (
        <>
            <Banner
                bgImage={banner[2].bgImage}
                heading={banner[2].heading}
                subheading={banner[2].subheading}
            />
            <div className='w-auto h-auto '>
                {sections.map((section) => (
                    <section key={section.heading} className="pt-4 md:pt-6 pb-8 md:pb-10">
                        <div className="max-w-[1500px] mx-auto px-4 md:px-6">
                            <h1 className="text-white text-4xl md:text-[56px] font-bold leading-none mb-4">
                                {section.heading}
                            </h1>
                            <p className="text-white text-base md:text-lg font-medium leading-snug mb-6 md:mb-10 max-w-full md:max-w-[1290px]">
                                {section.description}
                            </p>
                            <div className="inline-block bg-[#333333] rounded-lg px-4 py-2 md:px-6 md:py-3 mt-2">
                                <span className="text-white text-lg md:text-2xl font-normal">
                                    {section.boxText}
                                </span>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <Process />
            <DetailFooter data={detailFooter[0]} />
            <ContactForm />
        </>
    )
}

export default Page