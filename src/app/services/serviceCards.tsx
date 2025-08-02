import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
};



function ServiceCard({ image, title }:ServiceCardProps) {
  return (
    <div className="bg-transparent border border-[#232323] rounded-lg p-6 flex flex-col items-start min-h-[160px]">
      <div className="relative w-14 h-14 mb-4">
        <div className="absolute top-0 left-0 w-14 h-14 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={56}
            height={56}
            className="z-10"
          />
        </div>
      </div>
      <span className="text-white text-base font-medium leading-snug">{title}</span>
    </div>
  );
}

type ServiceItem = {
  image: string;
  title: string;
};

type ServicesGridProps = {
  data: ServiceItem[];
};

export function ServicesGrid({ data }: ServicesGridProps) {
  return (
    <section className="w-full py-8 px-2 md:px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <ServiceCard key={i} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}