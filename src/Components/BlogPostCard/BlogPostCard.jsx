import React, { useContext } from "react";
import MyContext from "../../Context/data/MyContext";
import DE2bGfs from '../../assets/DE2bGfs.jpeg'
import "./BlogPostCard.css";

const BlogPostCard = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;

  const BlogCard = ({childnum}) => {
    return (
      <>
        <div id={"blog-card " + childnum}>
          <div id="blog-card-image">
            <img
              src={DE2bGfs}
              alt=""
            />
          </div>

          <div id="blog-card-container">
            <h3>DD Month YYYY</h3>
            <h1 className={mode === "light" ? "card-black" : "card-white"}>
              Heading
            </h1>
            <p className={mode === "light" ? "card-black" : "card-white"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ducimus sapiente cum in impedit laboriosam perferendis.
              Porro nobis inventore, illum consequuntur veniam non, perspiciatis
              quae, laborum ex dolores repellat dolorum.
            </p>

            <div id="blog-card-button">
              <a href="#" target="_blank">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
  <div id="blog-cards">
    <BlogCard />
    <BlogCard childnum="second"/>
  </div>
    </>
  );
};

export default BlogPostCard;
