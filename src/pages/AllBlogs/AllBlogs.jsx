import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import BlogCard from '../../Components/BlogCard/BlogCard.jsx'

const AllBlogs = () => {
  return (
    <>
      <NavBar />
      <main>
        <div id="blog-cards">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AllBlogs
