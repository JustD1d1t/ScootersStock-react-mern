import { useState } from "react";
import ScootersCatalogList from "./components/ScootersCatalogList/ScootersCatalogList";
import ScootersCatalogFilter from "./components/ScootersCatalogFilter/ScootersCatalogFilter";

import "./CatalogPage.scss";
import { DUMMY_SCOOTERS } from "./scooters.js";

const filters = {
  Manufacturer: [],
  Country: [],
  "Power Type": [],
  "Engine Capacity": [],
  "Wheel size": [],
  "Seat available": [],
};

const CatalogPage = () => {
  const [scooters, setScooters] = useState(DUMMY_SCOOTERS);

  const filterScooters = (groupName, filterName) => {
    let currentFilters = { ...filters };
    let filterIndex = currentFilters[groupName].findIndex(
      (filter) => filter === filterName
    );
    if (filterIndex === -1) {
      filters[groupName].push(filterName);
    } else {
      filters[groupName].splice(filterIndex, 1);
    }
    let filteredScooters = [...DUMMY_SCOOTERS];
    for (const key in filters) {
      if (filters[key].length) {
        filteredScooters = filteredScooters.filter((scooter) =>
          currentFilters[key].some((filter) => filter === scooter[key])
        );
      }
    }
    setScooters(filteredScooters);
  };

  return (
    <section className="catalog">
      <ScootersCatalogFilter filterScooters={filterScooters} />
      <ScootersCatalogList scooters={scooters} />
    </section>
  );
};

export default CatalogPage;
