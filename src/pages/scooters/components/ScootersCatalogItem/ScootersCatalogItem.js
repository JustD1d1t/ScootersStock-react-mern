import { Link } from "react-router-dom";

import "./ScootersCatalogItem.scss";

import SVGComponentHeart from "../../../../shared/components/svgComponents/SVGComponentHeart";
import SVGComponentStar from "../../../../shared/components/svgComponents/SVGComponentStar";
import SVGComponentCart from "../../../../shared/components/svgComponents/SVGComponentCart";
const ScootersCatalogItem = (props) => {
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
          <div className="scooters__rate">
            <SVGComponentStar />
            <SVGComponentStar />
            <SVGComponentStar />
            <SVGComponentStar />
            <SVGComponentStar />
            <span className="scooters__rate-votes">({props.rate})</span>
          </div>
        </div>
        <button type="button" className="scooters__add-to-cart">
          <SVGComponentCart />
        </button>
        <div className="scooters__colors">
          {props.colors.map((color, id) => (
            <div
              key={id}
              className="scooters__color"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <div className="scooters__price">{props.price}</div>
      </div>
    </div>
  );
};

export default ScootersCatalogItem;
