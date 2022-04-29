import ScootersCatalogItem from "../ScootersCatalogItem/ScootersCatalogItem";
import "./ScootersCatalogList.scss";

const ScootersList = (props) => {
  const scooters = props.scooters.map((scooter) => (
    <ScootersCatalogItem
      key={scooter._id}
      id={scooter._id}
      name={scooter.name}
      price={scooter.price}
      colors={scooter.color}
      rate={scooter.rate}
      openSnackBar={props.openSnackBar}
    />
  ));
  return <div className="scooters">{scooters}</div>;
};

export default ScootersList;
