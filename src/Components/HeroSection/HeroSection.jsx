import React, { useState, useEffect, useContext } from "react";
import MyContext from "../../Context/data/MyContext.jsx";
import "./HeroSection.css";

const HeroSection = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;

  const headings = [
    "Programming: Make Yourself a Creator of Tomorrow",
    "Unleash Your Creativity with Code",
    "Coding: The Art of Building the Future",
    "Transform Ideas into Reality with Programming",
    "Master the Language of the Digital Age",
    "Empower Yourself with Coding Skills",
    "Become a Digital Architect with Programming",
    "Code Your Way to Success",
    "Discover the Power of Programming",
    "Shape the Future with Your Code",
    "Innovation Starts with Coding",
    "Build the Future One Line at a Time",
    "Coding: Your Gateway to Innovation",
    "Programming: Crafting the Future, One Algorithm at a Time",
    "Unlock Infinite Possibilities with Programming",
    "Code: The Universal Language of Innovation",
    "Programming: Design the Digital World",
    "Create, Innovate, Code",
    "Code the Change You Want to See",
    "Programming: Your Path to Digital Mastery",
    "Harness the Power of Coding",
    "From Concept to Code: Building the Future",
    "Programming: The Key to Technological Advancement",
    "Develop Skills, Build the Future",
    "Coding: The Digital Craftsmanship",
    "Innovation through Code",
    "Programming: Empowering the Next Generation",
    "Think, Code, Achieve",
    "Code: The Blueprint of the Digital Era",
    "Shape Your Future with Coding",
    "Programming: Turning Ideas into Reality",
    "The Art of Code",
    "Future-Ready with Programming",
    "Programming: The Heartbeat of Modern Technology",
    "Code Your Dreams to Life",
    "The Magic of Programming",
    "Empower, Innovate, Code",
    "Programming: Pioneering the Future",
    "Digital Innovation through Coding",
    "The Evolution of Coding",
    "Programming: The Journey to Innovation",
  ];

  const paragraphs = [
    "Programming is the skill that turns you into a creator of tomorrow, enabling you to build innovative solutions and transform ideas into reality. Coding is not just about writing lines of code; it's about unleashing your creativity and constructing something remarkable. With coding, you can build the future by designing applications, websites, and systems that can change the world. Programming transforms abstract ideas into tangible, functioning realities, bridging the gap between imagination and execution.",
    "Mastering the language of the digital age opens up countless opportunities in various fields, from web development to artificial intelligence. Empower yourself by learning to code; it equips you with the skills needed to navigate and excel in today's digital world. Become a digital architect through programming, designing and building robust and scalable digital structures.",
    "Coding is a pathway to success, allowing you to develop problem-solving skills and logical thinking that are valuable in any career. Discover the power of programming and how it can be used to create, innovate, and solve real-world problems. Shape the future with your code, building technologies that can enhance and improve everyday life.",
    "Innovation often begins with coding, as new software and applications drive technological advancements. Build the future one line at a time, knowing that every piece of code you write contributes to a larger, impactful project. Coding opens the gateway to innovation, providing the tools and knowledge to develop groundbreaking solutions. Programming is about crafting the future, one algorithm at a time, turning complex problems into elegant solutions.",
    "Unlock infinite possibilities with programming, as each new project presents an opportunity to learn and grow. Code is the universal language of innovation, spoken by developers across the globe to create technology that connects and advances humanity. Programming allows you to design the digital world, creating applications and systems that people use every day.",
    "Create, innovate, and code your way to a better future, leveraging the power of programming to make a difference. Coding the change you want to see in the world involves using technology to address social, economic, and environmental challenges. Programming provides a path to digital mastery, where you can develop the skills to create advanced and sophisticated software.",
    "Harness the power of coding to build solutions that can streamline processes, enhance productivity, and provide new functionalities. From concept to code, programming is the process of bringing your ideas to life through meticulous design and implementation. Programming is key to technological advancement, driving progress in fields such as medicine, finance, and entertainment. Developing coding skills allows you to build the future, creating software that can make a significant impact.",
    "Coding is the digital craftsmanship, where attention to detail and creativity come together to produce exceptional results. Innovation through code means continuously seeking new ways to solve problems and improve existing systems. Programming empowers the next generation, providing the tools and knowledge needed to thrive in a tech-driven world. Think, code, and achieve your goals, using programming to turn your aspirations into reality.",
    "Code is the blueprint of the digital era, laying the foundation for the technology that shapes our lives. Shape your future with coding, acquiring skills that are in high demand and essential for modern careers. Programming turns ideas into reality, enabling you to develop software that can transform industries. The art of code involves writing clean, efficient, and maintainable software that performs well and is easy to understand.",
    "Future-ready with programming means being equipped to handle the challenges and opportunities of the digital age. Programming is the heartbeat of modern technology, driving innovations in every sector from healthcare to entertainment. Code your dreams to life, using your programming skills to build applications and systems that reflect your vision. The magic of programming lies in its ability to create complex and powerful software from simple lines of code.",
    "Empower, innovate, and code, taking advantage of the endless possibilities that programming offers. Programming pioneers the future, with each new development pushing the boundaries of what technology can achieve. Digital innovation through coding leads to the creation of new products, services, and experiences that enhance our lives. The evolution of coding continues to shape the future, as new languages and frameworks make programming more accessible and powerful. Programming is a journey to innovation, where each project brings new challenges and opportunities for growth.",
  ];

  function getRandomParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
  }
  function getRandomHeading() {
    const randomIndex = Math.floor(Math.random() * headings.length);
    return headings[randomIndex];
  }

  const [currentParagraph, setCurrentParagraph] = useState(null);
  const [currentHeading, setCurrentHeading] = useState(null);

  useEffect(() => {
    setCurrentHeading(getRandomHeading());
  }, []);
  useEffect(() => {
    setCurrentParagraph(getRandomParagraph());
  }, []);

  return (
    <div id="heroSection">
      <article>
        <div id="heading" className={mode === "light" ? "black" : "white"}>
          <h1>{currentHeading}</h1>
        </div>
        <div id="paragraph" className={mode === "light" ? "black" : "white"}>
          <p>{currentParagraph}</p>
        </div>
      </article>
    </div>
  );
};

export default HeroSection;
