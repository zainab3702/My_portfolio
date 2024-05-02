import React from 'react';
// import {Link} from 'react-router-dom'
import { SiZincsearch } from "react-icons/si";

function Navbar() {
  return (
    <section className="px-4">
      <div className="flex flex-col items-center justify-betweenmy-0 mx-auto p-4 md:flex-row">

      {/* Logo */}
        <a href="/">< SiZincsearch className='text-yellow-500 m-2 text-5xl ' /></a>

        {/* Routes */}
        <nav className="flex items-end w-full justify-end text-lg">
          <div className="cursor-pointer flex">
            <a href="#homme" class=" text-yellow-500 px-4 py-2 text-xl font-medium" aria-current="page">Home<div className="bg-yellow-500 w-[60px] h-[3px]"></div></a>

            <a href="#about" class="text-white group hover:text-yellow-500 text-xl px-4 py-2 font-medium">About<div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>

            <a href="#projects" class="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">Projects <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div> </a>

            <a href="#skills" class="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">Skills <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>

            <a href="#contact" class="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">Contact <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>
          </div>
        </nav>
      </div>
</section>
  );
}

export default Navbar


