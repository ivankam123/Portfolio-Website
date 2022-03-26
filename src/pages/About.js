import React, { useEffect } from "react";
import TimoPic from "../images/timo-about.png";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";

//import libraries
import { motion } from "framer-motion";


function About() {

 

  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    document.body.classList.add("overflowX-hidden");
  }, []);
  return (
    <main>
      <Logo/>
      <Hamburger />
        <a href="/portfolio" className='right-home' aria-label="link to home">Home</a>
        <a href="/portfolio/work" className='botright-work' aria-label="link to Work">Work</a>
      <motion.div className="about" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.5}}>

        <article>
        
            <div className="about-content">
                <img src={TimoPic} />
                <div className="about-desc">
                  <i>Hi, I am Ivan. I am a UI/UX designer and Front-end Web Developer based in Vancouver, BC</i>
                  <p>My interest for programming originated from my passion for computers and video games ever since I was a kid. 
                     The idea of creating a website from scratch and being able to make it something functional and visually appealing 
                     is what fascinates me as I am finishing up my Front-End development program at BCIT.
                    </p>
                    <p className="tools-used-title">Tools I usually use are:</p>
                    <ul>
                     
                        <div className="left-tools-about">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                        </div>
                        <br></br>
                        <div className="right-tools-about">
                          <li>WordPress</li>
                          <li>React</li>
                          <li>Shopify</li>
                        </div>
                    </ul>
                  </div>
            </div>

            {/* <section className="hobbies-section">
                <h3>My tools</h3>
                <ul>
                  <li>
                    <p>
                      <strong className="hobby-title">Lorem </strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </li>
                  <li>
                    <p>
                      <strong className="hobby-title">Ipsum </strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </li>
                  <li>
                    <p>
                      <strong className="hobby-title">Lorem </strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </li>
                  <li>
                    <p>
                      <strong className="hobby-title">Ipsum </strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </li>
                </ul>

            </section> */}
            
        </article>



        {/* -------------------  corner box animations */}
        <motion.div className="cornerbox cornerbox1" animate={{scale:0.5, rotate:360}} transition={{yoyo: Infinity, duration: 2}} >🐶</motion.div>
        <motion.div className="cornerbox cornerbox2" animate={{scale: 0.5, rotate:-360}} transition={{yoyo: Infinity, duration: 2}} >🐶</motion.div>
        {/* ------------------------------------------ */}
      </motion.div>
      {/* <a href="/portfolio/work" className="mobile-bot-work">Work</a> */}
    </main>
  );
}

export default About;
