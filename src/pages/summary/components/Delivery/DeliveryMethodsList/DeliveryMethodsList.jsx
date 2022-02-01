import { DELIVERY_METHODS } from "./DeliveryMethodsList";
import { DeliveryMethod } from "../DeliveryMethod/DeliveryMethod";
import styles from "./DeliveryMethodsList.module.scss";
export const DeliveryMethodsList = ({ register }) => {
  return (
    <div className={styles.deliveryMethodsList}>
      {DELIVERY_METHODS.map((method) => (
        <DeliveryMethod
          key={method.id}
          method={method}
          register={register}
          name="delivery"
        />
      ))}
    </div>
  );
};
