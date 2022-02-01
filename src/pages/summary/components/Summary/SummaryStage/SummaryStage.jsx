import styles from "./SummaryStage.module.scss";
const SummaryStage = ({ active }) => {
  return (
    <div className={styles.summaryStage}>
      {active && <div className={styles.summaryStage__filling}></div>}
    </div>
  );
};

export default SummaryStage;
