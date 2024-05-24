import React from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import BlogPostCard from '../../Components/BlogPostCard/BlogPostCard.jsx'

const AllBlogs = () => {
  return (
    <>
      <NavBar />
      <main>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </main>
      <Footer />
    </>
  )
}

export default AllBlogs
