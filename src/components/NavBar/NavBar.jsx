import React from "react";
import { NavLink } from "react-router-dom";

//import Favorite from "../../assets/favorite.png";
//import Popular from "../../assets/popular";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-film"></i> Movies React
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">
                Popular
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/movies/favorite" className="nav-link">
                Favorite
              </NavLink>
            </li>
          </ul>
          <form action="#">
            <input
              type="search"
              className="form-control"
              placeholder="search"
            ></input>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
