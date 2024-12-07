"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const router = useRouter();
  return (
    <header className=" w-full bg-transparent z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src="/Asset/Logo.svg" alt="" 
         onClick={()=>router.push('/')}
         className="cursor-pointer"
        />
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/about" className="text-white hover:text-blue-400">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            Services
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            Industries
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            Portfolio
          </a>
          <a href="#" className="text-white hover:text-blue-400">
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
  );
};

export default Navbar;
