import SVGComponentStar from "../../../../shared/components/svgComponents/SVGComponentStar";
import styles from "./ScooterRate.module.scss";
const ScooterRate = (props) => {
  return (
    <div className={styles.scooters__rate}>
      <SVGComponentStar />
      <SVGComponentStar />
      <SVGComponentStar />
      <SVGComponentStar />
      <SVGComponentStar />
      <span className="scooters__rate-votes">({props.rate})</span>
    </div>
  );
};

export default ScooterRate;
