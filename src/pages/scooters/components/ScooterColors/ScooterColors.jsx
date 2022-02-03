import styles from "./ScooterColors.module.scss";

const ScooterColors = (props) => {
  return (
    <div className={styles.scooters__colors}>
      {props.colors.map((color, id) => (
        <div
          key={id}
          className="scooters__color"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ScooterColors;
