import { useState } from "react";

import "./ScooterItem.scss";
import Button from "../../../../shared/components/Button/Button";
import { cartActions } from "../../../../store/cart";
import { useDispatch } from "react-redux";
import { Snackbar, IconButton } from "@mui/material";

import ScooterRate from "../ScooterRate/ScooterRate";
import ScooterColors from "../ScooterColors/ScooterColors";

const ScooterItem = ({ scooter }) => {
  const dispatch = useDispatch();
  const [scooterColor, setScooterColor] = useState(0);
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

  const changeScooterVariant = (id) => {
    setScooterColor(parseInt(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: scooter.id,
        title: scooter.name,
        price: Math.round(scooter.price * 100) / 100,
        image: scooter.color[scooterColor].url,
        rate: scooter.rate,
        color: scooter.color[scooterColor].color,
      })
    );
    openSnackBar();
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Added to cart"
        action={action}
      />
      <div className="scooter-item">
        <div className="scooter-item__image">
          <img src={scooter?.color[scooterColor].url} alt="" />
        </div>
        <div className="scooter-item__details">
          <div className="scooter-item__name">
            <h1>{scooter?.name}</h1>
            <p>{scooter?.price}</p>
          </div>
          <ScooterColors
            colors={scooter?.color}
            changeScooterVariant={changeScooterVariant}
          />
          <ScooterRate rate={scooter?.rate} />
          <p className="scooter-item__description">{scooter?.description}</p>
          <button
            className="scooter-item__scroll-to"
            onClick={() => {
              scrollTo("specification");
            }}
          >
            Specifications
          </button>
          <Button type="button" size="small" onClick={addItemHandler}>
            Add to Cart
          </Button>
        </div>
        <div className="scooter-item__section-title">
          <h2 id="specification">Specifications</h2>
        </div>
        <div className="scooter-item__specification-item scooter-item__specification-item--title">
          <span>Engine</span>
          <span>Top Speed</span>
          <span>Wheel size</span>
        </div>
        <div className="scooter-item__specification-item scooter-item__specification-item--value">
          <span>{scooter?.engineCapacity}</span>
          <span>{scooter?.topSpeed}</span>
          <span>{scooter?.wheelSize}</span>
        </div>
      </div>
    </>
  );
};

export default ScooterItem;
