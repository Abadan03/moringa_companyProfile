import Image from 'next/image'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Header () {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-wrap justify-between text-center items-center text-slate-300">
        {/* Left Navigation */}
        <div className="flex space-x-6 font-thin text-sm sm:text-base">
          <a href="#products" className="hover:text-white">
            Products
          </a>
          <a href="#Aboutandlegality" className="hover:text-white">
            About & Legality
          </a>
        </div>

        {/* Center Brand */}
        <div className="text-center flex-1 sm:flex-none">
          <h1 className="font-bold text-slate-100 text-lg sm:text-2xl">Lorsae</h1>
        </div>

        {/* Right Icons/Logo */}
        <div className="flex space-x-4 sm:space-x-6 md:ml-32">
          <a href="https://www.instagram.com/lorsaeismoringatea/" className="hover:text-white flex justify-center items-center text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@lorsaeismoringatea" className="hover:text-white flex justify-center items-center text-2xl">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>


  )
}
