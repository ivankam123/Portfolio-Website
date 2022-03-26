import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function NotFound() {
  return (
    <div>
      <Logo/>
      <div className="notFound">
          <h2>Not Found</h2>
          <p>Click <NavLink to="/" className={"here-link"} aria-label="link to home on not found page">here</NavLink> to go back to home page</p>
      </div>
    </div>
  );
}

export default NotFound;
