import styles from "./PaymentMethod.module.scss";
export const PaymentMethod = ({ method, register, name }) => {
  return (
    <div className={styles.deliveryMethod}>
      <label htmlFor={method.name}>
        <input
          type="radio"
          id={method.name}
          value={method.name}
          name={name}
          {...register(name)}
        />
        <div className={styles.deliveryMethod__image}>
          <img src={method.image} alt="" />
        </div>
      </label>
    </div>
  );
};
