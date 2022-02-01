import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SummaryForm";
import Button from "../../../../../shared/components/Button/Button";
import styles from "../../../SummaryForm.module.scss";

const SummaryForm = ({ goToTheDelivery, goToTheTop }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    console.log(data);
    goToTheDelivery();
    goToTheTop();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.summaryForm}>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.name?.message}
        </span>
        <input type="text" placeholder="Name" {...register("name")} />
      </label>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.lastName?.message}
        </span>
        <input type="text" placeholder="Last name" {...register("lastName")} />
      </label>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.street?.message}
        </span>
        <input type="text" placeholder="Street" {...register("street")} />
      </label>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.houseNumber?.message}
        </span>
        <input
          type="text"
          placeholder="House number"
          {...register("houseNumber")}
        />
      </label>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.flatNumber?.message}
        </span>
        <input
          type="text"
          placeholder="Flat number"
          {...register("flatNumber")}
        />
      </label>

      <div className={styles.summaryForm__cityDetails}>
        <label>
          <span className={styles.summaryForm__error}>
            {errors.zipCode?.message}
          </span>
          <input
            type="text"
            placeholder="Zip code"
            {...register("zipCode")}
            className={styles.half}
          />
        </label>
        <label>
          <span className={styles.summaryForm__error}>
            {errors.city?.message}
          </span>
          <input
            type="text"
            placeholder="City"
            {...register("city")}
            className={styles.half}
          />
        </label>
      </div>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.country?.message}
        </span>
        <input type="text" placeholder="Country" {...register("country")} />
      </label>

      <label>
        <span className={styles.summaryForm__error}>
          {errors.email?.message}
        </span>
        <input type="text" placeholder="E-mail" {...register("email")} />
      </label>
      <label>
        <span className={styles.summaryForm__error}>
          {errors.phone?.message}
        </span>
        <input type="text" placeholder="Phone number" {...register("phone")} />
      </label>
      <Button type="submit" classes={styles.summarysummaryForm__submitButton}>
        Go to the delivery
      </Button>
    </form>
  );
};

export default SummaryForm;
