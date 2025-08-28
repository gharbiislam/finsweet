import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Authors from '../components/Authors';
import Navbar from '../components/Navbar'
import Join from '../components/Join'
import Footer from '../components/Footer'
import banner from '../assets/heroSection.png'
import Blog from '../components/Blog' // blogs data
import Categories from '../components/categories'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo1 from "../assets/logo/Logo1.png";
import logo2 from "../assets/logo/Logo2.png";
import logo3 from "../assets/logo/Logo3.png";
import logo4 from "../assets/logo/Logo4.png";
import logo5 from "../assets/logo/Logo5.png";
import team from "../assets/Overview.png";

const Home = () => {
  // Sort blogs by date (latest first)
  const sortedBlogs = [...Blog].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sortedBlogs[0]; // latest blog
  const others = sortedBlogs.slice(1, 5); // next 4 blogs
  const [items] = useState(Categories);
  const [auth] = useState(Authors);
  const [showAll, setShowAll] = useState(false);

  const displayedAuthors = showAll ? auth : auth.slice(0, 4);

  const iconMap = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Twiter: FaTwitter,
    Linkedin: FaLinkedin,
  };

  // helper function: get author name by id
  const getAuthorName = (id) => {
    const author = Authors.find((a) => a.id === id);
    return author ? author.authName : "Unknown Author";
  };
  const getCatName = (id) => {
    const categorie = Categories.find((a) => a.id === id);
    return categorie ? categorie.catName : "Unknown categorie";
  };

  return (
    <div>
      <Navbar />

      {/* hero section */}
      <section
        style={{ backgroundImage: `url(${banner})` }}
        className="relative h-screen text-white min-h-screen bg-cover bg-center content-center px-2"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative container px-2 lg:px-24 py-32">
          <p className="uppercase tracking-[0.2em]">
            Posted on <span className="font-bold">startup</span>
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold my-8 w-full max-w-4xl">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="mt-4">
            By <span className="text-[var(--color-secondry)]">James West</span> | May 23, 2022
          </p>
          <p className="mt-4 max-w-2xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          <button className="mt-6 px-6 py-3 bg-[var(--color-secondry)] hover:bg-[var(--color-secondry2)] text-black font-semibold rounded">
            Read More &gt;
          </button>
        </div>
      </section>

      {/* blogs section */}
      <section className="container mx-auto px-4 lg:px-20 py-16 grid lg:grid-cols-3 gap-8">
        {/* Featured Post */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
          <div className="border rounded-lg shadow-sm overflow-hidden p-5">
            <img
              src={featured.image}
              alt={featured.titre}
              className="h-[350px] w-[670px] object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                By <span className="text-[var(--color-purple)]">
                  {getAuthorName(featured.idAuth)}
                </span> | {featured.date}
              </p>
              <h3 className="text-xl font-semibold mb-3">{featured.titre}</h3>
              <p className="text-gray-600 mb-4">
                {featured.sections[0].subtitle}
              </p>
              <Link
                to={`/blogdetail/${featured.id}`} onClick={() => window.scrollTo(0, 0)}
                className="bg-[var(--color-secondry)] text-gray-900 font-semibold py-2 px-4  inline-block"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">All Posts</h2>
            <Link to="/posts" className="text-[var(--color-purple)] text-sm font-semibold" onClick={() => window.scrollTo(0, 0)}>
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            {others.map((blog) => (
              <Link  onClick={() => window.scrollTo(0, 0)}
                to={`/blogdetail/${blog.id}`}
                key={blog.id}
                className="p-6 hover:bg-yellow-50 "
              >
                <p className="text-sm text-gray-500 mb-1">
                  By <span className="text-[var(--color-purple)]">
                    {getAuthorName(blog.idAuth)}
                  </span> | {blog.date}
                </p>
                <h2 className="text-lg md:text-2xl font-semibold text-[var(--color-primary)]">
                  {blog.titre}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>




      {/* about us & mision */}
        <section className="container mx-auto px-4 lg:px-20 py-16">
        <div className='grid grid-cols-4'> 
              <div className='bg-white h-[23px] '></div>
              <div className='bg-[var(--color-secondry)] h-[23px] col-span-2'></div>
             <div className='bg-[var(--color-purple)] h-[23px]'> </div>
            </div>
        <div className=" grid md:grid-cols-2 bg-gray-200">
            <div className='p-20 max-w-2xl'>
                <p className='uppercase tracking-[0.2em]'>about us</p>
                <h2 className=' text-2xl md:text-4xl my-4'>We are a community of content writers who share their learnings</h2>
                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='font-semibold text-[var(--color-purple)]'>Read More &gt; </p>
            </div>
            <div className='p-20 max-w-2xl'>
                  <p className='uppercase tracking-[0.2em]'>Our mision</p>
                <h3 className=' text-lg md:text-2xl my-4'>Creating valuable content for creatives all around the world</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      </section>








      {/* categories */}
      <section>
        <div className='container mx-auto px-4 lg:px-20 py-16 grid lg:grid-cols-4 gap-8'>
          {items.map(({ idCat, icon, catName, about }) => (
                <Link to={`/category/${idCat}`} key={idCat}  onClick={() => window.scrollTo(0, 0)}>
            <div key={idCat} className='border-2 hover:bg-[var(--color-secondry)] p-6'>
              <img src={icon} alt="" />
              <h2>{catName}</h2>
              <p className='text-gray-500'>{about}</p>
            </div></Link>
          ))}
        </div>
      </section>

      {/* Authors */}
      <section>
        <h2 className="text-lg md:text-3xl font-bold mb-6 text-center">
          List of Authors
        </h2>

        <div className="container mx-auto px-4 lg:px-20 py-16 grid lg:grid-cols-4 gap-8">
          {displayedAuthors.map(({ id, image, authName, links }) => (
            <Link to={`/author/${id}`} key={id}  onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-100 rounded-lg p-6 text-center hover:bg-yellow-50">
                <img
                  src={image}
                  alt={authName}
                  className="mx-auto rounded-full h-32 w-32 object-cover"
                />
                <h3 className="mt-2 font-semibold text-center">{authName}</h3>
                <p className="text-gray-500 text-sm">Content Writer @Company</p>

                <div className="flex justify-center gap-3 mt-3">
                  {links.map((link, index) => {
                    const Icon = iconMap[link.label];
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="text-[var(--color-primary)] hover:text-gray-500" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {auth.length > 4 && (
          <div className="text-center ">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" font-semibold text-[var(--color-puprle)]"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </section>

      {/* special posts */}
      <section className='container mx-auto px-4 lg:px-20 py-16  relative'>
        <img src={team} alt="cover" className="h-screen object-cover md:max-w-6xl" />
        <div className='bg-white p-4 md:p-16 max-w-2xl z-10 bottom-16 absolute right-16 '>
          <p className='uppercase tracking-[0.2em]'>we will started</p>
          <h2 className='text-lg md:text-5xl my-4'>
            It started out as a <br /> simple idea and evolved <br /> into our passion
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button className='bg-[var(--color-secondry)] hover:bg-[var(--color-secondry2)] font-semibold px-8 py-3 my-5'>
              <Link to={`/about/`}   onClick={() => window.scrollTo(0, 0)}>
            Discover our story &gt;</Link>
          </button>
        </div>
      </section>

      {/* partner */}
      <div>
        <section className="container mx-auto px-4 lg:px-20 py-16 my-16">
          <div className="grid grid-cols-2 lg:grid-cols-6 justify-center items-center gap-8 px-6">
            <div className='text-gray-500'>
              <p>We are</p>
              <h3 className='text-gray-500 text-2xl'>Featured in</h3>
            </div>
            <img src={logo1} alt="Partner 1" />
            <img src={logo2} alt="Partner 2" />
            <img src={logo3} alt="Partner 3" />
            <img src={logo4} alt="Partner 4" />
            <img src={logo5} alt="Partner 5" />
          </div>
        </section>
      </div>

      <Join />
      <Footer />
    </div>
  )
}

export default Home
