import React from "react";
import { useParams, Link } from "react-router-dom";
import Authors from "../components/Authors";
import Blogs from "../components/Blog";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthDetail = () => {
  const { authorId } = useParams();
  const author = Authors.find((a) => a.id === parseInt(authorId));
  const iconMap = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Twiter: FaTwitter,
    Linkedin: FaLinkedin,
  };
  const authorBlogs = Blogs.filter((blog) => blog.idAuth === author.id);

  return (
    <div>
      <Navbar />

      {/* About author */}
      <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto pt-4 gap-4">
          <div className="md:flex md:items-center mb-8 gap-6">
         
            <img src={author.image} alt={author.authName} className="object-cover h-[295px] w-[250px] " />

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center items-baseline">
              <h1 className=" font-bold mb-4">
                Hey there, I’m {author.authName} and welcome to my Blog
              </h1>
              <p className="text-gray-700 mb-6">{author.about}</p>
              <div className="flex gap-3">
                {author.links.map((link, i) => {
                  const Icon = iconMap[link.label];
                  return (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-gray-700 hover:text-gray-500" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom bars */}
          <div className="grid grid-cols-3">
            <div className="bg-[var(--color-secondry)] h-[23px] col-span-2"></div>
            <div className="bg-[var(--color-purple)] h-[23px]"></div>
          </div>
        </div>
      </section>


      {/* Author Posts*/}
      <section className="max-w-4xl mx-auto pt-8">
        <h2 className="mb-6">My Posts</h2>

        {authorBlogs.length === 0 ? (
          <p>Aucun article publié par cet auteur.</p>
        ) : (
          <div className="">
            {authorBlogs.map((blog) => (
                <Link
                  to={`/blogdetail/${blog.id}`}
                  key={blog.id}
                  onClick={() => window.scrollTo(0, 0)}>
              <div key={blog.id} className="flex items-center my-10 justify-between">
                <img src={blog.image} alt={blog.titre} className=" h-52 w-80 object-cover md:mr-10 " />


                <div>
                  <span className=" text-[var(--color-purple)] tracking-[0.2em] uppercase font-semibold text-sm">{blog.categorie} </span>
                  <h2 className=" font-bold mt-3 text-[var(--color-primary)]">{blog.titre}</h2>


                  {/* Extrait : 2 premiers paragraphes */}
                  <div className="text-gray-600 mt-2">
                    {Array.isArray(blog.sections[0].text) ? (
                      blog.sections[0].text.slice(0, 2).map((p, i) => (
                        <p key={i} className="mb-2">
                          {p}
                        </p>
                      ))
                    ) : (
                      <p>{blog.sections[0].text.substring(0, 200)}...</p>
                    )}
                  </div>


                </div></div></Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default AuthDetail;
