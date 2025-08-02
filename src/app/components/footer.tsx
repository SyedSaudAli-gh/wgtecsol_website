"use client";
import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full h-auto min-h-[335px] flex flex-col justify-between py-10 px-4 md:px-10 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                <div className="flex items-center gap-3 mb-4 lg:mb-0">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/Logo.png"
                            alt="Logo"
                            width={64}
                            height={64}
                            className="p-2"
                        />
                    </div>
                    <span className="text-white text-xl md:text-2xl font-semibold">
                        SquareUp
                    </span>
                </div>


                <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {[
                        "Home",
                        "Services",
                        "Work",
                        "Process",
                        "About",
                        "Careers",
                        "Contact",
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
                            href="#"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaFacebookF className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="#"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaTwitter className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                        <a
                            href="#"
                            className="bg-[#232323] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-lime-400 transition group"
                        >
                            <FaLinkedinIn className="text-lime-400 text-xl md:text-2xl transition group-hover:text-black" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="border-t border-[#232323] my-6"></div>


            <div className="flex flex-col md:flex-row justify-between md:items-end items-center gap-6">
                <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-4 md:gap-0 items-center">

                    <div className="flex items-center gap-2 border-b border-[#232323] pb-2 w-full md:w-1/3 justify-center md:justify-start">
                        <FaEnvelope className="text-lime-400 text-lg md:text-xl" />
                        <span className="text-white text-sm md:text-base font-medium text-center md:text-left">
                            hello@squareup.com
                        </span>
                    </div>

                    <div className="flex items-center gap-2 border-b border-[#232323] pb-2 w-full md:w-1/3 justify-center md:justify-start">
                        <FaPhoneAlt className="text-lime-400 text-lg md:text-xl" />
                        <span className="text-white text-sm md:text-base font-medium text-center md:text-left">
                            +91 91813 23 2309
                        </span>
                    </div>

                    <div className="flex items-center gap-2 border-b border-[#232323] pb-2 w-full md:w-1/3 justify-center md:justify-start">
                        <FaMapMarkerAlt className="text-lime-400 text-lg md:text-xl" />
                        <span className="text-white text-sm md:text-base font-medium text-center md:text-left">
                            Somewhere in the World
                        </span>
                    </div>
                </div>

                <div className="text-gray-400 text-xs md:text-sm w-full md:w-auto text-center md:text-right">
                    © 2023 SquareUp. All rights reserved.
                </div>
            </div>
        </footer>
    );
}