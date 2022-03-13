import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";


function NavMain() {
  return (
    <nav className="main-nav">
      <ul className="flex">
        <li className="bottom-work">
            <Link to="/work">
                Work
            </Link>
        </li>
        <li className="left-about">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="right-contact">
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMain;
