import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Authors from '../components/Authors';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/Blog' // blogs data
import Categories from '../components/categories'
const Posts = () => {
  const sortedBlogs = [...Blog].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sortedBlogs[0]; 
  const others = sortedBlogs.slice(1, 5); 
  const [items] = useState(Categories);
  const [auth] = useState(Authors);
  const getAuthorName = (id) => {
    const author = Authors.find((a) => a.id === id);
    return author ? author.authName : "Unknown Author";
  };

  return (
    <div>
      <Navbar />
      {/*featured */}
      <section className=" bg-gray-100 ">
        <div className="grid lg:grid-cols-2   container mx-auto px-4 lg:px-20 py-16">
          <div className="p-6 space-y-4">
            <p className='uppercase tracking-[0.2em]'>Featured Post</p>
            <h2 className=" text-4xl  mb-3">{featured.titre}</h2>
            <p className="text-sm text-gray-500 mb-2">
              By <span className="text-[var(--color-purple)]">
                {getAuthorName(featured.idAuth)}
              </span> | {featured.date}
            </p>
            <p className="line-clamp-2 text-gray-600 ">
              {featured.sections[0].text}
            </p>
            <Link
                to={`/blogdetail/${featured.id}`} onClick={() => window.scrollTo(0, 0)}
              className="bg-[var(--color-secondry)] text-gray-900 font-semibold py-2 px-4  inline-block"
            >
              Read More &gt;
            </Link>
          </div>

          <div >
            <img
              src={featured.image}
              alt={featured.titre}
              className=""
            /></div></div>
      </section>


      {/*all posts */}
      <section className='container mx-auto px-4 lg:px-20 py-16'>
        <div>
           <h2 className="text-2xl font-bold border-b-2 border-gray-200 py-7">All Posts</h2>
           <div className="flex flex-col gap-4 ">
            {others.map((blog) => (
              <Link
                              to={`/blogdetail/${blog.id}`} onClick={() => window.scrollTo(0, 0)}

                key={blog.id}
                className="py-6 hover:bg-yellow-50 "
              >
                <div className='lg:flex'>
                  <div >
                    <img
                      src={blog.image}
                      alt={blog.titre}
                      className="w-[490px] h-[320px] object-cover"
                    />
                    </div>
                  <div className='p-5 content-center max-w-2xl space-y-4'>
                    <span className="text-[var(--color-purple)] uppercase tracking-[0.2em] font-semibold">
                      {blog.categorie}
                    </span>
                    <h2 className="text-lg md:text-3xl font-semibold text-[var(--color-primary)]">
                      {blog.titre}
                    </h2>
                    <p className='line-clamp-2 text-gray-600 '>{blog.sections[0].text}</p>
                  </div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}

export default Posts