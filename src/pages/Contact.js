import React, { useEffect, useState } from "react";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import { motion } from "framer-motion";


function Contact() {
  return (
    <main className="contact-main">
      <Logo />
      <Hamburger />
      <a href="/portfolio" className='left-home'>Home</a>
      <a href="/portfolio/work" className='botleft-home'>Work</a>
      <motion.div className="favorites" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
        <h2>CONTACT STUFF HERE</h2>

      </motion.div>
    </main>
  );
}

export default Contact;
