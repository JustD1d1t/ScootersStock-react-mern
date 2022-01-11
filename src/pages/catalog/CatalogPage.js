import { useReducer } from "react";
import ScootersCatalogList from "./components/ScootersCatalogList/ScootersCatalogList";
import ScootersCatalogFilter from "./components/ScootersCatalogFilter/ScootersCatalogFilter";

import "./CatalogPage.scss";

import orange from "../../static/img/scooters/catalog/orange.png";
import black from "../../static/img/scooters/catalog/black.png";
import blueWhiteCustom from "../../static/img/scooters/catalog/blue-white-custom.png";
import green2 from "../../static/img/scooters/catalog/green-2.png";
import green from "../../static/img/scooters/catalog/green.png";
import orange2 from "../../static/img/scooters/catalog/orange-2.png";
import redWhite from "../../static/img/scooters/catalog/red-white.png";
import redIvory125cc from "../../static/img/scooters/catalog/red-ivory-125cc.png";
import RoyalAlloyGP200LCRed from "../../static/img/scooters/catalog/Royal-Alloy-GP-200-LC-Red.png";
import UltraBlueIvory125cc from "../../static/img/scooters/catalog/Ultra-Blue-Ivory-125cc.png";
import White2 from "../../static/img/scooters/catalog/White-2.png";
import White from "../../static/img/scooters/catalog/White.png";

const DUMMY_SCOOTERS = [
  {
    name: "GT 50 AC",
    price: "3455,99 zł",
    image: orange,
    colors: ["orange", "blue"],
    rate: 24,
    Manufacturer: "Forte",
    Country: "Japan",
    "Power Type": "Petrol",
    "Engine Capacity": "50cm3",
    "Wheel size": "10 inches",
    "Seat available": "1 person",
  },
  {
    name: "ARS 770S",
    price: "5499 zł",
    image: black,
    colors: ["black", "blue"],
    rate: 10,
    Manufacturer: "Honda",
    Country: "China",
    "Power Type": "Electric",
    "Engine Capacity": "80cm3",
    "Wheel size": "12 inches",
    "Seat available": "2 person",
  },
  {
    name: "HY 888Y",
    price: "3799 zł",
    image: blueWhiteCustom,
    colors: ["blue", "white"],
    rate: 16,
    Manufacturer: "Moto Tech",
    Country: "Japan",
    "Power Type": "Petrol",
    "Engine Capacity": "100cm3",
    "Wheel size": "10 inches",
    "Seat available": "1 person",
  },
  {
    name: "TG 300S LC",
    price: "3455,99 zł",
    image: green2,
    colors: ["green", "orange"],
    rate: 12,
    Manufacturer: "Mustang",
    Country: "China",
    "Power Type": "Electric",
    "Engine Capacity": "125cm3",
    "Wheel size": "12 inches",
    "Seat available": "2 person",
  },
  {
    name: "TG 125S LC",
    price: "9077 zł",
    image: green,
    colors: ["green", "blue"],
    rate: 18,
    Manufacturer: "Spark",
    Country: "Japan",
    "Power Type": "Petrol",
    "Engine Capacity": "150cm3",
    "Wheel size": "10 inches",
    "Seat available": "1 person",
  },
  {
    name: "GP 125 LC",
    price: "9899 zł",
    image: orange2,
    colors: ["orange", "blue"],
    rate: 10,
    Manufacturer: "Suzuki",
    Country: "China",
    "Power Type": "Electric",
    "Engine Capacity": "50cm3",
    "Wheel size": "12 inches",
    "Seat available": "2 person",
  },
  {
    name: "GP 200 LC",
    price: "9998,99 zł",
    image: redWhite,
    colors: ["red", "white"],
    rate: 11,
    Manufacturer: "Viper",
    Country: "Japan",
    "Power Type": "Petrol",
    "Engine Capacity": "80cm3",
    "Wheel size": "10 inches",
    "Seat available": "1 person",
  },
  {
    name: "Custom Paint",
    price: "11999 zł",
    image: redIvory125cc,
    colors: ["red", "blue"],
    rate: 17,
    Manufacturer: "Yiben",
    Country: "China",
    "Power Type": "Electric",
    "Engine Capacity": "100cm3",
    "Wheel size": "12 inches",
    "Seat available": "2 person",
  },
  {
    name: "GT 125i AC",
    price: "3699 zł",
    image: RoyalAlloyGP200LCRed,
    colors: ["orange", "green"],
    rate: 19,
    Manufacturer: "Yamaha",
    Country: "Japan",
    "Power Type": "Petrol",
    "Engine Capacity": "125cm3",
    "Wheel size": "10 inches",
    "Seat available": "1 person",
  },
  {
    name: "GT 150 AC",
    price: "6529,99 zł",
    image: UltraBlueIvory125cc,
    colors: ["blue", "pink"],
    rate: 23,
    Manufacturer: "Forte",
    Country: "China",
    "Power Type": "Electric",
    "Engine Capacity": "150cm3",
    "Wheel size": "12 inches",
    "Seat available": "2 person",
  },
  {
    name: "GP 125 HX",
    price: "6199,99 zł",
    image: White2,
    colors: ["purple", "blue"],
    rate: 17,
    Manufacturer: "Honda",
    Country: "Japan",
    "Power Type": "Petrol",
    "Engine Capacity": "50cm3",
    "Wheel size": "10 inches",
    "Seat available": "1 person",
  },
  {
    name: "GT 50 WP",
    price: "3699,99 zł",
    image: White,
    colors: ["green", "blue"],
    rate: 13,
    Manufacturer: "Moto Tech",
    Country: "China",
    "Power Type": "Electric",
    "Engine Capacity": "80cm3",
    "Wheel size": "12 inches",
    "Seat available": "2 person",
  },
];

let scooters = DUMMY_SCOOTERS;

const scooterReducer = (currentState, action) => {
  switch (action.type) {
    case "FILTER":
      let filters = { ...currentState };
      let filterIndex = filters[action.group].findIndex(
        (filter) => filter === action.name
      );
      if (filterIndex === -1) {
        filters[action.group].push(action.name);
      } else {
        filters[action.group].splice(filterIndex, 1);
      }
      let filteredScooters = [...DUMMY_SCOOTERS];
      for (const key in filters) {
        if (filters[key].length) {
          filteredScooters = filteredScooters.filter((scooter) =>
            filters[key].some((filter) => filter === scooter[key])
          );
        }
      }
      scooters = filteredScooters;
      return filters;
    default:
      throw new Error("Should not get there!");
  }
};

const CatalogPage = () => {
  const [scooterState, dispatch] = useReducer(scooterReducer, {
    Manufacturer: [],
    Country: [],
    "Power Type": [],
    "Engine Capacity": [],
    "Wheel size": [],
    "Seat available": [],
  });
  return (
    <section className="catalog">
      <ScootersCatalogFilter filterScooters={dispatch} />
      <ScootersCatalogList scooters={scooters} />
    </section>
  );
};

export default CatalogPage;
