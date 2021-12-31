import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../../static/img/LogoScooters.png";

import Button from "../Button/Button";
import SVGComponentFacebook from "../svgComponents/SVGComponentFacebook";
import SVGComponentInstagram from "../svgComponents/SVGComponentInstagram";
import SVGComponentTelegram from "../svgComponents/SVGComponentTelegram";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__links">
          <Link to="/">Features</Link>
          <Link to="/">Featured artists</Link>
          <Link to="/">Live share</Link>
          <Link to="/">The Portal</Link>
          <Link to="/">Video record</Link>
          <Link to="/">Live events</Link>
        </div>
        <div className="footer__buttons">
          <Button type="button" size="xsmall">
            Register
          </Button>
          <Button inverse type="button" size="xsmall">
            Log in
          </Button>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © ScootersStock, Inc. 2021. We love our users!
        </p>
        <div className="footer__socials">
          <p>Follow us:</p>
          <SVGComponentInstagram />
          <SVGComponentFacebook />
          <SVGComponentTelegram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
