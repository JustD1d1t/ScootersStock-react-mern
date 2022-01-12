import { useReducer } from "react";
import ScootersCatalogList from "./components/ScootersCatalogList/ScootersCatalogList";
import ScootersCatalogFilter from "./components/ScootersCatalogFilter/ScootersCatalogFilter";

import "./CatalogPage.scss";
import { DUMMY_SCOOTERS } from "./scooters.js";

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
