import React from "react";
import { NavLink } from "react-router-dom";
import LogoHeader from "../images/logooo.jpg";

function Logo() {
  return (
    <div className="logo-container">
      <NavLink to="/" aria-label="link to home">
        <h2><span className="letter-i">I</span><span className="letter-k">K</span></h2>
      </NavLink>
    </div>
  );
}

export default Logo;
