import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blogs from '../components/Blog'
import Categories from '../components/categories'
import {useParams, Link } from 'react-router-dom'

const Category = () => {
    const { idCat } = useParams();
    const category = Categories.find((c) => c.idCat === parseInt(idCat));
    const blogCategory = Blogs.filter((b) => b.idCategorie === category.idCat);
    const [items] = useState(Categories);

    return ( 
        <div>
            <Navbar />
            <div  >
                <div className='bg-gray-100 m-auto'>
                {/* category header */}
                <section className="container mx-auto px-4 lg:px-20 py-16 max-w-2xl space-y-4 text-center ">

                    <h1>{category.catName}</h1>
                    <p className='text-gray-600'>{category.about}</p>
                    <p className='uppercase tracking-[0.1em]'>blog &gt; {category.catName}</p>


                </section>
</div>

                {/*content */}
                <div className="container mx-auto px-4 lg:px-20 py-16 lg:flex justify-between" >
                    {/*category blogs */}
                    <section className='flex flex-col gap-4 '>
                                {blogCategory.map((blog) => (
                                  <Link
                                    to={`/blogdetail/${blog.id}`}
                                    key={blog.id}
                                    className="py-6 hover:bg-yellow-50 "
                                  >
                                    <div className='lg:flex'>
                                      <div >
                                        <img src={blog.image} className="w-full lg:w-[290px] h-[200px] lg:h-[312px] object-cover"
                                        />
                                        </div>
                                      <div className='p-5 content-center max-w-2xl space-y-4'>
                                        <span className="text-[var(--color-purple)] uppercase tracking-[0.2em] font-semibold">
                                          {category.catName}
                                        </span>
                                        <h2 className="text-lg md:text-3xl font-semibold text-[var(--color-primary)]">
                                          {blog.titre}
                                        </h2>
                                        <p className='line-clamp-2 text-gray-600 '>{blog.sections[0].text}</p>
                                      </div></div>
                                  </Link>
                                ))}
                    </section>


                    {/* categories cards */}
                   <section className="w-full lg:w-[300px] space-y-5">
                        <h2 className="">Categories</h2>
                        {items.map((c) => (
                            <Link
                                to={`/category/${c.idCat}`}
                                key={c.idCat}
                                className="flex items-center space-x-3 p-3 border-2 border-gray-400 hover:border-none hover:bg-[var(--color-secondry)]"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <img src={c.icon} alt={c.catName} className=""/>
                                <h3>{c.catName}</h3>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category