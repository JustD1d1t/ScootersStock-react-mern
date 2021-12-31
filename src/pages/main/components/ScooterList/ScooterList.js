import React from "react";

import ScooterItem from "../ScooterItem/ScooterItem";

import "./ScootersList.scss";

import GP125ACGP from "../../../../static/img/scooters/GP-125-ACGP.png";
import GP300LC from "../../../../static/img/scooters/GP-300-LC.png";
import GT50AC from "../../../../static/img/scooters/GT-50-AC.png";

const DUMMY_SCOOTERS = [
  {
    name: "GT 50 AC",
    price: "3455,99 zł",
    image: "orange.png",
    colors: ["orange", "blue"],
  },
  {
    name: "ARS 770S",
    price: "5499 zł",
    image: "black.png",
    colors: ["black", "blue"],
  },
  {
    name: "HY 888Y",
    price: "3799 zł",
    image: "blue-white-custom.png",
    colors: ["blue", "white"],
  },
  {
    name: "TG 300S LC",
    price: "3455,99 zł",
    image: "green-2.png",
    colors: ["green", "orange"],
  },
  {
    name: "TG 125S LC",
    price: "9077 zł",
    image: "green.png",
    colors: ["green", "blue"],
  },
  {
    name: "GP 125 LC",
    price: "9899 zł",
    image: "orange-2.png",
    colors: ["orange", "blue"],
  },
  {
    name: "GP 200 LC",
    price: "9998,99 zł",
    image: "red-white.png",
    colors: ["red", "white"],
  },
  {
    name: "Custom Paint",
    price: "11999 zł",
    image: "red-ivory-125cc.png",
    colors: ["red", "blue"],
  },
  {
    name: "GT 125i AC",
    price: "3699 zł",
    image: "Royal-Alloy-GP-200-LC-Red.png",
    colors: ["orange", "green"],
  },
  {
    name: "GT 150 AC",
    price: "6529,99 zł",
    image: "Ultra-Blue-Ivory-125cc.png",
    colors: ["blue", "pink"],
  },
  {
    name: "GP 125 HX",
    price: "6199,99 zł",
    image: "White-2.png",
    colors: ["white", "blue"],
  },
  {
    name: "GT 50 WP",
    price: "3699,99 zł",
    image: "White.png",
    colors: ["white", "blue"],
  },
];

const DUMMY_SCOOTERS_MAIN = [
  {
    name: "GP 125 ACGP",
    img: GP125ACGP,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
  },
  {
    name: "GP 300 LC",
    img: GP300LC,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
  },
  {
    name: "GT 50 AC",
    img: GT50AC,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
  },
];

const ScooterList = (props) => {
  const scooters = DUMMY_SCOOTERS_MAIN.map((scooter) => (
    <ScooterItem
      name={scooter.name}
      img={scooter.img}
      description={scooter.description}
    />
  ));
  return <div className="scooters__container">{scooters}</div>;
};

export default ScooterList;
