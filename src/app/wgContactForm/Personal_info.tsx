"use client"
import React, { useState } from 'react'

import PhoneNo from './PhoneNo'

function Personal_info() {
  const [idType, setIdType] = useState<'none' | 'government' | 'passport'>('none')

  return (
    <section className="mb-10">
      <div className="bg-[#1f2430] text-white text-center font-bold py-2 rounded-md mb-4">
        PERSONAL INFORMATION
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
        <label className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">
          Name :
        </label>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input
            id="firstName"
            className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
            placeholder="First Name"
            autoComplete="given-name"
          />
          <input
            id="lastName"
            className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
            placeholder="Last Name"
            autoComplete="family-name"
          />
        </div>
      </div>

      {/* ID Type */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
        <label className="text-[#cfd6df] font-semibold md:col-span-3 pt-2">
          ID Type :
        </label>

        <div className="md:col-span-9">
          <div className="flex gap-4 mb-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="idType"
                value="government"
                checked={idType === 'government'}
                onChange={() => setIdType('government')}
                className="sr-only"
              />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${idType === 'government'
                ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                : 'border-[#323845] bg-[#0f1115] text-[#9aa3ad] hover:border-[#4a5568]'
                }`}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${idType === 'government' ? 'border-sky-500' : 'border-[#6b7280]'
                  }`}>
                  {idType === 'government' && <div className="w-2 h-2 rounded-full bg-sky-500" />}
                </div>
                <span className="text-sm font-medium">Govt ID</span>
              </div>
            </label>

            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="idType"
                value="passport"
                checked={idType === 'passport'}
                onChange={() => setIdType('passport')}
                className="sr-only"
              />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${idType === 'passport'
                ? 'border-sky-500 bg-sky-500/10 text-sky-400'
                : 'border-[#323845] bg-[#0f1115] text-[#9aa3ad] hover:border-[#4a5568]'
                }`}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${idType === 'passport' ? 'border-sky-500' : 'border-[#6b7280]'
                  }`}>
                  {idType === 'passport' && <div className="w-2 h-2 rounded-full bg-sky-500" />}
                </div>
                <span className="text-sm font-medium">Passport</span>
              </div>
            </label>
          </div>

          {idType !== 'none' && (
            <div className="space-y-3 transition-all duration-500 opacity-100 translate-y-0">
              <div>
                <input
                  id={idType === 'government' ? 'cnic' : 'passport'}
                  className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all duration-300"
                  placeholder={idType === 'government' ? 'CNIC Number' : 'Passport Number'}
                  inputMode={idType === 'government' ? 'numeric' : 'text'}
                />
              </div>

              <div>
                <label className="text-[#cfd6df] text-sm font-medium mb-2 block">
                  Date of Birth :
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    className="w-full h-9 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                    placeholder="DD"
                    inputMode="numeric"
                    maxLength={2}
                  />
                  <input
                    className="w-full h-9 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                    placeholder="MM"
                    inputMode="numeric"
                    maxLength={2}
                  />
                  <input
                    className="w-full h-9 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                    placeholder="YYYY"
                    inputMode="numeric"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
          )}

          {idType === 'none' && (
            <p className="text-xs text-[#6b7280] mt-1">
              Please select an ID type to continue
            </p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 mb-3">
        <label className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3" htmlFor="street">
          Address :
        </label>
        <div className="md:col-span-9">
          <input
            id="street"
            className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
            placeholder="Street Name"
            autoComplete="address-line1"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <input
              className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
              placeholder="City"
              autoComplete="address-level2"
            />
            <input
              className="w-full h-10 rounded-md px-3 bg-[#0f1115] text-[#e9ecf1] border border-[#323845] placeholder-[#9aa3ad] focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
              placeholder="Postal Code"
              autoComplete="postal-code"
              inputMode="numeric"
            />
          </div>
        </div>
      </div>
      <PhoneNo />
    </section>
  )
}

export default Personal_info