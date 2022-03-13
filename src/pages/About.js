import React from "react";
import { ReactComponent as AttributeLogo } from "../images/attribute.svg";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

function About() {
  return (
    <main className="about-main">
      <Logo/>
      <Hamburger />
        <a href="/portfolio" className='right-home'>Home</a>
        <a href="/portfolio/work" className='botright-work'>Work</a>
      <motion.div className="about" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
        <h2 >About section here</h2>
        <motion.div className="cornerbox cornerbox1" animate={{scale:0.5, rotate:180}} transition={{yoyo: Infinity, duration: 2}} ></motion.div>
        <motion.div className="cornerbox cornerbox2" animate={{scale: 0.5, rotate:-180}} transition={{yoyo: Infinity, duration: 2}} ></motion.div>
      </motion.div>
      {/* <a href="/portfolio/work" className="mobile-bot-work">Work</a> */}
    </main>
  );
}

export default About;
