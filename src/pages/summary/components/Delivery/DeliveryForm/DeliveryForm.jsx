import { DeliveryMethodsList } from "../DeliveryMethodsList/DeliveryMethodsList.jsx";
import Button from "../../../../../shared/components/Button/Button.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./DeliveryForm";
import formStyles from "../../../SummaryForm.module.scss";
import styles from "./DeliveryForm.module.scss";
export const DeliveryForm = ({ dispatch, goToTheTop }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    dispatch({ type: "SHOW_PAYMENT_METHODS" });
    goToTheTop();
  };

  const backToSummary = () => {
    dispatch({ type: "SHOW_DELIVERY_DATA" });
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
