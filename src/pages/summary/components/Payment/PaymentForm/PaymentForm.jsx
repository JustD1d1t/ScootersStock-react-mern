import { PaymentMethodsList } from "../PaymentMethodsList/PaymentMethodsList.jsx";
import Button from "../../../../../shared/components/Button/Button.js";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./PaymentForm";
import formStyles from "../../../SummaryForm.module.scss";
import styles from "./PaymentForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../store/cart";
import { useHttpClient } from "../../../../../shared/hooks/httpHook.js";
import AuthContext from "../../../../../context/auth/authContext.js";
import { config } from "../../../../../utils/config.js";

export const PaymentForm = ({ dispatchSummary, goToTheTop }) => {
  const order = useSelector((state) => state.cart);
  const authContext = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = async (data) => {
    dispatch(cartActions.setPaymentMethod(data));
    const scootersInOrder = order.items.map((scooter) => {
      return {
        scooter: scooter.id,
        color: scooter.color,
        quantity: scooter.quantity,
      };
    });
    const response = await sendRequest(
      `${config.orderUrl}`,
      "POST",
      JSON.stringify({
        items: scootersInOrder,
        totalQuantity: order.totalQuantity,
        deliveryMethod: order.deliveryMethod,
        paymentMethod: order.paymentMethod,
        address: order.address,
        user: authContext.userData.id,
      }),
      {
        "Content-Type": "application/json",
      }
    );
    dispatchSummary({ type: "SHOW_SUCCESS" });
    goToTheTop();
    dispatch(cartActions.clearCart());
  };

  const backToDelivery = () => {
    dispatchSummary({ type: "SHOW_DELIVERY_METHODS" });
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
