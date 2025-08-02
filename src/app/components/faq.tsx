import Image from 'next/image'
import React from 'react'
import FaqSection from './faqQuestions'

function FAQ() {
    return (
        <>
            <div className="relative w-full overflow-hidden py-24 px-4">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-black">
                    <Image
                        src="/images/faq.png"
                        alt="Services Background"
                        fill
                        className="object-cover opacity-15"

                    />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-white text-4xl sm:text-5xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-100 text-lg">
                        Still you have any questions? Contact our Team via hello@squareup.com
                    </p>
                </div>
            </div>

            <FaqSection />
        </>
    )
}

export default FAQ