import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import BlogInfo from "./pages/BlogInfo/BlogInfo";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Nopage from "./pages/Nopage/Nopage";
import MyState from "./Context/data/MyState";
import { Toaster } from "react-hot-toast";
import About from "./Components/About/About";
import './App.css'

function App() {
  const ads = document.querySelector('.ads')

  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Nopage />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </>
  );
}

export default App;
