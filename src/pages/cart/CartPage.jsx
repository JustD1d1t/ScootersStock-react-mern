import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "./components/CartItem";
import Button from "../../shared/components/Button/Button";
import { Snackbar, IconButton } from "@mui/material";
import AuthContext from "../../context/auth/authContext";
import "./CartPage.scss";

const CartPage = (props) => {
  const scooters = useSelector((state) => state.cart.items);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  let totalPrice = 0;
  scooters.forEach((item) => {
    totalPrice += item.totalPrice;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const openSnackBar = (text) => {
    setOpen(true);
    setText(text);
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

  const scooterItems = scooters.map((scooter) => (
    <CartItem
      key={`${scooter.id}_${scooter.color}`}
      scooter={scooter}
      openSnackBar={openSnackBar}
    ></CartItem>
  ));

  const checkIsLoggedIn = () => {
    if (authContext.isLoggedIn) {
      history.push("/summary");
    } else history.push("/auth");
  };

  return (
    <section className="cart">
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={text}
        action={action}
      />
      {scooters.length ? (
        <>
          <div className="cart__items">{scooterItems}</div>
          <div className="cart__summary-container">
            <div>
              <Button inverse to="/scooters">
                Continue shopping
              </Button>
            </div>
            <div className="cart__summary">
              <p className="cart__price">
                {Math.round(totalPrice * 100) / 100} zł
              </p>
              <Button onClick={checkIsLoggedIn}>Buy</Button>
            </div>
          </div>
        </>
      ) : (
        <h2>Twój koszyk jest pusty</h2>
      )}
    </section>
  );
};

export default CartPage;
