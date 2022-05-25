import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-black bg-black">
        <div className="container-fluid">
          <Link to="./">
            <img
              src="https://frontendarmy.com/wp-content/uploads/2022/02/frontendarmy-logo.svg"
              alt="logo"
              className="m-2"
              width={100}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <li className="nav-item">
              <NavLink
                to="/Read"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                Read
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/File"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                File Upload
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dragcom"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                Drag Components
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/todo"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                To-Do List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/User"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                User
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/New"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                New
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Newdata"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                Newdata
              </NavLink>
            </li>
          </div>
          <li className="d-flex justify-content-between text-light">
            <h2 className="">React.js</h2>
          </li>
        </div>
      </nav>
    </div>
  );
}
