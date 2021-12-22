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
            <NavLink to="/" exact>
              Catalog
            </NavLink>
            <NavLink to="/">Contacts</NavLink>
            <NavLink to="/">About us</NavLink>
          </div>

          <div className="side-drawer__bottom">
            <a href="tel:+48730795875">
              <SVGComponentPhone />
            </a>
            <a href="/">
              <SVGComponentUser />
            </a>
            <a href="/">
              <SVGComponentHeart />
            </a>
            <a href="/">
              <SVGComponentCart />
            </a>
          </div>
        </div>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
