import Image from 'next/image'
import React from 'react'

export default function Showcase () {
  return (
    <div className="w-full bg-slate-100 py-16 md:py-28" id='products'>
      <div className="flex justify-center container mx-auto px-4">
        <div className="grid gap-y-8 w-full">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-700 font-serif tracking-wide">
              Innovative Uses & Premium Packaging
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mt-4 rounded"></div>
          </div>

          {/* Collection Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {/* Image 1 */}
            <div className="flex items-center justify-center">
              <Image
                src="/wraptea.jpg"
                width={648}
                height={1152}
                className="rounded object-cover w-full max-h-[300px] sm:max-h-[400px] md:max-h-[600px]"
                alt="Wrapped Tea"
              />
            </div>
            {/* Image 2 */}
            <div className="flex items-center justify-center">
              <Image
                src="/tea.jpg"
                width={1031}
                height={783}
                className="rounded object-cover w-full max-h-[300px] sm:max-h-[400px] md:max-h-[600px]"
                alt="Tea"
              />
            </div>
            {/* Image 3 */}
            <div className="flex items-center justify-center">
              <Image
                src="/wrapteaextra.jpg"
                width={648}
                height={1152}
                className="rounded object-cover w-full max-h-[300px] sm:max-h-[400px] md:max-h-[600px]"
                alt="Wrapped Tea Extra"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
