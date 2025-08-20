import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    image: "/images/app-development.png",
    alt: "App Development",
    title: "App Development",
    description: `At WGTecSol, our design team is passionate about creating
      stunning, user-centric designs that captivate your audience and
      elevate your brand. We believe that great design is not just
      about aesthetics; it's about creating seamless and intuitive
      user experiences.`,
    link: "/services"
  },
  {
    image: "/images/uiux.png",
    alt: "UIUX",
    title: "UIUX",
    description: `Our engineering team combines technical expertise with a passion
      for innovation to build robust and scalable digital solutions.
      We leverage the latest technologies and best practices to
      deliver high-performance applications tailored to your specific
      needs.`,
    link: "/services"
  },
  {
    image: "/images/web-development.png",
    alt: "Web Development",
    title: "Web Development",
    description: `Our experienced project management team ensures that your
      projects are delivered on time, within budget, and according to
      your specifications. We follow industry-standard methodologies
      and employ effective communication and collaboration tools to
      keep you informed throughout the development process.`,
    link: "/services"
  }
];

function ServiceCard() {
  return (
    <div className="my-6 sm:my-8 md:my-10 lg:my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      {services.map((service, idx) => (
        <div key={idx}
        data-aos="zoom-in"
         className="group flex flex-col justify-between p-6 bg-[#1f1f1f] rounded-xl h-full">
          <div className="space-y-6">
            <div className="relative w-[88px] h-[88px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[#66AFFC33] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src={service.image}
                alt={service.alt}
                width={88}
                height={88}
                className="relative z-0"
              />
            </div>
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-base">
                {service.description}
              </p>
            </div>
          </div>
          <button className="mt-6 bg-[#2e2e2e] text-white py-3 rounded-lg w-full hover:bg-[#3a3a3a] transition">
            <Link href={service.link}>
              Learn More
            </Link>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard