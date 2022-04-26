import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart";

import "./ScootersCatalogItem.scss";

import SVGComponentHeart from "../../../../shared/components/svgComponents/SVGComponentHeart";
import SVGComponentCart from "../../../../shared/components/svgComponents/SVGComponentCart";
import ScooterRate from "../ScooterRate/ScooterRate";
import ScooterColors from "../ScooterColors/ScooterColors";
const ScootersCatalogItem = (props) => {
  const [scooterColor, setScooterColor] = useState(0);
  const dispatch = useDispatch();
  const image = useRef();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.name,
        price: Math.round(props.price * 100) / 100,
        image: props.colors[scooterColor].url,
        rate: props.rate,
        color: props.colors[scooterColor].color,
      })
    );
    props.openSnackBar();
  };

  const changeScooterVariant = (id) => {
    setScooterColor(parseInt(id));
  };

  return (
    <div className="scooters__item">
      <div className="scooters__favorite">
        <SVGComponentHeart />
      </div>
      <Link to={`/scooters/${props.id}`}>
        <div className="scooters__image">
          <img ref={image} src={props.colors[scooterColor].url} alt="" />
        </div>
      </Link>
      <div className="scooters__details">
        <div>
          <p className="scooters__name">{props.name}</p>
        </div>
        <button
          type="button"
          className="scooters__add-to-cart"
          onClick={addItemHandler}
        >
          <SVGComponentCart />
        </button>
        <ScooterColors
          colors={props.colors}
          changeScooterVariant={changeScooterVariant}
        />
        <p className="scooters__price">{props.price} zł</p>
      </div>
    </div>
  );
};

export default ScootersCatalogItem;
