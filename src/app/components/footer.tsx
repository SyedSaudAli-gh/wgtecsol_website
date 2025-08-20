"use client";
import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,

    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full h-auto min-h-[335px] flex flex-col justify-between py-10 px-4 md:px-10 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <Link href="/" >

                    <div className="flex flex-col sm:flex-row items-center mb-4 lg:mb-0 sm:-space-x-5">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/Logo.png"
                                alt="Logo"
                                width={100}
                                height={80}
                                className="p-2"
                            />
                        </div>
                        <span className="text-white text-xl md:text-2xl font-semibold -mt-2 sm:mt-0">
                            WGTecSol
                        </span>
                    </div>
                </Link>


                <nav className="flex flex-wrap justify-center gap-4  md:gap-8">
                    {[
                        "Home",
                        "Services",
                        "Work",
                        "Process",
                        "About",
                        "Blog",
                        "Careers",

                    ].map((item) => (
                        <Link
                            key={item}
                            href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                            className=" md:text-lg hover:text-lime-400 transition"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>


                <div className="flex items-center rounded-xl border border-[#232323] px-4 py-2 md:px-8 md:py-4 gap-3 md:gap-6 mt-4 lg:mt-0">
                    <span className=" md:text-lg">
                        Stay Connected
                    </span>
                    <div className="flex gap-2 md:gap-4">
                        <a
                            href="https://www.facebook.com/people/WG-Tecsol/61572868466794/?rdid=WvSIi1vsiwSgi6Hq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mxj5nRmG%2F" target="_blank"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaFacebookF className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://www.instagram.com/wg.tecsol/" target="_blank"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaInstagram className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/wgtecsol/posts/?feedView=all" target="_blank"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaLinkedinIn className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://www.whatsapp.com/channel/0029Vb5tzEuLdQeYEKzLDg45" target="_blank"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaWhatsapp className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="border-t border-[#232323] my-6"></div>


            <div className="flex flex-col lg:flex-row justify-between lg:items-end items-center gap-6">
                {/* Parent with single bottom border */}
                <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap w-full lg:w-2/3 gap-4 items-center border-b border-[#232323] pb-2">
                    <div className="flex items-center gap-2 w-full sm:w-auto lg:w-1/3 justify-center lg:justify-start">
                        <FaEnvelope className="text-lime-400 text-lg flex-shrink-0" />
                        <span className="text-white text-sm md:text-base font-medium break-all">
                            <Link href="mailto:wgtecsol@gmail.com" className="hover:underline" aria-label="Email wgtecsol@gmail.com">
                                wgtecsol@gmail.com
                            </Link>
                        </span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto lg:w-1/3 justify-center lg:justify-start">
                        <FaPhoneAlt className="text-lime-400 text-lg flex-shrink-0" />
                        <span className="text-white text-sm md:text-base font-medium">
                            <Link href="https://wa.me/923053604717" target="_blank" className="hover:text-lime-400 hover:underline">
                                +92 305 3604717
                            </Link>
                            <br />
                            <Link href="https://wa.me/923319991156" target="_blank" className="hover:text-lime-400 hover:underline">
                                +92 331 9991156
                            </Link>
                        </span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto lg:w-1/3 justify-center lg:justify-start">
                        <FaMapMarkerAlt className="text-lime-400 text-lg flex-shrink-0" />
                        <span className="text-white text-sm md:text-base font-medium">
                            Everywhere in the world
                        </span>
                    </div>
                </div>

                <div className="text-gray-400 text-xs md:text-sm w-full lg:w-auto text-center lg:text-right">
                    © 2023 WGTecSol. All rights reserved.
                </div>
            </div>
        </footer>
    );
}