import { useState, useEffect } from "react";
import ScootersCatalogList from "./components/ScootersCatalogList/ScootersCatalogList";
import ScootersCatalogFilter from "./components/ScootersCatalogFilter/ScootersCatalogFilter";
import { Snackbar, IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/httpHook";

import "./CatalogPage.scss";

const CatalogPage = () => {
  const [scooters, setScooters] = useState([]);
  const [open, setOpen] = useState(false);
  const { sendRequest } = useHttpClient();
  const history = useHistory();

  useEffect(() => {
    async function getScooters() {
      const url = "http://localhost:4000/scooters";
      const response = await sendRequest(url);
      setScooters(response);
    }
    getScooters();
  }, [sendRequest]);

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

  const filterScooters = async (queryString) => {
    history.push({
      search: queryString,
    });
    let url = "http://localhost:4000/scooters";
    if (queryString) {
      url = url.concat("?", queryString);
    }
    const response = await sendRequest(url);
    setScooters(response);
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
