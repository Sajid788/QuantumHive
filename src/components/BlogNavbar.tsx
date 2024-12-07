"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const BlogNavbar = () => {
    const router = useRouter();
  return (
    <header className=" w-full bg-transparent z-10">
    <div className=" flex items-center justify-between py-4 w-[85%] m-auto">
      <img src="/Asset/Logo.png" alt="" 
       onClick={()=>router.push('/')}
       className="cursor-pointer w-40 h-14 object-contain"
      />
      <nav className="hidden md:flex space-x-6 items-center text-black">
        <a href="/about" className=" hover:text-blue-400">
          About
        </a>
        <a href="#" className=" hover:text-blue-400">
          Services
        </a>
        <a href="#" className=" hover:text-blue-400">
          Industries
        </a>
        <a href="#" className=" hover:text-blue-400">
          Portfolio
        </a>
        <a href="#" className=" hover:text-blue-400">
          Resources
        </a>
        <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
      >
        Contact Us
      </a>
      </nav>
    
    </div>
  </header>
  )
}

export default BlogNavbar
