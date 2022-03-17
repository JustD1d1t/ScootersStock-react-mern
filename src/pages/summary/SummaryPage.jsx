import { useReducer } from "react";
import { useSelector } from "react-redux";
import SummaryStage from "./components/Summary/SummaryStage/SummaryStage.jsx";
import { SummaryPromocode } from "./components/PromocodeForm/PromocodeForm.jsx";
import { DeliveryForm } from "./components/Delivery/DeliveryForm/DeliveryForm.jsx";
import SummaryForm from "./components/Summary/SummaryForm/SummaryForm.jsx";
import styles from "./SummaryPage.module.scss";
import SummaryItem from "./components/Summary/SummaryItem/SummaryItem.jsx";
import { PaymentForm } from "./components/Payment/PaymentForm/PaymentForm.jsx";

const promocodeReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SHOW_INPUT":
      newState.promocodeInput = !newState.promocodeInput;
      newState.promocodeButton = !newState.promocodeButton;
      return newState;
    case "SHOW_SUCCES":
      newState.promocodeInput = !newState.promocodeInput;
      newState.promocodeSuccess = !newState.promocodeSuccess;
      return newState;
    case "SHOW_DELIVERY_DATA":
      newState.deliveryData = true;
      newState.deliveryMethods = false;
      newState.paymentMethods = false;
      newState.success = false;
      return newState;
    case "SHOW_DELIVERY_METHODS":
      newState.deliveryData = false;
      newState.deliveryMethods = true;
      newState.paymentMethods = false;
      newState.success = false;
      return newState;
    case "SHOW_PAYMENT_METHODS":
      newState.deliveryData = false;
      newState.deliveryMethods = false;
      newState.paymentMethods = true;
      newState.success = false;
      return newState;
    case "SHOW_SUCCESS":
      newState.deliveryData = false;
      newState.deliveryMethods = false;
      newState.paymentMethods = false;
      newState.success = true;
      return newState;
    default:
      throw new Error("błąd");
  }
};

const SummaryPage = () => {
  const [summaryState, dispatchSummary] = useReducer(promocodeReducer, {
    promocodeButton: true,
    promocodeInput: false,
    promocodeSuccess: false,
    deliveryData: true,
    deliveryMethods: false,
    paymentMethods: false,
    success: false,
  });

  const scooters = useSelector((state) => state.cart.items);

  const handlePromoCode = () => {
    dispatchSummary({ type: "SHOW_INPUT" });
  };

  const goToTheDelivery = () => {
    dispatchSummary({ type: "SHOW_DELIVERY_METHODS" });
  };

  const goToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.summary}>
      {!summaryState.success && (
        <div className={styles.summary__statusContainer}>
          <div className={styles.summary__status}>
            <SummaryStage active={summaryState.deliveryMethods} />
            <SummaryStage active={summaryState.paymentMethods} />
            <SummaryStage active={summaryState.deliveryData} />
          </div>
        </div>
      )}
      {summaryState.deliveryData && (
        <>
          <div className={styles.summary__formContainer}>
            <div className={styles.summary__formIntroduction}>
              <h2 className={styles.summary__title}>Delivery Data</h2>
              <h3>Enter your name and address:</h3>
            </div>
            <SummaryForm
              goToTheDelivery={goToTheDelivery}
              goToTheTop={goToTheTop}
            />
          </div>
          <div className={styles.summary__details}>
            <SummaryPromocode
              promocodeButton={summaryState.promocodeButton}
              promocodeInput={summaryState.promocodeInput}
              promocodeSuccess={summaryState.promocodeSuccess}
              handlePromoCode={handlePromoCode}
              dispatch={dispatchSummary}
            />
            <div className={styles.summary__detailsCart}>
              <h3 className={styles.summary__detailsTitle}>Total</h3>
              {scooters.map((scooter, index) => (
                <SummaryItem key={scooter.id} scooter={scooter} index={index} />
              ))}
            </div>
          </div>
        </>
      )}
      {summaryState.deliveryMethods && (
        <div className={styles.summary__deliveryMethodsContainer}>
          <h2 className={styles.summary__title}>Delivery Methods</h2>
          <h3>Choose delivery method:</h3>
          <DeliveryForm
            dispatchSummary={dispatchSummary}
            goToTheTop={goToTheTop}
          />
        </div>
      )}
      {summaryState.paymentMethods && (
        <div className={styles.summary__deliveryMethodsContainer}>
          <h2 className={styles.summary__title}>Payment Methods</h2>
          <h3>Choose payment method:</h3>
          <PaymentForm
            dispatchSummary={dispatchSummary}
            goToTheTop={goToTheTop}
          />
        </div>
      )}
      {summaryState.success && (
        <div className={styles.summary__successContainer}>
          <h2 className={styles.summary__title}>Success</h2>
          <div className={styles.summary__success}>
            <div className={styles.summary__successSign}></div>
          </div>
          <h3>Thank you for your order!</h3>
        </div>
      )}
    </section>
  );
};

export default SummaryPage;
