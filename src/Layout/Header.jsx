import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Style/header.css";
import "./Style/responsive.css";

import { FaCarCrash, FaUsers, FaUserCircle, FaStream } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="header--title">
        <Link to="/" className="link">
          <FaCarCrash />
          <h3>
            sports <span>car</span>
          </h3>
        </Link>
      </div>

      <div className="header--link">
        <NavLink exact to="/" className="link" activeClassName="active">
          <li>
            <a href="#">Home</a>
          </li>
        </NavLink>

        <NavLink to="/about" className="link" activeClassName="active">
          <li>
            <a href="#">About</a>
          </li>
        </NavLink>

        <NavLink to="/services" className="link" activeClassName="active">
          <li>
            <a href="#">Services</a>
          </li>
        </NavLink>

        <NavLink to="/contact" className="link" activeClassName="active">
          <li>
            <a href="#">Contact</a>
          </li>
        </NavLink>
      </div>

      <div className="header--profile">
        <a href="#" className="button button--flex">
          Login
          <span className="button__icon">
            <FaUsers />
          </span>
        </a>
        <span className="user">
          <FaUserCircle />
        </span>

        <span id="mobile">
          <FaStream />
        </span>
      </div>
    </header>
  );
}
