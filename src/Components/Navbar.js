import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { SiZincsearch } from "react-icons/si";
import '../Styles/Navbar.css';
import '../index.css'


function Navbar() {
  return (
    <div className=" bg-opacity-60 backdrop-filter px-4 sticky top-0 ">
      <div className="flex flex-col items-center p-4 md:flex-row">

      {/* Logo */}
        <Link to="/"><SiZincsearch className='text-yellow-500 m-2 text-5xl'/></Link>

        {/* Routes */}
        <nav className="flex items-end w-full justify-end text-lg">
          <div className="cursor-pointer flex">
        
            <Link to="/" className=" text-yellow-500 px-4 py-2 text-xl font-medium" aria-current="page">Home<div className="bg-yellow-500 w-[60px] h-[3px]"></div></Link>

            <Link to="/about" className="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">About <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div> </Link>

            <Link to="/projects" className="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">Projects <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div> </Link>

            <Link to="/skills" className="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">Skills <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></Link>

            <Link to="/contact" className="text-white group hover:bg-transparent hover:text-yellow-500 text-xl px-4 py-2 font-medium">Contact <div className="bg-yellow-500 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></Link>
          </div>
        </nav>
      </div>
</div>
  );
}
export default Navbar


