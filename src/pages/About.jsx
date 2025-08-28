import React, { useState } from 'react';
import Authors from '../components/Authors';
import { Link } from 'react-router-dom';
import overview from '../assets/Overview.png'
import team from '../assets/Team.png'
import blog from '../assets/Blog.png'
import Join from '../components/Join'
import Footer from '../components/Footer'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from '../components/Navbar';

const About = () => {
  const [items] = useState(Authors);
  const iconMap = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Twiter: FaTwitter,
    Linkedin: FaLinkedin,
  };

  return (
    <div>
      <Navbar />
      <div className='container px-2 lg:px-24 '>
        {/*hero section */}
        <section className="relative ">
          {/* Image */}
          <img src={overview} alt="pverview" className="w-full  object-cover mt-52" />
          {/* Part1 - Text */}
          <div className="absolute -top-44 md:flex gap-2 ">
            <div className=" bg-white p-2 md:p-16">
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">About Us</p>
              <h1 className="text-lg md:text-3xl  font-bold md:mt-2">
                We are a team of content writers who share their learnings
              </h1>
            </div>


            <div className=" md:p-10">
              <p className="mt-4 text-gray-600 bg-white md: bg-transparent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>



          {/* Part2 - Stats Box overlapping image */}

          <div className="absolute   bottom-0  bg-[var(--color-secondry)]   ">
            <div className='grid grid-cols-3'>
              <div className="text-center p-2 md:p-7">
                <h1 className="text-lg sm:text-3xl font-bold">12+</h1>
                <p className="">Blogs Published</p>
              </div>
              <div className="text-center p-2 md:p-7">
                <h1 className=" text-lg sm:text-3xl font-bold">18K+</h1>
                <p className="">Views on Finsweet</p>
              </div>
              <div className="text-center p-2 md:p-7">
                <h1 className="text-lg sm:text-3xl font-bold">30K+</h1>
                <p className="">Total active Users</p>
              </div>
            </div>
            <div className='grid grid-cols-4'>
              <div className='bg-[var(--color-purple)] h-[23px]'> </div>
              <div className='bg-[var(--color-secondry)] h-[23px] col-span-2'></div>
            </div>

          </div>


        </section>


        {/* Mision & vision */}
        <section className='md:flex justify-between bg-gray-100 ' >
          <div className='p-5 md:p-20'>
            <h5>Our mision</h5>
            <h2 className='text-lg md:text-2xl'>Creating valuable content for creatives all around the world</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
          <div className=' p-5 md:p-20'>
            <h5 >Our Vision</h5>
            <h2 className='text-lg md:text-2xl'>A platform that empowers individuals to improve</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

          </div>
        </section>



        {/* section3 */}
        <section className='my-10'>
          <div className='grid lg:grid-cols-2 gap-2 sm:grid-col-10 text-[var(--color-primary)]  mb-10'>
            <div className='lg:p-16 content-center'>
              <h2 className='text-xl md:text-3xl mb-2 md:mb-6 '>Our team of creatives</h2>
              <h3 className='text-lg md:text-2xl font-semibold mb-2 md:mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
              <p className='text-base md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            <div className='relative'>
              <div className='h-28 w-24 bg-[var(--color-secondry)] rounded-tl-3xl absolute z-10 top-28 -left-12 '></div>
              <img src={team} alt="" className='w-[650px] relative z-0' />
            </div>
          </div>


          <div className='grid  lg:grid-cols-2 gap-2 sm:grid-col-10 text-[var(--color-primary)]  mb-10'>
            <div className='relative'> 
              <div className='h-20 w-20 bg-[var(--color-purple)] rounded-full absolute z-10 -bottom-10 left-32 '></div>
              <img src={blog} alt="" className='w-[650px]' />
            </div>
            <div >
             
              <div className='lg:p-16 content-center'>
                <h2 className='text-xl md:text-3xl mb-2 md:mb-6'>Why we started this Blog</h2>
                <h3 className='text-lg md:text-2xl font-semibold mb-2 md:mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
                <p className='text-base md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
              </div>
            </div>
          </div>
        </section>


        {/*authors */}
        <section>
          <h2 className="text-lg md:text-3xl font-bold mb-6 text-center">List of Authors</h2>
          <div className="grid lg:grid-cols-4 gap-2 sm:grid-col-10  mb-10 ">
            {items.map(({ id, image, authName, links }) => (
              <Link to={`/author/${id}`} key={id} onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-yellow-50">
                  <img src={image} alt={authName} className="mx-auto rounded-full h-32 w-32 object-cover" />
                  <h3 className="mt-2 font-semibold text-center">{authName}</h3>
                  <p className="text-gray-500 text-sm">Content Writer @Company</p>

                  <div className="flex justify-center gap-3 mt-3">
                    {links.map((link, index) => {
                      const Icon = iconMap[link.label];
                      return (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                          <Icon className="text-[var(--color-primary)] hover:text-gray-500" />
                        </a>
                      );
                    })}
                  </div> </div>

              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className='my-20 '>
        <Join />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
