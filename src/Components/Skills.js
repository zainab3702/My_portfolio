import React from 'react';
import { BiDetail } from "react-icons/bi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
// Frontend
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { RiBootstrapFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
// Backend
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbCloudCog } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
// Tools
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
// Soft-Skills
import { FaPeopleGroup } from "react-icons/fa6";
import { MdNaturePeople } from "react-icons/md";
import { GiProgression } from "react-icons/gi";




function Skills() {
    return (
        <div className='container mx-8 p-10'>
            <h1 className='text-6xl py-8 text-white font-bold '>Skills</h1>
            <div className='flex justify-center m-4'>
            <div className='p-12 '>
                <div className="block grid grid-col max-w-sm p-6 bg-transparent border-2 border-yellow-400 rounded-lg shadow md:grid-row-3">

                    <h5 className="mb-2 text-3xl font-bold text-yellow-400 inline-flex justify-center text-center"> <span className='py-2 px-3'><BiDetail /></span> Frontend</h5>
                    < hr />
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 text-3xl text-orange-400'><IoLogoHtml5/></span>HTML5</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-blue-500'><FaCss3Alt/></span>CSS3</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-purple-500'><RiBootstrapFill/></span>Bootstrap</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-yellow-400'><SiJavascript/></span>JavaScript</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-green-300'><BiLogoTailwindCss/></span>TailwindCSS</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-blue-400'><FaReact/></span>ReactJS</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-purple-700'><BiLogoRedux/></span>Redux</p>
                    <p className="font-medium text-2xl p-3 m-4 inline-flex text-white hover:scale-125 border border-yellow-400 rounded-lg"><span className=' p-1 px-2 text-3xl text-white'><TbBrandNextjs/></span>NexJS</p>
                
                </div>
            </div>

            <div className='p-12'>
                <a href="" className="block grid grid-colmax-w-sm p-6 bg-transparent border-2 border-yellow-400 rounded-lg shadow">

                    <h5 className="mb-2 text-3xl font-bold text-yellow-400 inline-flex justify-center text-center"> <span className='py-2 px-3'><BsDatabaseFillGear /></span> Backend</h5>
                    <hr />
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-3 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-green-400'><FaNodeJs/></span>NodeJS</p>
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-3 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-white'><SiExpress/></span>ExpressJS</p>
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-3 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-orange-400'><SiMariadb/></span>MariaDB</p>
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-3 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-green-400'><SiMongodb/></span>MongoDB</p>
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-3 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-blue-400'><TbCloudCog/></span>RESTful API</p>
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-3 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-white'><FaAws/></span>AWS</p>
                </a>

            </div>

            <div className='p-12'>
                <a href="" className="block grid grid-col max-w-sm p-6 bg-transparent border-2 border-yellow-400 rounded-lg shadow transition duration-300 ease-in-out hover:scale-125">

                    <h5 className="mb-2 text-3xl font-bold text-yellow-400 inline-flex justify-center text-center"> <span className='py-2 px-3'><FaTools /></span> Tools</h5>
                    <hr />
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-2 inline-flex text-white justify-center"><span className=' p-1 px-2 text-3xl text-orange-400'><FaGitAlt/></span>GIT</p>

                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-2 inline-flex text-white justify-center"><span className='p-1 px-2 text-3xl text-White'><IoLogoGithub/></span>GitHub</p>

                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-2 inline-flex text-white justify-center"><span className=' p-1 px-2 text-3xl text-orange-400'><SiPostman/></span>Postman</p>

                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-2 inline-flex text-white justify-center"><span className='p-1 px-2 text-3xl text-black'><FcLinux/></span>Linux</p>
                </a>

            </div>
            <div className='p-12'>

                <a href="" className="block grid grid-col max-w-sm p-6 bg-transparent border-2 border-yellow-400 rounded-lg shadow transition duration-300 ease-in-out hover:scale-110">

                    <h5 className="mb-2 text-3xl w-48 font-bold text-yellow-400 inline-flex justify-center text-center"> <span className='p-3'><IoPeopleSharp /></span> Soft-Skils</h5>
                    <hr />
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl py-2 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-blue-300'><FaPeopleGroup/></span>Team-Work</p>           
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-2 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-orange-300'><MdNaturePeople/></span>Interaction</p>                
                    <p className="m-4 hover:scale-125 border border-yellow-400 rounded-lg font-medium text-2xl p-2 inline-flex text-white"><span className=' p-1 px-2 text-3xl text-yellow-300'><GiProgression/></span>Leadership</p>               
                    </a>
            </div>
            </div>
        </div>
    )
}

export default Skills
