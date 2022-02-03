import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SummaryForm";
import Button from "../../../../../shared/components/Button/Button";
import styles from "../../../SummaryForm.module.scss";
import AuthContext from "../../../../../context/auth/authContext";
import { TextField } from "@mui/material";
import { InvalidField } from "../../../../../shared/components/InvalidField/InvalidField";

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
    const data = JSON.parse(authContext.userData);
    for (const key in data) {
      if (key !== "password") {
        setValue(key, data[key]);
      }
    }
  }, [authContext, setValue]);

  return (
    <>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        margin="dense"
        variant="standard"
        {...register("name")}
        error={errors.name ? true : false}
        fullWidth
      />
      <InvalidField>{errors.name?.message}</InvalidField>
      <TextField
        required
        id="lastName"
        name="lastName"
        label="Last name"
        margin="dense"
        variant="standard"
        {...register("lastName")}
        error={errors.lastName ? true : false}
        fullWidth
      />
      <InvalidField>{errors.lastName?.message}</InvalidField>
      <TextField
        required
        id="street"
        name="street"
        label="Street"
        margin="dense"
        variant="standard"
        {...register("street")}
        error={errors.street ? true : false}
        fullWidth
      />
      <InvalidField>{errors.street?.message}</InvalidField>
      <TextField
        required
        id="houseNumber"
        name="houseNumber"
        label="House Number"
        margin="dense"
        variant="standard"
        {...register("houseNumber")}
        error={errors.houseNumber ? true : false}
        fullWidth
      />
      <InvalidField>{errors.houseNumber?.message}</InvalidField>
      <TextField
        required
        id="flatNumber"
        name="flatNumber"
        label="Flat Number"
        margin="dense"
        variant="standard"
        {...register("flatNumber")}
        error={errors.flatNumber ? true : false}
        fullWidth
      />
      <InvalidField>{errors.flatNumber?.message}</InvalidField>
      <div className={styles.summaryForm__cityDetails}>
        <div>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            margin="dense"
            variant="standard"
            {...register("zipCode")}
            error={errors.zipCode ? true : false}
            fullWidth
          />
          <InvalidField>{errors.zipCode?.message}</InvalidField>
        </div>
        <div>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            margin="dense"
            variant="standard"
            {...register("city")}
            error={errors.city ? true : false}
            fullWidth
          />
          <InvalidField>{errors.city?.message}</InvalidField>
        </div>
      </div>
      <TextField
        required
        id="country"
        name="country"
        label="Country"
        margin="dense"
        variant="standard"
        {...register("country")}
        error={errors.country ? true : false}
        fullWidth
      />
      <InvalidField>{errors.country?.message}</InvalidField>{" "}
      <TextField
        required
        id="email"
        name="email"
        label="E-mail"
        margin="dense"
        variant="standard"
        {...register("email")}
        error={errors.email ? true : false}
        fullWidth
      />
      <InvalidField>{errors.email?.message}</InvalidField>{" "}
      <TextField
        required
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        margin="dense"
        variant="standard"
        {...register("phoneNumber")}
        error={errors.phoneNumber ? true : false}
        fullWidth
      />
      <InvalidField>{errors.phoneNumber?.message}</InvalidField>
      <Button
        type="submit"
        size="small"
        classes={styles.summaryForm__submitButton}
        onClick={handleSubmit(submitForm)}
      >
        Go to the delivery
      </Button>
    </>
  );
};

export default SummaryForm;
