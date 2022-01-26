import "./ScooterItem.scss";
import Button from "../../../../shared/components/Button/Button";
import { cartActions } from "../../../../store/cart";
import { useDispatch } from "react-redux";

import ScooterRate from "../ScooterRate/ScooterRate";
import ScooterColors from "../ScooterColors/ScooterColors";

const ScooterItem = (props) => {
  let scooter = props.scooter;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: scooter.id,
        title: scooter.name,
        price: Math.round(scooter.price * 100) / 100,
        image: scooter.image,
        rate: scooter.rate,
        colors: scooter.colors,
      })
    );
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="scooter-item">
        <div className="scooter-item__image">
          <img src={scooter.image} alt="" />
        </div>
        <div className="scooter-item__details">
          <div className="scooter-item__name">
            <h1>{scooter.name}</h1>
            <p>{scooter.price}</p>
          </div>
          <ScooterRate rate={scooter.rate} />
          <ScooterColors colors={scooter.colors} />
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
        <div className="scooter-item__shippings">
          <table>
            <thead>
              <tr>
                {scooter["Delivery Date"].map((delivery, id) => (
                  <th key={id}>{delivery.country}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {scooter["Delivery Date"].map((delivery, id) => (
                  <td key={id}>{delivery.time}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ScooterItem;
