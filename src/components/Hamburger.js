import React, { useState } from "react";
import { Link } from "react-router-dom";

//import framer motion
import { motion } from "framer-motion";
// import framer motion
import { AnimatePresence } from "framer-motion";


function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobileNav">
      <button
        aria-label="menu"
        className="hamburgerBtn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={isOpen ? "hamburger animate" : "hamburger"}></div>
      </button>

        {/* animating the hamburger menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.ul className="mobileNavLinks" initial={{opacity:0, scaleY: 0.1}} animate={{opacity: 1, scaleY: 1}} transition={{duration: 0.2}} exit={{opacity:0, scaleY:0}}>
          <li>
            <Link to="/"
              aria-label="link to home"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              aria-label="link to about"
              to="/about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/work"
              aria-label="link to work"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              aria-label="link to contact"
              to="/contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              CONTACT
            </Link>
          </li>
        </motion.ul>
      )}
      </AnimatePresence>


    </div>
  );
}

export default Hamburger;
