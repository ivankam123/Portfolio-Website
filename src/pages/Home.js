import React, { useState, useEffect } from "react";
import Cursor from "../components/Cursor";
import NavMain from "../components/NavMain";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";

//import typewriter effect
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <main className="home-main">
      <Logo/>
      <Hamburger />
      <NavMain />
      <div className="home-section">
          <h2>
            <div className="first-line">Hi,</div>
            <div className="second-line">I'm Ivan, </div> 
            <div className="third-line">
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
      <a href="/portfolio/contact" className="cta-contact">Contact Me!</a>
      {/* <a href="/portfolio/about" class="mobile-bot-about">About</a> */}
    </main>
  );
}

export default Home;
