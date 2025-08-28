import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Categories from "../components/categories";
import Blogs from "../components/Blog";
import Author from "../components/Authors";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Join from "../components/Join";

const BlogDetail = () => {
  const { id } = useParams(); 
  const blog = Blogs.find((b) => b.id === parseInt(id));
  const others = Blogs.slice(1, 4); 

  if (!blog) return <p>Blog not found</p>;
  
  const blogCategory = Categories.find((c) => c.idCat === blog.idCategorie);
  const blogAuthor = Author.find((a) => a.id === blog.idAuth);

  return (
    <div>
      <Navbar/>
    <div className="container mx-auto px-4 lg:px-20 py-16">
      {/*blog header */}
      <section className="max-w-2xl mx-auto py-6  space-y-4">
      <div className="flex  items-center space-x-3">
        
      <img src={blogAuthor.image} alt="" className="rounded-full w-20 h-20 object-cover "/>
      <div>
        
        <p className="font-bold text-[var(--color-purple)]">{ blogAuthor.authName}</p>
        <p className="text-gray-500">Posted on {blog.date}</p>
      </div>
      </div>
      <div>
        <h1 className="text-lg lg:text-2xl">{blog.titre}</h1>
        <div className="flex space-x-1 items-center">
        <img src={blogCategory.icon} alt=""  />
        <p> {blogCategory.catName} </p>
        </div>
      </div>
      
      
      </section>

      {/*blog cover */}
      <div>
        <img src={blog.image} alt=""  className="py-3 lg:py-10 w-full h-[300px]lg:h-[580px]"/>
      </div>


      {/*blog body */}
      <section className="max-w-2xl mx-auto space-y-7">
      {blog.sections.map((section, i) => {
  return (
    <div key={i} style={{ marginBottom: "20px" }}>
      <h3 className="text-lg lg:text-2xl">{section.subtitle}</h3>

      
      {Array.isArray(section.text)
        ? section.text.map((t, idx) => <p className="text-gray-600" key={idx}>{t}</p>)
        : <p className="text-gray-600">{section.text}</p>
      }

      {section.list && section.list.length > 0 && (
        <ul className=" list-disc ml-5 my-6" >
          {section.list.map((item, idx) => (
            <li key={idx} className="text-gray-700 text-lg font-bold">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
})}</section>

    {/* other posts */}
    <section className="mt-20">
      <h2>What to read next</h2>
     <div className="lg:flex justify-between border-b-2 border-gray-300 py-5">
    {others.map((blog) => (
      <Link
        to={`/blogdetail/${blog.id}`}
        key={blog.id}
        className="p-4 hover:bg-yellow-50 w-[405px]  flex flex-col space-y-3 mx-auto " onClick={() => window.scrollTo(0, 0)}
      >
        <img src={blog.image} className="w-full h-[320px] object-cover "/>
        <p className="text-gray-600 text-sm ">
          By <span className="text-[var(--color-purple)]">{blogAuthor.authName}</span> | {blog.date}
        </p>
        <h3 className="font-semibold text-lg ">{blog.titre}</h3>
        <p className="line-clamp-3 text-gray-600 flex-grow">
          { blog.sections[0].text}
        </p>
      </Link>
    ))}
  </div>
    </section>
    </div>
    <Join/>
    <Footer/>
    </div>

  );
};

export default BlogDetail;
