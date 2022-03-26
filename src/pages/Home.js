import React, { useState, useEffect } from "react";
import Cursor from "../components/Cursor";
import NavMain from "../components/NavMain";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import BrushBtn from "../images/brush-btn.png";
import { motion } from "framer-motion";

//import typewriter effect
import Typewriter from 'typewriter-effect';

function Home() {

// hide scroll bars if mouse goes over screen because of the cursor animation divs
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  return (
    <main className="home-main">
      <Logo/>
      <Hamburger />
      <NavMain />
      {/* star background Spans */}
      <div className="starBackground" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/* <span></span>
        <span></span>
        <span></span> */}
      </div>
      <div className="home-section">
          <h2>
            <div className="first-line">Hi,</div>
            <div className="second-line">I'm Ivan, </div> 
            <div className="third-line">
              {/* type writer library */}
              <Typewriter 
                options= {{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [" Front-End Developer💻", " UI/UX Designer📲", " Dog Lover🐶"],
                }}
                />
              </div>
            </h2>
      </div>
      {/* contact me button on home page */}
      <a href="/portfolio/contact" className="cta-contact" aria-label="call to action contact button">
          <span>Get in Touch</span>
          <motion.img src={BrushBtn} className="brush-button" initial={{opacity:0, scaleX:0.1}} animate={{opacity:1, scaleX:1}} transition={{ ease: "easeIn", duration: 0.5 }} ></motion.img>
      </a>
      {/* <a href="/portfolio/about" class="mobile-bot-about">About</a> */}
    </main>
  );
}

export default Home;
