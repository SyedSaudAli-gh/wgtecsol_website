import React from 'react';
import services from './services';
import { ServicesGrid } from './serviceCards'; 
import DetailFooter from "../components/detail_footer"; 
import { detailFooter } from "../components/detailFooterData"; 
import Banner from '../components/banner';
import { banner } from '../components/bannerData';

const sections = [
  {
    heading: "Design",
    description:
      "At WGTecSol, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; It's about creating seamless and intuitive user experiences.",
    boxText: "Our design services include:",
    grid: <ServicesGrid data={[
      ...services.find(s => s.section === "User Experience (UX) Design")?.items || [],
      ...services.find(s => s.section === "User Interface (UI) Design")?.items || [],
      ...services.find(s => s.section === "Branding and Identity")?.items || [],
    ]} />,
  },
  {
    heading: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    boxText: "Our engineering services include:",
    grid: <ServicesGrid data={[
      ...services.find(s => s.section === "Web Development")?.items || [],
      ...services.find(s => s.section === "Mobile App Development")?.items || [],
      ...services.find(s => s.section === "Custom Software Development")?.items || [],
    ]} />,
  },
  {
    heading: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    boxText: "Our project management services include:",
    grid: <ServicesGrid data={[
      ...services.find(s => s.section === "Project Planning and Scoping")?.items || [],
      ...services.find(s => s.section === "Agile Development")?.items || [],
      ...services.find(s => s.section === "Quality Assurance and Testing")?.items || [],
    ]} />,
  },
];

function Page() {
  return (
    <>
        <Banner
              bgImage={banner[0].bgImage}
              heading={banner[0].heading}
              subheading={banner[0].subheading}
            />
      <div className='w-full h-auto py-10 md:py-20 relative'>
        {sections.map((section) => (
          <React.Fragment key={section.heading}>
            <section className="pt-4 md:pt-6 pb-8 md:pb-10">
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
            {section.grid && section.grid}
          </React.Fragment>
        ))}
      </div>
      <DetailFooter data={detailFooter[1]} />
    </>
  );
}

export default Page;