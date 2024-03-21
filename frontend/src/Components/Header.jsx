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
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <NavLink
                to="/dashboard"
                className={(isActive) =>
                  `${isActive ? "nav-link " : "nav-link active"}`
                }
                onClick={startLoadingBar}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/courses"
                className={(isActive) =>
                  `${isActive ? "nav-link " : "nav-link active"}`
                }
                onClick={startLoadingBar}
              >
                Courses
              </NavLink>
              <NavLink
                to="/about"
                className={(isActive) =>
                  `${isActive ? "nav-link " : "nav-link active"}`
                }
                onClick={startLoadingBar}
              >
                About
              </NavLink>
              <NavLink
                to="/pricing"
                className={(isActive) =>
                  `${isActive ? "nav-link " : "nav-link active"}`
                }
                onClick={startLoadingBar}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/signIn"
                className={(isActive) =>
                  `${isActive ? "nav-link " : "nav-link active"}`
                }
                onClick={startLoadingBar}
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className={(isActive) =>
                  `${isActive ? "nav-link " : "nav-link active"}`
                }
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
