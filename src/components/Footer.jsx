import React from 'react'
import logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="bg-primary" className="bg-[var(--color-primary)] text-white flex items-center justify-center pb-10 mt-20">
      <div className="container mx-auto px-4 lg:px-24 py-10 flex flex-col gap-10">

        {/* Logo & Menu */}
        <section className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0 ">
          <div>
            <img src={logo} alt="Logo" className="h-6" />
          </div>

          <ul className="flex flex-col md:flex-row text-xs md:text-base items-center gap-4 md:gap-6">
            <li className="hover:font-bold"><a href="#">Home</a></li>
            <li className="hover:font-bold"><a href="#">Blog</a></li>
            <li className="hover:font-bold"><a href="#">About us</a></li>
            <li className="hover:font-bold"><a href="#">Contact us</a></li>
            <li className="hover:font-bold"><a href="#">Privacy Policy</a></li>
          </ul>
        </section>

        {/* Subscribe Section */}
        <section className="bg-white bg-opacity-10 p-4 lg:p-12  flex flex-col lg:flex-row items-center justify-center gap-6 h-[256px]">
          <h2 className="text-center  lg:text-left text-white text-lg lg:text-3xl ">
            Subscribe to our newsletter to get latest updates and news
          </h2>
          <div className="flex w-full lg:w-auto gap-2">
            <input
              type="email" placeholder="Enter Your Email"
              className="bg-transparent w-full lg:w-[320px] px-4 py-2 border border-[var(--color-secondry)]  focus:outline-none"
            />
            <button className="bg-[var(--color-secondry)] hover:bg-[var(--color-secondry2)] font-semibold px-6 py-2 text-black ">
              Subscribe
            </button>
          </div>
        </section>

        {/* Contact & Social */}
        <section className="flex flex-col md:flex-row items-center md:justify-between  text-gray-400 text-sm">
          <div className="text-center md:text-left">
            <p>Finstreet 118, 2561 Fintown</p>
            <p>Hello@finsweet.com | 020 7993 2905</p>
          </div>
          <div className="flex justify-center gap-4 text-white text-lg">
            <FaFacebook className="hover:text-[var(--color-secondry)] transition-colors duration-200 cursor-pointer" />
            <FaTwitter className="hover:text-[var(--color-secondry)] transition-colors duration-200 cursor-pointer" />
            <FaInstagram className="hover:text-[var(--color-secondry)] transition-colors duration-200 cursor-pointer" />
            <FaLinkedin className="hover:text-[var(--color-secondry)] transition-colors duration-200 cursor-pointer" />
          </div>
        </section>

       

      </div>
    </footer>
  )
}

export default Footer
