import ScootersCatalogItem from "../ScootersCatalogItem/ScootersCatalogItem";
import "./ScootersCatalogList.scss";

const ScootersList = (props) => {
  const scooters = props.scooters.map((scooter) => (
    <ScootersCatalogItem
      key={scooter.id}
      id={scooter.id}
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
