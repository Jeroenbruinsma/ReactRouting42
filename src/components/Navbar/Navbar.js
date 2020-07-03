// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <ul className="navbar-nav mx-auto">
          <div className="navbar-brand">MovieDatabase</div>
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/AboutPage">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/DiscoverMoviesPage">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
