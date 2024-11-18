import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="flex justify-center container mx-auto py-12 space-x-9">
    {/* Left content section */}
    <div className="flex-1 flex justify-center items-center">
      <div className="space-y-9 ">
        <h1 className="text-7xl text-slate-200 font-mono font-semibold">
          Moringa: Nature's Miracle
        </h1>
        <p>Moringa, often referred to as the "miracle tree," provides essential nutrients and offers numerous health benefits. It embodies nature's ability to heal and rejuvenate, offering a powerful reminder of the incredible resources we have at our fingertips.</p>
        <div className="flex items-center space-x-12">
          <a href="#">
            <button className="text-green-800 font-semibold bg-slate-100 hover:bg-slate-200 hover:text-green-900 font-sans px-8 py-3">
              <h5>Shop now</h5>
            </button>
          </a>
          <a href="#">
            <h5 className="text-slate-50">Explore plants arrow</h5>
          </a>
        </div>
      </div>
    </div>
  
    {/* 8x8 Dot Grid */}
    <div className=" grid grid-cols-8 gap-4 absolute bottom-0 mt-20 top-3/4 left-1/2 transform -translate-x-1/2 z-5">
      {Array.from({ length: 64 }).map((_, i) => (
        <div key={i} className="w-2 h-2 bg-slate-200 rounded-full"></div>
      ))}
    </div>
    {/* Right-side image layout */}
    <div className="flex-1 relative">
  
      {/* Image Layout */}
      <div className="relative flex justify-center items-center w-full">
        <div className="grid grid-cols-3 gap-4 w-full">
          {/* Left side: 2 stacked images */}
          <div className="flex flex-col gap-4">
            <div className="h-[300px]">
              <Image
                src="/image1.png"
                width={400}
                height={500}
                className="rounded mx-auto"
              />
            </div>
            <div className="h-[300px]">
              <Image
                src="/image1.png"
                width={400}
                height={500}
                className="rounded mx-auto"
              />
            </div>
          </div>
  
        {/* Right side: 1 long image */}
        {/* Right side: 1 long image */}
        <div className="col-span-2 row-span-2 h-full w-full relative">
          {/* Image */}
          <Image
            src="/image1.png"
            width={1000}
            height={1000} // Adjust the height to make it tall
            className="rounded mx-auto h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          
          {/* Content Overlay (Header, Description, and Button) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-6 w-full text-center text-white z-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold">Your Header Text</h2>
              <p className="text-lg">
                This is your description text that appears over the image.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <button className="px-8 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-300">
                    Shop Now
                  </button>
                </a>
                <a href="#">
                  <button className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-green-700 transition duration-300">
                    Explore
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>
  
  )
}
