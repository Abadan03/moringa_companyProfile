import React from 'react'

export default function Header () {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between text-slate-300">
        <div className='flex justify-between space-x-6 font-thin'>
          {/* <a>
            Shop
          </a> */}
          <a>
            Products
          </a>
          <a>
            Guide
          </a>
        </div>
        <div>
          <h1 className='font-bold text-slate-100 text-2xl'>Lorsae</h1>
        </div>
        <div className='flex justify-between space-x-6'>
          <a>
            logo
          </a>
          <a>
            logo
          </a>
          {/* <a>
            logo
          </a> */}
        </div>
        
      </div>
    </div>


  )
}
