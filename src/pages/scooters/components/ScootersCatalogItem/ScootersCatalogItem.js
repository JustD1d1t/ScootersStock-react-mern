import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart";

import "./ScootersCatalogItem.scss";

import SVGComponentHeart from "../../../../shared/components/svgComponents/SVGComponentHeart";
import SVGComponentCart from "../../../../shared/components/svgComponents/SVGComponentCart";
import ScooterColors from "../ScooterColors/ScooterColors";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { config } from "../../../../utils/config";
import AuthContext from "../../../../context/auth/authContext";

const ScootersCatalogItem = (props) => {
  const [scooterColor, setScooterColor] = useState(0);
  const dispatch = useDispatch();
  const { sendRequest } = useHttpClient();
  const authCtx = useContext(AuthContext);
  console.log(props);

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

  const toggleFavouriteScooter = async () => {
    const data = {
      scooterId: props.id,
      userId: authCtx.userData.id,
    };
    console.log(data);
    const url = `${config.userUrl}/add-to-favourite`;
    const response = await sendRequest(url, "PATCH", JSON.stringify(data), {
      "Content-Type": "application/json",
    });
  };

  const changeScooterVariant = (id) => {
    setScooterColor(parseInt(id));
  };

  return (
    <div className="scooters__item">
      <button className="scooters__favorite" onClick={toggleFavouriteScooter}>
        <SVGComponentHeart />
      </button>
      <Link to={`/scooters/${props.id}`}>
        <div className="scooters__image">
          <img src={props.colors[scooterColor].url} alt="" />
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
