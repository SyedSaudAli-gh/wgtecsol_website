"use client";
import { useState } from "react";

export default function ContactForm() {
  const [budget, setBudget] = useState(1000);
  const [selectedReason, setSelectedReason] = useState("Web development");

  const contactReasons = [
    "Web development",
    "UI/UX services",
    "App development",
    "Game development",
    "Graphic/Animators (2D/3D)",
    "AI/ML services",
    "Software Development",
    "Video editing services",
    "Content writers",
    "Cybersecurity services",
    "IoT & Networking",
    "Debugging & Testing"
  ];

  return (
    <div className="min-h-auto mt-26 sm:mt-16 md:mt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <form className="w-full max-w-[700px] border border-[#454545] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-6 md:space-y-8 rounded-lg">
        {/* Name & Email */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-1 bg-[#232323] rounded-lg p-4 sm:p-5 md:p-6">
            <label className="block text-white text-base sm:text-lg mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>
          <div className="flex-1 bg-[#232323] rounded-lg p-4 sm:p-5 md:p-6">
            <label className="block text-white text-base sm:text-lg mb-2">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Why Contacting */}
        <div className="bg-[#232323] rounded-lg p-4 sm:p-5 md:p-6">
          <label className="block text-white text-base sm:text-lg mb-3 sm:mb-4">
            Why are you contacting us?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6 md:gap-x-8">
            {contactReasons.map((reason, index) => (
              <label key={index} className="flex items-center space-x-2 cursor-pointer hover:text-lime-400 transition-colors">
                <input 
                  type="radio" 
                  name="reason" 
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="accent-lime-400 w-4 h-4" 
                />
                <span className="text-white text-sm sm:text-base">{reason}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="bg-[#232323] rounded-lg p-4 sm:p-5 md:p-6">
          <label className="block text-white text-base sm:text-lg mb-2">Your Budget</label>
          <span className="block text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">
            Slide to indicate your budget range
          </span>
          <div className="flex items-center justify-between gap-2">
            <span className="text-white text-xs sm:text-sm md:text-base whitespace-nowrap">$500</span>
            <div className="flex-1 mx-2 sm:mx-4">
              <input
                type="range"
                min={500}
                max={50000}
                value={budget}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(Number(e.target.value))}
                className="w-full accent-lime-400 cursor-pointer"
                style={{
                  height: "6px",
                  background: `linear-gradient(to right, #bfff00 0%, #bfff00 ${((budget - 500) / (50000 - 500)) * 100}%, #4a4a4a ${((budget - 500) / (50000 - 500)) * 100}%, #4a4a4a 100%)`,
                }}
              />
              <div className="text-center mt-2 text-lime-400 font-semibold text-sm sm:text-base">
                ${budget.toLocaleString()}
              </div>
            </div>
            <span className="text-white text-xs sm:text-sm md:text-base whitespace-nowrap">$50,000</span>
          </div>
        </div>

        {/* Message */}
        <div className="bg-[#232323] rounded-lg p-4 sm:p-5 md:p-6">
          <label className="block text-white text-base sm:text-lg mb-2">Your Message</label>
          <textarea
            placeholder="Type here"
            className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 resize-none h-20 sm:h-24 md:h-28 text-sm sm:text-base"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2.5 sm:py-3 px-8 sm:px-10 md:px-12 rounded-md text-base sm:text-lg transition-all duration-200 w-full sm:w-auto max-w-xs"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}