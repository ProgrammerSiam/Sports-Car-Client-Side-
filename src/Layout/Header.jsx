import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Style/header.css";
import "./Style/responsive.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCarCrash } from "react-icons/fa";
import { AuthContext } from "../Features/Auth/AuthProvider";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut();
    toast("Log Out Successful");
  };

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
            <a href="#">home</a>
          </li>
        </NavLink>

        <NavLink to="/allToys" className="link" activeClassName="active">
          <li>
            <a href="#">All Toys</a>
          </li>
        </NavLink>

        <NavLink to="/addtoys" className="link" activeClassName="active">
          <li>
            <a href="#">Add a Toy</a>
          </li>
        </NavLink>

        <NavLink to="/blog" className="link" activeClassName="active">
          <li>
            <a href="#">blog</a>
          </li>
        </NavLink>

        <NavLink to="/contact" className="link" activeClassName="active">
          <li>
            {user ? (
              <>
                <Link to="/mytoys">My Toys</Link>
                <Link onClick={handleLogOut}>Log Out</Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </NavLink>
      </div>

      <div className="header--profile">
        {user && (
          <div className="user">
            <img src={user.photoURL} alt="" />
            <span class="tooltiptext">{user.displayName}</span>
          </div>
        )}

        {/* <span id="mobile">
          <FaStream />
        </span> */}
      </div>
    </header>
  );
}
