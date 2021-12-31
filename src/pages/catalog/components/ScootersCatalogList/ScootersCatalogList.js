import ScootersCatalogItem from "../ScootersCatalogItem/ScootersCatalogItem";

import orange from "../../../../static/img/scooters/catalog/orange.png";
import black from "../../../../static/img/scooters/catalog/black.png";
import blueWhiteCustom from "../../../../static/img/scooters/catalog/blue-white-custom.png";
import green2 from "../../../../static/img/scooters/catalog/green-2.png";
import green from "../../../../static/img/scooters/catalog/green.png";
import orange2 from "../../../../static/img/scooters/catalog/orange-2.png";
import redWhite from "../../../../static/img/scooters/catalog/red-white.png";
import redIvory125cc from "../../../../static/img/scooters/catalog/red-ivory-125cc.png";
import RoyalAlloyGP200LCRed from "../../../../static/img/scooters/catalog/Royal-Alloy-GP-200-LC-Red.png";
import UltraBlueIvory125cc from "../../../../static/img/scooters/catalog/Ultra-Blue-Ivory-125cc.png";
import White2 from "../../../../static/img/scooters/catalog/White-2.png";
import White from "../../../../static/img/scooters/catalog/White.png";

import "./ScootersCatalogList.scss";
const DUMMY_SCOOTERS = [
  {
    name: "GT 50 AC",
    price: "3455,99 zł",
    image: orange,
    colors: ["orange", "blue"],
    rate: 24,
  },
  {
    name: "ARS 770S",
    price: "5499 zł",
    image: black,
    colors: ["black", "blue"],
    rate: 10,
  },
  {
    name: "HY 888Y",
    price: "3799 zł",
    image: blueWhiteCustom,
    colors: ["blue", "white"],
    rate: 16,
  },
  {
    name: "TG 300S LC",
    price: "3455,99 zł",
    image: green2,
    colors: ["green", "orange"],
    rate: 12,
  },
  {
    name: "TG 125S LC",
    price: "9077 zł",
    image: green,
    colors: ["green", "blue"],
    rate: 18,
  },
  {
    name: "GP 125 LC",
    price: "9899 zł",
    image: orange2,
    colors: ["orange", "blue"],
    rate: 10,
  },
  {
    name: "GP 200 LC",
    price: "9998,99 zł",
    image: redWhite,
    colors: ["red", "white"],
    rate: 11,
  },
  {
    name: "Custom Paint",
    price: "11999 zł",
    image: redIvory125cc,
    colors: ["red", "blue"],
    rate: 17,
  },
  {
    name: "GT 125i AC",
    price: "3699 zł",
    image: RoyalAlloyGP200LCRed,
    colors: ["orange", "green"],
    rate: 19,
  },
  {
    name: "GT 150 AC",
    price: "6529,99 zł",
    image: UltraBlueIvory125cc,
    colors: ["blue", "pink"],
    rate: 23,
  },
  {
    name: "GP 125 HX",
    price: "6199,99 zł",
    image: White2,
    colors: ["purple", "blue"],
    rate: 17,
  },
  {
    name: "GT 50 WP",
    price: "3699,99 zł",
    image: White,
    colors: ["green", "blue"],
    rate: 13,
  },
];

const ScootersList = (props) => {
  const scooters = DUMMY_SCOOTERS.map((scooter, id) => (
    <ScootersCatalogItem
      key={id}
      name={scooter.name}
      price={scooter.price}
      image={scooter.image}
      colors={scooter.colors}
      rate={scooter.rate}
    />
  ));
  return <div className="scooters">{scooters}</div>;
};

export default ScootersList;
