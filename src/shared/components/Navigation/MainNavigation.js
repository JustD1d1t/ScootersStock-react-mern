import { NavLink } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import React, { useState } from "react";

import logo from "../../../static/img/LogoScooters.png";

import "./MainNavigation.scss";
import SVGComponentCart from "../svgComponents/SVGComponentCart";
import SVGComponentHeart from "../svgComponents/SVGComponentHeart";
import SVGComponentPhone from "../svgComponents/SVGComponentPhone";
import SVGComponentUser from "../svgComponents/SVGComponentUser";

const MainNavigation = () => {
  const [sidedrawerVisible, setSidedrawerVisible] = useState(false);
  const body = document.querySelector("body");
  const handleSideDraw = (e) => {
    const hamburger = document.querySelector(".main-navigation__menu-btn");
    hamburger.classList.toggle("is-active");
    setSidedrawerVisible(!sidedrawerVisible);
    body.classList.toggle("hide-overflow");
  };

  return (
    <>
      <SideDrawer show={sidedrawerVisible} />
      <div className="main-navigation">
        <div className="main-navigation__links">
          <NavLink to="/scooters" exact>
            Catalog
          </NavLink>
          <NavLink to="/">Contacts</NavLink>
          <NavLink to="/">About us</NavLink>
        </div>
        <NavLink
          to="/"
          className="main-navigation__logo"
          aria-label="Strona główna"
        >
          <img src={logo} alt="" />
        </NavLink>
        <div className="main-navigation__icons">
          <a href="tel:+48730795875" aria-label="Kontakt telefoniczny">
            <SVGComponentPhone />
          </a>
          <NavLink to="/" aria-label="Konto użytkownika">
            <SVGComponentUser />
          </NavLink>
          <NavLink to="/" aria-label="Ulubione">
            <SVGComponentHeart />
          </NavLink>
          <NavLink to="/" aria-label="Koszyk">
            <SVGComponentCart />
          </NavLink>
        </div>
        <button
          className="main-navigation__menu-btn"
          onClick={handleSideDraw}
          aria-label="Open sidedrawer menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default MainNavigation;
