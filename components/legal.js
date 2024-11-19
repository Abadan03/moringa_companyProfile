import Image from 'next/image'
import React from 'react'

export default function Legal ()  {
  return (
    <div className='w-full bg-zinc-50'>
      <div className='flex justify-center container mx-auto py-12 w-full '>
        <div className='grid'>
          <h1 className='text-3xl font-sans text-center'>Legal Certifications & Recognitions for Lorsae Products</h1>
          <div className='md:flex md:justify-between md:items-center w-full py-20 gap-x-12 space-y-10'>
            <div className='grid text-center gap-y-10'>
                <Image
                  src="/NIB.jpg"
                  width={200}
                  height={500}
                  className="rounded mx-auto"
                />
              <h3 className='font-semibold'>
                NIB
              </h3>
            </div>
            <div className='grid text-center gap-y-10'>
              <Image
                src="/PIRT.png"
                width={200}
                height={500}
                className="rounded mx-auto"
              />
              <h3 className='font-semibold'>
                PIRT : 0512210007386
              </h3>
            </div>
            <div className='grid text-center gap-y-10'>
                <Image
                  src="/halal.png"
                  width={200}
                  height={500}
                  className="rounded mx-auto"
                />
              <h3 className='font-semibold'>
                HALAL
              </h3>
            </div>
            <div className='grid text-center gap-y-10'>
                <Image
                  src="/CV.jpg"
                  width={200}
                  height={500}
                  className="rounded mx-auto"
                />
              <h3 className='font-semibold'>
                CV. EKA MULTI JAYA
              </h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
