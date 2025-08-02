"use client"
import Banner from "../components/banner";
import { banner } from "../components/bannerData";
import DetailFooter from '../components/detail_footer';
import { detailFooter } from "../components/detailFooterData";
import WorkCard from "./WorkCard";

const sections = [
  {
    heading: "At SquareUp",
    description:
      "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.",
    boxText: "Here are ten examples of our notable works:",

  },
]

function Page() {

  return (
    <>
      <Banner
        bgImage={banner[1].bgImage}
        heading={banner[1].heading}
        subheading={banner[1].subheading}
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
      <WorkCard />

      <DetailFooter data={detailFooter[1]} />
    </>
  )
}

export default Page