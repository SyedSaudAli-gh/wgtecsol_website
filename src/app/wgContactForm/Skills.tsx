"use client"
import React, { useState } from 'react'
import Submit_button from './Submit_button';
import SkillAdd from './SkillsAdd';

function Skills() {
    const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

    // Add this inside your component
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [pictureFile, setPictureFile] = useState<File | null>(null);

    const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
            setCvFile(file);
        } else if (file) {
            alert('File size must be less than 10MB');
        }
    };

    const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
            setPictureFile(file);
        } else if (file) {
            alert('File size must be less than 5MB');
        }
    };

    const removeCv = () => setCvFile(null);
    const removePicture = () => setPictureFile(null);
    return (
        <section className="mb-6">
            <div className="grid grid-cols-2 gap-3 mb-2 max-sm:hidden">
                <div className="bg-[#1f2430] text-white font-bold py-2 rounded-md text-left px-3">
                    SKILL
                </div>
                <div className="bg-[#1f2430] text-white font-bold py-2 rounded-md text-left px-3">
                    LEVELS
                </div>
            </div>
            {/* Skills List */}
            <SkillAdd />


            <div className="space-y-4 mb-4">
                {/* CV Upload */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3">
                    <label
                        className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3"
                        htmlFor="cv-upload"
                    >
                        Upload CV/Resume :
                    </label>
                    <div className="md:col-span-9">
                        {!cvFile ? (
                            <label
                                htmlFor="cv-upload"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#323845] rounded-lg cursor-pointer bg-[#0f1115] hover:bg-[#1a1d24] hover:border-sky-500/50 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-3 text-[#9aa3ad]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-[#9aa3ad]">
                                        <span className="font-semibold">Click to upload CV</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-[#6b7280]">PDF, DOC, DOCX (MAX. 10MB)</p>
                                </div>
                                <input
                                    id="cv-upload"
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleCvUpload}
                                />
                            </label>
                        ) : (
                            <div className="flex items-center justify-between w-full p-4 bg-[#0f1115] border border-[#323845] rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <svg
                                        className="w-8 h-8 text-sky-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-sm font-medium text-[#e9ecf1]">{cvFile.name}</p>
                                        <p className="text-xs text-[#6b7280]">
                                            {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={removeCv}
                                    className="text-red-500 hover:text-red-400 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Picture Upload */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3">
                    <label
                        className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3"
                        htmlFor="picture-upload"
                    >
                        Upload Picture :
                    </label>
                    <div className="md:col-span-9">
                        {!pictureFile ? (
                            <label
                                htmlFor="picture-upload"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#323845] rounded-lg cursor-pointer bg-[#0f1115] hover:bg-[#1a1d24] hover:border-sky-500/50 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-3 text-[#9aa3ad]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-[#9aa3ad]">
                                        <span className="font-semibold">Click to upload picture</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-[#6b7280]">PNG, JPG, JPEG (MAX. 5MB)</p>
                                </div>
                                <input
                                    id="picture-upload"
                                    type="file"
                                    className="hidden"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={handlePictureUpload}
                                />
                            </label>
                        ) : (
                            <div className="flex items-center justify-between w-full p-4 bg-[#0f1115] border border-[#323845] rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#1a1d24]">
                                        <img
                                            src={URL.createObjectURL(pictureFile)}
                                            alt="Uploaded"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[#e9ecf1]">{pictureFile.name}</p>
                                        <p className="text-xs text-[#6b7280]">
                                            {(pictureFile.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={removePicture}
                                    className="text-red-500 hover:text-red-400 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <label className="flex gap-3 items-start text-sm text-[#9aa3ad] mb-6">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-sky-500" />
                <span>
                    I certify that all answers given herein are true and complete to the best of my
                    knowledge. I authorize investigation of all statements contained in this application for
                    employment as may be necessary in arriving at an employment decision.
                </span>
            </label>


            <Submit_button />
        </section>
    )
}

export default Skills