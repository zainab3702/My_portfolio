import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";



const Home = ()=> {
  return (
    <div className='bg p-8 m-8 mt-20 flex'>
      <div className='container mt-32 text-white'>
        <h1 className="text-6xl p-4 font-bold">Hey Folks!</h1> <br />
        <p className='text-2xl font-medium mx-4 mt-4'>
          <span className='text-5xl'>I am <b className='text-yellow-400'> Zainab Faiqua </b></span>
           <br /> <br />A Web Developer Enthusiast <br />Bringing Designs to Life Through Responsive and Interactive Frontend Solutions.
        </p>
      </div>
      {/* --------------------------------------------------------------- */}

      <div className='container text-2xl border my-28 text-white w-[35vw] rounded-lg p-4 m-4 pb-10 flex justify-around grid grid-rows-2 grid-flow-col gap-10'>
        <div className='p-6 mt-10 text-blue-400 rounded-full border hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out hover:scale-125' >
          <a href="https://www.linkedin.com/in/zainab-faiqua-241706213"><FaLinkedinIn /></a>
        </div>
        <div className='p-6 mt-10 rounded-full border text-black hover:bg-black hover:text-white transition duration-300 ease-in-out hover:scale-125'>
          <a href="https://github.com/zainab3702"><TbBrandGithubFilled /></a>
        </div>
        <div className='p-6 mt-10 rounded-full border text-red-700 hover:text-white hover:bg-red-900 transition duration-300 ease-in-out hover:scale-125'>
          <a href="https://mail.google.com/mail/u/0/#advanced-search/to=zainabfaiqua03%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=zainab+faiqua"><IoLogoGoogle /></a>
        </div>

        <div className='p-6 mt-10 rounded-full border text-red-500 hover:text-white hover:bg-red-700 transition duration-300 ease-in-out hover:scale-125 '>
          <a href="https://youtube.com/@zainabfaiqua03?si=Ypeyt3ceMcsgZVt8"><AiOutlineYoutube /></a>
        </div>

      </div>
    </div>
  )
}

export default Home
