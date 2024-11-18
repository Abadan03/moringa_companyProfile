import Image from 'next/image'
import React from 'react'

export default function Legal ()  {
  return (
    <div className='flex justify-center container mx-auto py-12  w-full'>
      <div className='grid'>
        <h1 className='text-3xl font-sans text-center'>Legal Certifications & Recognitions for Lorsae Products</h1>
        <div className='flex justify-between items-center w-full py-20 space-x-12'>
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
              PIRT
            </h3>
          </div>
          <div className='grid text-center gap-y-10'>
              <Image
                src="/halal.jpg"
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
  )
}
