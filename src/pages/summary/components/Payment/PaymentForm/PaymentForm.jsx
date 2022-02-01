import { PaymentMethodsList } from "../PaymentMethodsList/PaymentMethodsList.jsx";
import Button from "../../../../../shared/components/Button/Button.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./PaymentForm";
import formStyles from "../../../SummaryForm.module.scss";
import styles from "./PaymentForm.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart";

export const PaymentForm = ({ dispatch, goToTheTop }) => {
  const dispatchState = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    console.log(data);
    dispatch({ type: "SHOW_SUCCESS" });
    goToTheTop();
    dispatchState(cartActions.clearCart());
  };

  const backToDelivery = () => {
    dispatch({ type: "SHOW_DELIVERY_METHODS" });
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.deliveryForm}>
      {errors.payment && (
        <span className={formStyles.summaryForm__error}>
          Choose payment method, please.
        </span>
      )}

      <PaymentMethodsList register={register} />
      <div className={formStyles.summaryForm__buttons}>
        <Button type="button" inverse onClick={backToDelivery}>
          Back to the summary form
        </Button>
        <Button type="submit">Pay</Button>
      </div>
    </form>
  );
};
