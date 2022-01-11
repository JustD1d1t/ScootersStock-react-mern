import ScootersCatalogItem from "../ScootersCatalogItem/ScootersCatalogItem";
import "./ScootersCatalogList.scss";
import { useState } from "react";

const ScootersList = (props) => {
  const [status, setStatus] = useState("active");
  const toInActive = () => setStatus("inActive");
  const toActive = () => setStatus("active");
  const scooters = props.scooters.map((scooter, id) => (
    <ScootersCatalogItem
      key={id}
      name={scooter.name}
      price={scooter.price}
      image={scooter.image}
      colors={scooter.colors}
      rate={scooter.rate}
    />
  ));
  return <div className="scooters">{scooters}</div>;
};

export default ScootersList;
