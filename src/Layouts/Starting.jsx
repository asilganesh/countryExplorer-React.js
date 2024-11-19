import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Starting = () => {

    
  return (
    <div className='w-full h-full flex flex-col gap-5 justify-center items-center h-screen ' >

        <div data-aos="zoom-in-down" className='md:text-8xl sm:text-5xl xsm:text-3xl text-gray-500 p-3'>Welcome to <span className='font-semibold'>Country Explorer</span></div>
       <Link to='/exploreCountries'> <button  data-aos="flip-up"  className='bg-green-400 text-black text-xl rounded-md p-5 hover:bg-green-300' >Explore Countries</button></Link>
     
    </div>
  )
}

export default Starting
