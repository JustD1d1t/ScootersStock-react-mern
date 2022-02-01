import styles from "./DeliveryMethod.module.scss";

export const DeliveryMethod = ({ method, register, name }) => {
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
        <div className={styles.deliveryMethod__details}>
          <div className={styles.deliveryMethod__image}>
            <img src={method.image} alt="" />
          </div>
          <p>{method.price} zł</p>
          <p>{method.deliveryTime}</p>
        </div>
      </label>
    </div>
  );
};
