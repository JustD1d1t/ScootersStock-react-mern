import { DeliveryMethodsList } from "../DeliveryMethodsList/DeliveryMethodsList.jsx";
import Button from "../../../../../shared/components/Button/Button.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./DeliveryForm";
import formStyles from "../../../SummaryForm.module.scss";
import styles from "./DeliveryForm.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart.js";

export const DeliveryForm = ({ dispatchSummary, goToTheTop }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    dispatchSummary({ type: "SHOW_PAYMENT_METHODS" });
    goToTheTop();
    dispatch(cartActions.setDeliveryMethod(data));
  };

  const backToSummary = () => {
    dispatchSummary({ type: "SHOW_DELIVERY_DATA" });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.deliveryForm}>
      {errors.delivery && (
        <span className={formStyles.summaryForm__error}>
          Choose delivery method, please.
        </span>
      )}

      <DeliveryMethodsList register={register} />
      <div className={formStyles.summaryForm__buttons}>
        <Button type="button" inverse onClick={backToSummary}>
          Back to the summary form
        </Button>
        <Button type="submit">Go to the payment</Button>
      </div>
    </form>
  );
};
