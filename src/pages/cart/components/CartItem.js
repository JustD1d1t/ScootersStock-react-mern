import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import "./CartItem.scss";
import ScooterColors from "../../scooters/components/ScooterColors/ScooterColors";
import ScooterRate from "../../scooters/components/ScooterRate/ScooterRate";

const CartItem = ({ scooter, openSnackBar }) => {
  const dispatch = useDispatch();
  const handleAmountItem = (type) => {
    dispatch(
      cartActions.updateCart({
        id: scooter.id,
        color: scooter.color,
        type,
      })
    );
    if (type === "ADDITION") {
      openSnackBar("Added to cart");
    } else {
      openSnackBar("Removed from cart");
    }
  };
  const price = Math.round(scooter.totalPrice * 100) / 100;

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={scooter.image} alt={scooter.title} />
      </div>
      <div className="cart-item__details">
        <h2 className="cart-item__title">{scooter.title}</h2>,
        <ScooterRate rate={scooter.rate} />
        {/* <ScooterColors colors={scooter.colors} /> */}
      </div>
      <div className="cart-item__summary">
        <div className="cart-item__amount-container">
          <button
            className="cart-item__amount-button"
            onClick={() => handleAmountItem("SUBSTRACTION")}
          >
            -
          </button>
          <p className="cart-item__amount">{scooter.quantity}</p>
          <button
            className="cart-item__amount-button"
            onClick={() => handleAmountItem("ADDITION")}
          >
            +
          </button>
        </div>
        <p className="cart-item__price">{price} zł</p>
      </div>
    </div>
  );
};

export default CartItem;
