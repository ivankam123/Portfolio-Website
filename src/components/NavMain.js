import React from "react";
import { Link } from "react-router-dom";


function NavMain() {
  return (
    <nav className="main-nav">
      <ul className="flex">
        <li className="bottom-work">
            <Link to="/work" aria-label="link to work">
                Work
            </Link>
        </li>
        <li className="left-about">
          <Link to="/about" aria-label="link to about">
            About
          </Link>
        </li>
        <li className="right-contact">
          <Link to="/contact" aria-label="link to contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMain;
