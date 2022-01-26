import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import Button from "../../shared/components/Button/Button";
import "./CartPage.scss";

const CartPage = (props) => {
  const scooters = useSelector((state) => state.cart.items);
  const scooterItems = scooters.map((scooter) => (
    <CartItem key={scooter.id} scooter={scooter}></CartItem>
  ));
  let totalPrice = 0;
  scooters.forEach((item) => {
    totalPrice += Math.round(item.totalPrice * 100) / 100;
  });

  return (
    <section className="cart">
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
              <p className="cart__price">{totalPrice} zł</p>
              <Button>Buy</Button>
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
