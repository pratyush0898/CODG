import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import BlogPostCard from '../../Components/BlogPostCard/BlogPostCard'
import Footer from '../../Components/Footer/Footer.jsx'
import Layout from '../../Components/Layout/Layout'
import SearchBox from '../../Components/SearchBox/SearchBox.jsx'
import './Home.css'

const Home = () => {
  return (
    <>
      <NavBar />
        <main>
          <HeroSection />
          <div id="adv-1" className="ad-hor ads">
            <h1 className='ad-head'>Advertisement</h1>
          </div>
          <BlogPostCard />
        </main>
      <Footer />
    </>
  )
}

export default Home
