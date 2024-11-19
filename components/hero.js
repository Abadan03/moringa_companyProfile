import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center container mx-auto py-12 px-4 lg:space-x-9">
      {/* Left content section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="space-y-6 lg:space-y-9">
          <h1 className="text-4xl lg:text-7xl text-slate-200 font-mono font-semibold">
            Moringa: Nature's Miracle
          </h1>
          <p className="text-base lg:text-lg text-slate-300 ">
            Moringa, often referred to as the "miracle tree," provides essential nutrients and offers numerous health benefits. It embodies nature's ability to heal and rejuvenate, offering a powerful reminder of the incredible resources we have at our fingertips.
          </p>
          <div className="flex items-center space-x-4 lg:space-x-12">
            <a href="https://wa.me/6281918187424">
              <button className="text-green-800 font-semibold bg-slate-100 hover:bg-slate-200 hover:text-green-900 font-sans px-6 lg:px-8 py-2 lg:py-3">
                <h5>Buy Now</h5>
              </button>
            </a>
            {/* <a href="#">
              <h5 className="text-slate-50 text-sm lg:text-base">Explore plants arrow</h5>
            </a> */}
          </div>
        </div>
      </div>

      {/* 8x8 Dot Grid */}
      <div className="hidden lg:grid grid-cols-8 gap-4 absolute bottom-0 mt-20 top-3/4 left-1/2 transform -translate-x-1/2 z-5">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-slate-200 rounded-full"></div>
        ))}
      </div>

      {/* Right-side image layout */}
      <div className="flex-1 relative mt-12 lg:mt-0">
        <div className="relative flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {/* Left side: 2 stacked images */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px] sm:h-[300px]">
                <Image
                  src="/moringaleaf3.jpg"
                  width={400}
                  height={500}
                  className="rounded mx-auto h-full object-cover"
                />
              </div>
              <div className="h-[200px] sm:h-[300px]">
                <Image
                  src="/moringaleaf2.jpg"
                  width={400}
                  height={100}
                  className="rounded mx-auto h-full object-cover"
                />
              </div>
            </div>

            {/* Right side: 1 long image */}
            <div className="col-span-1 sm:col-span-2 row-span-2 h-full w-full relative">
              <Image
                src="/moringaleaf.jpg"
                width={1000}
                height={1000}
                className="rounded mx-auto h-full w-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-6 w-full text-start text-white z-10">
                <div className="space-y-4">
                  <h2 className="text-lg sm:text-2xl font-thin hidden md:block">The Leaf of Life.</h2>
                  <p className="text-sm sm:text-base hidden md:block">
                    The Moringa leaf symbolizes resilience and nourishment, thriving in all seasons and weathers. It offers vitality, healing, and hope, stretching out to nourish and support life.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.medicalnewstoday.com/articles/319916#nutrients"
                      className="w-full"
                    >
                      <button className="px-6 sm:px-8 py-2 sm:py-3 border-2 w-full border-white bg-white text-green-700 rounded-md hover:bg-slate-100 hover:text-green-500 transition duration-300">
                        Read More
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
