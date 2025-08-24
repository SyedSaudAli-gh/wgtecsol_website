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
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-auto h-auto min-h-[335px] flex flex-col justify-between py-10 px-2 md:px-6 lg:px-10">
            {/* Top row: becomes column by default; row at 1405px+ */}
            <div className="flex flex-col min-[1405px]:flex-row items-center justify-between gap-8">
                <Link href="/">
                    <div className="flex flex-col sm:flex-row items-center mb-4 min-[1405px]:mb-0 ">
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

                <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
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
                            className="md:text-lg hover:text-lime-400 transition"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Stay Connected: always single line, no wrap */}
                <div className="flex flex-nowrap items-center rounded-xl border border-[#232323] px-3 py-2 md:px-3 md:py-4 gap-3 md:gap-6 mt-4 min-[1405px]:mt-0 max-w-auto overflow-x-auto">
                    <span className="text-sm md:text-lg whitespace-nowrap">
                        Stay Connected
                    </span>
                    <div className="flex flex-nowrap items-center gap-2 md:gap-4">
                        <a
                            href="https://www.facebook.com/people/WGTecSol/61579805907255/?rdid=Uyu1KGCvFIh0z7hw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F177gkQZKYB%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#232323] rounded-lg w-9 h-9 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group shrink-0"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-lime-400 text-lg md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://www.instagram.com/wg.tecsol/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#232323] rounded-lg w-9 h-9 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group shrink-0"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="text-lime-400 text-lg md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://x.com/WGTecSol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#232323] rounded-lg w-9 h-9 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group shrink-0"
                            aria-label="LinkedIn"
                        >
                            <FaXTwitter className="text-lime-400 text-lg md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/wgtecsol/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#232323] rounded-lg w-9 h-9 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group shrink-0"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="text-lime-400 text-lg md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="https://www.whatsapp.com/channel/0029Vb5tzEuLdQeYEKzLDg45"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#232323] rounded-lg w-9 h-9 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group shrink-0"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="text-lime-400 text-lg md:text-2xl transition group-hover:text-black" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#232323] my-6"></div>


            {/* Bottom row: becomes column on lg screens */}
            <div className="flex flex-col my-4 lg:flex-row justify-between items-center lg:items-center gap-4 mb-8 lg:w-full xl:w-1/2">
                {/* Email */}
                <div className="flex items-center gap-1.5 sm:gap-2 w-auto justify-center lg:justify-start border-b border-[#232323] pb-5">
                    <FaEnvelope className="text-lime-400 text-lg shrink-0" />
                    <span className="text-white text-sm md:text-base font-medium">
                        <Link
                            href="mailto:wgtecsol@gmail.com"
                            aria-label="Email wgtecsol@gmail.com"
                            className="transition-colors duration-150 lg:hover:underline focus-visible:underline"
                        >
                            wgtecsol@gmail.com
                        </Link>
                    </span>
                </div>

                {/* Phone (centered) */}
                <div className="flex items-center w-auto justify-center lg:justify-center lg:mx-auto gap-1.5 sm:gap-2 border-b border-[#232323] md:pb-0 sm:pb-5">
                    <FaPhoneAlt className="text-lime-400 text-lg shrink-0" />
                    <span className="flex flex-col text-white text-sm md:text-base font-medium text-center whitespace-nowrap">
                        <Link
                            href="https://wa.me/923053604717"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-150 lg:hover:text-lime-400 lg:hover:underline focus-visible:underline"
                        >
                            +92 305 3604717
                        </Link>

                        <Link
                            href="https://wa.me/923319991156"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-150 lg:hover:text-lime-400 lg:hover:underline focus-visible:underline"
                        >
                            +92 331 9991156
                        </Link>
                    </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 sm:gap-2 w-auto justify-center lg:justify-start border-b border-[#232323] pb-5">
                    <FaMapMarkerAlt className="text-lime-400 text-lg shrink-0" />
                    <span className="text-white text-sm md:text-base font-medium whitespace-nowrap">
                        Everywhere in the world
                    </span>
                </div>
            </div>


            <div className="text-gray-400 text-xs md:text-sm w-auto lg:w-auto text-center lg:text-right">
                © 2023 WGTecSol. All rights reserved.
            </div>

        </footer >
    );
}