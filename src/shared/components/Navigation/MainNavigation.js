import { NavLink } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import logo from "../../../static/img/LogoScooters.png";

import "./MainNavigation.scss";

const MainNavigation = () => {
  const isCartUpdated = useSelector((state) => state.cart.isUpdated);
  const cartAmount = useSelector((state) => state.cart.totalQuantity);
  const [sidedrawerVisible, setSidedrawerVisible] = useState(false);

  const body = document.querySelector("body");

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const handleHamburger = () => {
    const hamburger = document.querySelector(".main-navigation__menu-btn");
    hamburger.classList.toggle("is-active");
  };

  const handleSideDraw = (e) => {
    handleHamburger();
    setSidedrawerVisible((prevState) => !prevState);
    body.classList.toggle("hide-overflow");
  };

  return (
    <>
      <SideDrawer
        show={sidedrawerVisible}
        setSidedrawerVisible={setSidedrawerVisible}
        handleHamburger={handleHamburger}
      />
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
            <LocalPhoneIcon />
          </a>
          <NavLink to="/" aria-label="Konto użytkownika">
            <PersonIcon />
          </NavLink>
          <NavLink to="/" aria-label="Ulubione">
            <FavoriteBorderIcon />
          </NavLink>

          <CSSTransition in={isCartUpdated} timeout={200} classNames="grow-up">
            <NavLink to="/cart" aria-label="Koszyk" className="shopping-cart">
              <StyledBadge badgeContent={cartAmount} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </NavLink>
          </CSSTransition>
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
