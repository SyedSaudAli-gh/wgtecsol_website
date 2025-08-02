"use client";
import { useState } from "react";

export default function ContactForm() {
  const [budget, setBudget] = useState(1000);

  return (
    <div className="min-h-screen flex items-center justify-center sm:mt-20">
      <form className="w-[700px] border border-[#454545] p-5 py-12 space-y-8">
        {/* Name & Email */}
        <div className="flex gap-6">
          <div className="flex-1 bg-[#232323] rounded-lg p-6">
            <label className="block text-white text-lg mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-500"
            />
          </div>
          <div className="flex-1 bg-[#232323] rounded-lg p-6">
            <label className="block text-white text-lg mb-2">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Why Contacting */}
        <div className="bg-[#232323] rounded-lg p-6">
          <label className="block text-white text-lg mb-4">
            Why are you contacting us?
          </label>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" defaultChecked className="accent-lime-400" />
              <span className="text-white">Web Design</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="accent-lime-400" />
              <span className="text-white">Collaboration</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="accent-lime-400" />
              <span className="text-white">Mobile App Design</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="accent-lime-400" />
              <span className="text-white">Others</span>
            </label>
          </div>
        </div>

        {/* Budget */}
        <div className="bg-[#232323] rounded-lg p-6">
          <label className="block text-white text-lg mb-2">Your Budget</label>
          <span className="block text-gray-400 mb-6 text-sm">
            Slide to indicate your budget range
          </span>
          <div className="flex items-center justify-between">
            <span className="text-white">$1000</span>
            <input
              type="range"
              min={1000}
              max={5000}
              value={budget}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(Number(e.target.value))}
              className="w-full mx-4 accent-lime-400"
              style={{
                height: "6px",
                background: "linear-gradient(90deg, #bfff00 0%, #bfff00 100%)",
              }}
            />
            <span className="text-white">$5000</span>
          </div>
        </div>

        {/* Message */}
        <div className="bg-[#232323] rounded-lg p-6">
          <label className="block text-white text-lg mb-2">Your Message</label>
          <textarea
            placeholder="Type here"
            className="w-full bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 resize-none h-20"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-12 rounded-md text-lg transition-all duration-200"
            style={{ minWidth: 160 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}