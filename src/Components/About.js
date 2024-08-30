import React from 'react'

function About() {
  return (
    <div className='p-10 text-white flex flex-row'>
      
      <div className=''>
        <h1 className='text-6xl p-4 font-bold '>About Me</h1>
        <p className='text-xl p-8 mt-20 leading-relaxed'>
         <b className='text-3xl text-yellow-400'>Hey Folks,</b> I am Zainab Faiqua a dedicated full stack web developer fueled by a
          year-long journey of learning and growth in the Web Development.
          <br /><br />
          With a toolbox packed with{" "}
          <span className='text-yellow-400'>
            JavaScript, ReactJs, NextJs, Node.js,
          </span>{" "}
          and more. <br />I relish the challenge of building both the
          frontend allure and the backend robustness of web applications.{" "}
          <br /> But beyond the lines of code, I bring a collaborative
          spirit and a commitment to excellence to every project.
        </p>
      </div>
      {/* -------------------------------------------------------------------- */}
      {/* animation: levitate 1.5s alternate infinite ease-in-out; */}
      <div className=' mt-20 p-32'>
        <img className='shadow-lg shadow-yellow-500/60 '  src="/Images/About.png" alt="" />
      </div>

    </div>
  )
}

export default About
