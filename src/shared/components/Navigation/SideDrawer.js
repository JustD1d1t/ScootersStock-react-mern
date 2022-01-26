import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import SVGComponentCart from "../svgComponents/SVGComponentCart";
import SVGComponentHeart from "../svgComponents/SVGComponentHeart";
import SVGComponentPhone from "../svgComponents/SVGComponentPhone";
import SVGComponentUser from "../svgComponents/SVGComponentUser";

import "./SideDrawer.scss";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={400}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer">
        <div className="side-drawer__navigation">
          <div className="side-drawer__links">
            <NavLink to="/scooters" exact>
              Catalog
            </NavLink>
            <NavLink to="/">Contacts</NavLink>
            <NavLink to="/">About us</NavLink>
          </div>

          <div className="side-drawer__bottom">
            <a href="tel:+48730795875" aria-label="Kontakt telefoniczny">
              <SVGComponentPhone />
            </a>
            <NavLink to="/" aria-label="Konto użytkownika">
              <SVGComponentUser />
            </NavLink>
            <NavLink to="/" aria-label="Ulubione">
              <SVGComponentHeart />
            </NavLink>
            <NavLink to="/cart" aria-label="Koszyk">
              <SVGComponentCart />
            </NavLink>
          </div>
        </div>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
