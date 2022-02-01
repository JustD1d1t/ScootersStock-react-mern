import Button from "../../../../shared/components/Button/Button";
import styles from "./PromocodeForm.module.scss";
import formStyles from "../../SummaryForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./PromocodeForm";
export const SummaryPromocode = ({
  promocodeButton,
  promocodeInput,
  promocodeSuccess,
  handlePromoCode,
  dispatch,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const submitForm = (data) => {
    dispatch({ type: "SHOW_SUCCES" });
  };
  return (
    <>
      {promocodeButton && (
        <div className={styles.summary__detailsPromocode}>
          <p>Promocode</p>
          <Button
            classes={styles.summary__promocodeButton}
            onClick={handlePromoCode}
          >
            Add
          </Button>
        </div>
      )}
      {promocodeInput && (
        <form
          onSubmit={handleSubmit(submitForm)}
          className={formStyles.summaryForm}
        >
          <label>
            <span className={styles.summaryForm__error}>
              {errors.promocode?.message}
            </span>
            <input
              type="text"
              placeholder="Promocode"
              name="promocode"
              {...register("promocode")}
            />
          </label>
        </form>
      )}
      {promocodeSuccess && (
        <div className={styles.summary__detailsPromocode}>
          <p>You used a promotional code.</p>
        </div>
      )}
    </>
  );
};
