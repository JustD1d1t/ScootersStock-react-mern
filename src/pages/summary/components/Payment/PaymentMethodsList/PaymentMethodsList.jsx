import { PAYMENT_METHODS } from "./PaymentMethodsList";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod.jsx";
import styles from "./PaymentMethodsList.module.scss";
export const PaymentMethodsList = ({ register }) => {
  return (
    <div className={styles.deliveryMethodsList}>
      {PAYMENT_METHODS.map((method) => (
        <PaymentMethod
          key={method.id}
          method={method}
          register={register}
          name="payment"
        />
      ))}
    </div>
  );
};
