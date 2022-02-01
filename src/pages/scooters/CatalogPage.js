import { useState } from "react";
import ScootersCatalogList from "./components/ScootersCatalogList/ScootersCatalogList";
import ScootersCatalogFilter from "./components/ScootersCatalogFilter/ScootersCatalogFilter";
import { Snackbar, IconButton } from "@mui/material";

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
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const openSnackBar = () => {
    setOpen(true);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        X
      </IconButton>
    </>
  );

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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Added to cart"
        action={action}
      />
      <ScootersCatalogFilter filterScooters={filterScooters} />
      <ScootersCatalogList scooters={scooters} openSnackBar={openSnackBar} />
    </section>
  );
};

export default CatalogPage;
