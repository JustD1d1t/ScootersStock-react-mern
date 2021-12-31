import React from "react";

import ScooterItem from "../ScooterItem/ScooterItem";

import "./ScootersList.scss";

import GP125ACGP from "../../../../static/img/scooters/GP-125-ACGP.png";
import GP300LC from "../../../../static/img/scooters/GP-300-LC.png";
import GT50AC from "../../../../static/img/scooters/GT-50-AC.png";

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
  const scooters = DUMMY_SCOOTERS_MAIN.map((scooter, id) => (
    <ScooterItem
      key={id}
      name={scooter.name}
      img={scooter.img}
      description={scooter.description}
    />
  ));
  return <div className="scooters__container">{scooters}</div>;
};

export default ScooterList;
