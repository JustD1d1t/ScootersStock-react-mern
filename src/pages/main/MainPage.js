import React from "react";

import Banner from "./components/Banner/Banner";
import ScooterList from "./components/ScooterList/ScooterList";

import Box from "../../static/img/about/Box.png";
import Card from "../../static/img/about/Card.png";
import Cart from "../../static/img/about/Cart.png";
import Clock from "../../static/img/about/Clock.png";
import Kid from "../../static/img/about/Kid.png";
import Map from "../../static/img/about/Map.png";
import Percent from "../../static/img/about/Box.png";
import Van from "../../static/img/about/Van.png";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <Banner />
      <div className="about">
        <h2 className="about__title">About our company</h2>
        <h3 className="about__subtitle">You're in good company</h3>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin duis
          eget aliquam vel, sed nibh nunc, rhoncus dictum. Leo urna, eu faucibus
          mi et. Enim praesent vulputate sit vel sed turpis iaculis dolor
          luctus. Suscipit ac morbi commodo pellentesque elementum non et sapien
          nascetur.
        </p>
        <div className="about__icons">
          <div className="about__icon">
            <img src={Map} alt="" />
          </div>
          <div className="about__icon">
            <img src={Kid} alt="" />
          </div>
          <div className="about__icon">
            <img src={Van} alt="" />
          </div>
          <div className="about__icon">
            <img src={Clock} alt="" />
          </div>
          <div className="about__icon">
            <img src={Cart} alt="" />
          </div>
          <div className="about__icon">
            <img src={Percent} alt="" />
          </div>
          <div className="about__icon">
            <img src={Card} alt="" />
          </div>
          <div className="about__icon">
            <img src={Box} alt="" />
          </div>
        </div>
      </div>
      <ScooterList />
    </>
  );
};

export default MainPage;
