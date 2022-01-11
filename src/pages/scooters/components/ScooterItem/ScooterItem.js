import "./ScooterItem.scss";
import { Link } from "react-router-dom";
import Button from "../../../../shared/components/Button/Button";

import SVGComponentStar from "../../../../shared/components/svgComponents/SVGComponentStar";

const ScooterItem = (props) => {
  let scooter = props.scooter;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="scooter-item">
      <div className="scooter-item__image">
        <img src={scooter.image} alt="" />
      </div>
      <div className="scooter-item__details">
        <div className="scooter-item__name">
          <h1>{scooter.name}</h1>
          <p>{scooter.price}</p>
        </div>
        <div className="scooter-item__rate">
          <SVGComponentStar />
          <SVGComponentStar />
          <SVGComponentStar />
          <SVGComponentStar />
          <SVGComponentStar />
          <span className="scooters__rate-votes">({scooter.rate})</span>
        </div>
        <div className="scooter-item__colors">
          {scooter.colors.map((color, id) => (
            <div
              key={id}
              className="scooter-item__color"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <p className="scooter-item__description">{scooter.description}</p>
        <button
          className="scooter-item__scroll-to"
          onClick={() => {
            scrollTo("specification");
          }}
        >
          Specifications
        </button>
        <button
          className="scooter-item__scroll-to"
          onClick={() => {
            scrollTo("shipping");
          }}
        >
          Shipping Rates
        </button>
        <Button type="button" size="small">
          Add to Cart
        </Button>
      </div>
      <div className="scooter-item__section-title">
        <h2 id="specification">Specifications</h2>
      </div>
      <div className="scooter-item__specification-item scooter-item__specification-item--title">
        <span>Engine</span>
        <span>Top Speed</span>
        <span>Delivery date</span>
        <span>Wheel size</span>
      </div>
      <div className="scooter-item__specification-item scooter-item__specification-item--value">
        <span>{scooter["Engine Capacity"]}</span>
        <span>{scooter["Top Speed"]}</span>
        <span>{scooter["Delivery Date"][3].time} approx.</span>
        <span>{scooter["Wheel size"]}</span>
      </div>
      <div className="scooter-item__section-title">
        <h2 id="shipping">Shipping rates</h2>
      </div>
      <table class="scooter-item__shippings">
        <tr>
          {scooter["Delivery Date"].map((delivery) => (
            <th>{delivery.country}</th>
          ))}
        </tr>
        <tr>
          {scooter["Delivery Date"].map((delivery) => (
            <td>{delivery.time}</td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default ScooterItem;
