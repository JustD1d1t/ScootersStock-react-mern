import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/scooters" exact>
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/">About us</NavLink>
      </li>
      <li>
        <NavLink to="/"></NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
