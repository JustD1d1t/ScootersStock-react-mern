import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart";

import "./ScootersCatalogItem.scss";

import SVGComponentHeart from "../../../../shared/components/svgComponents/SVGComponentHeart";
import SVGComponentCart from "../../../../shared/components/svgComponents/SVGComponentCart";
import ScooterRate from "../ScooterRate/ScooterRate";
import ScooterColors from "../ScooterColors/ScooterColors";
const ScootersCatalogItem = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.name,
        price: Math.round(props.price * 100) / 100,
        image: props.image,
        rate: props.rate,
        colors: props.colors,
      })
    );
  };
  return (
    <div className="scooters__item">
      <div className="scooters__favorite">
        <SVGComponentHeart />
      </div>
      <Link to={`/scooters/${props.id}`}>
        <div className="scooters__image">
          <img src={props.image} alt="" />
        </div>
      </Link>
      <div className="scooters__details">
        <div>
          <p className="scooters__name">{props.name}</p>
          <ScooterRate rate={props.rate} />
        </div>
        <button
          type="button"
          className="scooters__add-to-cart"
          onClick={addItemHandler}
        >
          <SVGComponentCart />
        </button>
        <ScooterColors colors={props.colors} />
        <p className="scooters__price">{props.price} zł</p>
      </div>
    </div>
  );
};

export default ScootersCatalogItem;
