import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SummaryForm";
import Button from "../../../../../shared/components/Button/Button";
import styles from "../../../SummaryForm.module.scss";
import AuthContext from "../../../../../context/auth/authContext";

const SummaryForm = ({ goToTheDelivery, goToTheTop }) => {
  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    console.log(data);
    goToTheDelivery();
    goToTheTop();
  };

  useEffect(() => {
    const user = JSON.parse(authContext.userData);
    for (const key in user) {
      if (key !== "password") {
        setValue(key, user[key]);
      }
    }
  }, [authContext, setValue]);

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
          {errors.phoneNumber?.message}
        </span>
        <input
          type="text"
          placeholder="Phone number"
          {...register("phoneNumber")}
        />
      </label>
      <Button type="submit" classes={styles.summarysummaryForm__submitButton}>
        Go to the delivery
      </Button>
    </form>
  );
};

export default SummaryForm;
