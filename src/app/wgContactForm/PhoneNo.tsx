"use client"
import React, { useState, forwardRef } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

// Add custom styles for the dropdown
const customStyles = `
  .PhoneInputCountrySelect {
    background-color: #000000 !important;
    color: #e9ecf1 !important;
  }
  
  .PhoneInputCountrySelect option {
    background-color: #000000 !important;
    color: #e9ecf1 !important;
  }
  
  /* For webkit browsers (Chrome, Safari) */
  .PhoneInputCountrySelect::-webkit-scrollbar {
    width: 8px;
  }
  
  .PhoneInputCountrySelect::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  .PhoneInputCountrySelect::-webkit-scrollbar-thumb {
    background: #4a4a4a;
    border-radius: 4px;
  }
`

// Stable custom input outside the component (no re-create on each render)
const TailwindPhoneInputField = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const { className = "", ...rest } = props
    return (
      <input
        ref={ref}
        {...rest}
        className={[
          // remove default borders, let wrapper handle borders/focus
          "h-10 flex-1 bg-transparent text-[#e9ecf1] placeholder:text-[#9aa3ad]",
          "outline-none border-0 focus:ring-0 focus:outline-none",
          className, // keep any className passed by library
        ].join(" ")}
      />
    )
  }
)
TailwindPhoneInputField.displayName = "TailwindPhoneInputField"

function PhoneNo() {
  const [homePhone, setHomePhone] = useState<string | undefined>()
  const [mobilePhone, setMobilePhone] = useState<string | undefined>()

  const homeInvalid = !!homePhone && !isValidPhoneNumber(homePhone)
  const mobileInvalid = !!mobilePhone && !isValidPhoneNumber(mobilePhone)

  return (
    <>
      {/* Inject custom styles */}
      <style jsx global>{customStyles}</style>
      
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3">
        <div className="text-[#cfd6df] font-semibold pt-1.5 md:col-span-3">Phone :</div>

        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Home Phone */}
          <div>
            <label htmlFor="home-phone" className="block text-[#cfd6df] text-sm font-medium mb-1.5">
              Personal Contact
            </label>

            <div
              className={[
                "flex items-center gap-2 rounded-md px-2",
                "bg-[#0f1115] border",
                homeInvalid
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-[#323845] focus-within:ring-2 focus-within:ring-sky-500/40 focus-within:border-sky-500",
              ].join(" ")}
            >
              <PhoneInput
                id="home-phone"
                international
                defaultCountry="PK"
                placeholder="Home Phone"
                value={homePhone}
                onChange={setHomePhone}
                countryCallingCodeEditable={false}
                // Make inner container flex to align select + input
                className="flex items-center gap-2 w-full"
                // Style native country select to dark theme; remove its border
                countrySelectProps={{
                  className:
                    "h-10 bg-black text-[#e9ecf1] border-0 outline-none cursor-pointer pr-1",
                  style: { backgroundColor: '#000000' }
                }}
                // Use stable custom input (no blur on type)
                inputComponent={TailwindPhoneInputField}
              />
            </div>

            {homeInvalid && (
              <p className="mt-1 text-xs text-red-400">Enter a valid phone number</p>
            )}
          </div>

          {/* Mobile Phone */}
          <div>
            <label htmlFor="mobile-phone" className="block text-[#cfd6df] text-sm font-medium mb-1.5">
              Second Contact
            </label>

            <div
              className={[
                "flex items-center gap-2 rounded-md px-2",
                "bg-[#0f1115] border",
                mobileInvalid
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-[#323845] focus-within:ring-2 focus-within:ring-sky-500/40 focus-within:border-sky-500",
              ].join(" ")}
            >
              <PhoneInput
                id="mobile-phone"
                international
                defaultCountry="PK"
                placeholder="Mobile Phone"
                value={mobilePhone}
                onChange={setMobilePhone}
                countryCallingCodeEditable={false}
                className="flex items-center gap-2 w-full"
                countrySelectProps={{
                  className:
                    "h-10 bg-black text-[#e9ecf1] border-0 outline-none cursor-pointer pr-1",
                  style: { backgroundColor: '#000000' }
                }}
                inputComponent={TailwindPhoneInputField}
              />
            </div>

            {mobileInvalid && (
              <p className="mt-1 text-xs text-red-400">Enter a valid phone number</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneNo