import React from "react";
import Search from "./Search.jsx";
import { Link } from "react-router-dom";

// import style from "../../public/style.css"
function Nav() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <Link to="/MainPage">
          <li id="HomePage">HOME PAGE</li>
        </Link>
        <Search />
        <Link to="/PostNew">
          <li>POST</li>
        </Link>
        <Link to="/account">
          <li>MY PROFILE</li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
