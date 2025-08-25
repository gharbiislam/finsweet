import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleclick = () => setNav(!nav)
  return (

    <div className='bg-[#232536] h-[80px] flex justify-center '>
      <div className="container flex items-center  justify-between px-2 lg:px-24" >
        {/* logo */}
        <div><img src={logo} alt="" className='h-6' /></div>

        {/* menu */}
        <div className='flex items-center'>
          <ul className='text-white hidden md:flex  '>
            <li className='px-6 hover:font-bold'><a href=" ">Home</a></li>
            <li className='px-6 hover:font-bold'><a href="">Blog</a></li>
            <li className='px-6 hover:font-bold'><a href="">About Us</a></li>
            <li className='px-6 hover:font-bold'><a href="">Contact us</a></li>
          </ul>   

          {/* button */}
          <button className=' bg-white px-4 py-2 md:px-8  md:py-3 font-semibold'>Subscribe</button>

          {/* humberger */}
          <div onClick={handleclick} className='md:hidden  z-10 text-white ml-2'>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* mobile menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 right-0 w-52 h-screen text-white bg-[#232536] flex flex-col justify-center items-center'} >
            <li className='py-6 ' ><a href="">Home</a></li>
            <li className='py-6 ' ><a href="">Blog</a></li>
            <li className='py-6 '><a href="">About Us</a></li>
            <li className='py-6 '><a href="">Contact us</a></li>
          </ul>

        </div>
      </div>
      </div>

  )
}

export default Navbar