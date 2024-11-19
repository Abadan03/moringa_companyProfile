import Image from 'next/image'
import React from 'react'
import backgroundImage from "/public/about.png";

export default function Contact () {
  return (
    <div className="relative w-full bg-zinc-50 py-20">
      

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-md md:text-3xl font-serif tracking-wide">
            Contact Us
          </h2>
          {/* <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div> */}
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-gray-700 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Have any questions about our moringa products or services? We’d
              love to hear from you! Whether you're curious about collaborations
              or just want to learn more, we’re here to help.
            </p>
            <p className="font-medium text-md md:text-lg">
              📧{' '}
              <a
                href="mailto:lorsaeismoringatea@gmail.com"
                className="underline text-gray-900"
              >
                lorsaeismoringatea@gmail.com
              </a>
            </p>
            <p className="font-medium text-md md:text-lg">
              📞{' '}
              <a
                href="tel:+6281918187424"
                className="underline text-gray-900"
              >
                +62 819-1818-7424
              </a>
            </p>
            <div className="inline-block">
              <a
                href="https://wa.me/6281918187424"
                className="block"
                aria-label="Chat on WhatsApp"
              >
                <Image
                  src="/whatsappmedium.png"
                  width={200}
                  height={150}
                  className="object-contain"
                  alt="Chat on WhatsApp"
                />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* <div className="rounded-full overflow-hidden border-4 border-gray-400 shadow-lg"> */}
              <Image
                src="/logo.png"
                width={600}
                height={600}
                alt="Logo"
                className="object-cover"
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
