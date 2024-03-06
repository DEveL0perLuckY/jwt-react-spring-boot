import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ startLoadingBar }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Educational Platform
          </Link>

          <div id="navbarNav">
            <ul className="navbar-nav ml-auto">
              
              <NavLink
                to="/Dashboard"
                className={(isActive) => `${isActive ? "nav-link " : "nav-link active"}`}
                onClick={startLoadingBar}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/Courses"
                className={(isActive) => `${isActive ? "nav-link " : "nav-link active"}`}
                onClick={startLoadingBar}
              >
                Courses
              </NavLink>
              <NavLink
                to="/About"
                className={(isActive) => `${isActive ? "nav-link " : "nav-link active"}`}
                onClick={startLoadingBar}
              >
                About
              </NavLink>
              <NavLink
                to="/Pricing"
                className={(isActive) => `${isActive ? "nav-link " : "nav-link active"}`}
                onClick={startLoadingBar}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/SignIn"
                className={(isActive) => `${isActive ? "nav-link " : "nav-link active"}`}
                onClick={startLoadingBar}
              >
                Login
              </NavLink>
              <NavLink
                to="/SignUp"
                className={(isActive) => `${isActive ? "nav-link " : "nav-link active"}`}
                onClick={startLoadingBar}
              >
                SignUp
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
