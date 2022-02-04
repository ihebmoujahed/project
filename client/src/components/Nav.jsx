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
          <li>Post</li>
        </Link>
        <Link to="/account">
          <li>My Profile</li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
