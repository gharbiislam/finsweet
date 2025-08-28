import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AuthDetail from "./pages/AuthDetail";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blogs from "./components/Blog";
import Posts from "./pages/Posts";
import BlogDetail from "./pages/BlogDetail";
import Category from  "./pages/Category";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/posts" element={<Posts />} /> 
        <Route path="/blogdetail/:id" element={<BlogDetail />} /> {/* detail page */}
        <Route path="/author/:authorId" element={<AuthDetail />} />
        <Route path="/category/:idCat" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      
      </Routes>
    </Router>
  );
}

export default App;
