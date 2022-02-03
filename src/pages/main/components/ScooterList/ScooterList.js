import React from "react";

import ScooterItem from "../ScooterItem/ScooterItem";

import "./ScootersList.scss";

import orange2 from "../../../../static/img/scooters/catalog/orange-2.png";
import green2 from "../../../../static/img/scooters/catalog/green-2.png";
import orange from "../../../../static/img/scooters/catalog/orange.png";

const DUMMY_SCOOTERS_MAIN = [
  {
    id: 6,
    name: "GP 125 LC",
    img: orange2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
  },
  {
    id: 4,
    name: "TG 300S LC",
    img: green2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
  },
  {
    id: 1,
    name: "GT 50 AC",
    img: orange,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
  },
];

const ScooterList = (props) => {
  const scooters = DUMMY_SCOOTERS_MAIN.map((scooter) => (
    <ScooterItem
      key={scooter.id}
      name={scooter.name}
      img={scooter.img}
      description={scooter.description}
      id={scooter.id}
    />
  ));
  return <div className="scooters__container">{scooters}</div>;
};

export default ScooterList;
