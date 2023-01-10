import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
