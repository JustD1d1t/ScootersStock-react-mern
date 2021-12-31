import React from "react";

import Button from "../../../../shared/components/Button/Button";
import banerLogo from "../../../../static/img/banner_scooters.png";
import banerLogoMobile from "../../../../static/img/banner_scooters--mobile.png";

import "./Banner.scss";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner__details">
        <h2 className="banner__title">Touch the vintage</h2>
        <p className="banner__content">
          Online vintage and electric scooters shop
        </p>
        <Button type="button">Shop now</Button>
      </div>
      <div className="banner__image">
        <picture>
          <source srcSet={banerLogo} media="(min-width: 640px)" />
          <img src={banerLogoMobile} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Banner;
