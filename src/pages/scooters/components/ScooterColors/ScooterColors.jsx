import styles from "./ScooterColors.module.scss";

const ScooterColors = ({ colors, changeScooterVariant }) => {
  return (
    <div className={styles.scooters__colors}>
      {colors?.map((color, id) => (
        <div
          key={id}
          className="scooters__color"
          style={{ backgroundColor: color.color }}
          onClick={() => changeScooterVariant(id)}
        ></div>
      ))}
    </div>
  );
};

export default ScooterColors;
