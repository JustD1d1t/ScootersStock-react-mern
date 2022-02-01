import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import "./SideDrawer.scss";

const SideDrawer = (props) => {
  const hideDrawer = () => {
    props.setSidedrawerVisible((prevState) => !prevState);
    props.handleHamburger();
  };
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
            <NavLink to="/scooters" exact onClick={hideDrawer}>
              Catalog
            </NavLink>
            <NavLink to="/" onClick={hideDrawer}>
              Contacts
            </NavLink>
            <NavLink to="/" onClick={hideDrawer}>
              About us
            </NavLink>
          </div>

          <div className="side-drawer__bottom">
            <a href="tel:+48730795875" aria-label="Kontakt telefoniczny">
              <LocalPhoneIcon />
            </a>
            <NavLink to="/" aria-label="Konto użytkownika" onClick={hideDrawer}>
              <PersonIcon />
            </NavLink>
            <NavLink to="/" aria-label="Ulubione" onClick={hideDrawer}>
              <FavoriteBorderIcon />
            </NavLink>
            <NavLink to="/cart" aria-label="Koszyk" onClick={hideDrawer}>
              <ShoppingCartIcon />
            </NavLink>
          </div>
        </div>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
