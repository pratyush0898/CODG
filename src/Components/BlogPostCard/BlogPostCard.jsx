import React, { useContext } from "react";
import MyContext from "../../Context/data/MyContext";
import BlogCard from "../BlogCard/BlogCard";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./BlogPostCard.css";

const BlogPostCard = () => {
  return (
    <>
      <div id="blog-cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div id="See-more-blogs-button">
        <Link to='/blogs'><Button>See more</Button></Link>
      </div>
    </>
  );
};

export default BlogPostCard;
