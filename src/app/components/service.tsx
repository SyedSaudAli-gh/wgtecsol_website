'use client';
import React from 'react';
import ServiceCard from './serviceCard';
import Banner from "../components/banner";
import { banner } from "../components/bannerData";

export const OurServicesSection = () => {
    return (
        <section className="w-auto">
            <Banner
                bgImage={banner[0].bgImage}
                heading={banner[0].heading}
                subheading={banner[0].subheading}
            />

            <ServiceCard />
        </section>
    );
};