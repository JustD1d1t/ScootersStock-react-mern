import styles from "./SummaryItem.module.scss";
import ScooterRate from "../../../../scooters/components/ScooterRate/ScooterRate";
import ScooterColors from "../../../../scooters/components/ScooterColors/ScooterColors";

const SummaryItem = ({ scooter, index }) => {
  return (
    <div className={styles.summaryItem}>
      <div className={styles.summaryItem__top}>
        <p>{index + 1} position</p>
        <p>{scooter.price} zł</p>
      </div>
      <div className={styles.summaryItem__details}>
        <div className={styles.summaryItem__description}>
          <p className={styles.summaryItem__title}>{scooter.title}</p>
          <ScooterRate rate={scooter.rate} />
          <ScooterColors colors={scooter.colors} />
        </div>
        <div className={styles.summaryItem__image}>
          <img src={scooter.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
