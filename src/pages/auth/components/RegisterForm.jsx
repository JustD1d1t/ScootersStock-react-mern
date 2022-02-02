import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import AuthContext from "../../../context/auth/authContext";
import { useContext, useState } from "react";
import Button from "../../../shared/components/Button/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InvalidField } from "../../../shared/components/InvalidField/InvalidField";
import { MOCK_LOGINS } from "../../../mock/data";
import { BasicModal } from "../../../shared/components/Modal/Modal";

export const RegisterForm = ({ changeForm }) => {
  const authContext = useContext(AuthContext);
  const [modalActive, setModalActive] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is required")
      .min(6, "Email must be at least 6 characters")
      .max(20, "Email must not exceed 20 characters"),
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must not exceed 30 characters"),
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must not exceed 30 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters")
      .max(30, "Last name must not exceed 30 characters"),
    street: Yup.string()
      .required("Street is required")
      .min(3, "Street must be at least 3 characters")
      .max(30, "Street must not exceed 30 characters"),
    houseNumber: Yup.string()
      .required("House number is required")
      .matches(/^[0-9]+$/, "Only digits")
      .min(1, "House number must be at least 1 characters")
      .max(3, "House number must not exceed 3 characters"),
    flatNumber: Yup.string()
      .required("Flat number is required")
      .matches(/^[0-9]+$/, "Only digits")
      .min(1, "Flat number must be at least 1 characters")
      .max(3, "Flat number must not exceed 3 characters"),
    zipCode: Yup.string()
      .required("Zip code is required")
      .matches(/^[0-9]+$/, "Only digits")
      .min(3, "Zip code must be at least 3 characters")
      .max(6, "Zip code must not exceed 6 characters"),
    city: Yup.string()
      .required("City is required")
      .min(3, "City must be at least 3 characters")
      .max(30, "City must not exceed 30 characters"),
    country: Yup.string()
      .required("Country is required")
      .min(3, "Country must be at least 3 characters")
      .max(30, "Country must not exceed 30 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password"), null], "You have to type same password")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const toggleModal = () => setModalActive((prevState) => !prevState);

  const checkIsUserInBase = (data) => {
    const isUserInBase = MOCK_LOGINS.find(
      (login) =>
        login.email.toLowerCase() === data.email.toLowerCase() ||
        login.username === data.username.toLowerCase()
    );
    if (isUserInBase) {
      return true;
    } else return false;
  };

  const onSubmit = (data) => {
    const isUserInBase = checkIsUserInBase(data);
    if (isUserInBase) {
      toggleModal();
    } else {
      MOCK_LOGINS.push(data);
      authContext.onLogin(data);
    }
  };

  return (
    <div>
      <BasicModal
        text="This user is already registered"
        closeModal={toggleModal}
        modalActive={modalActive}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        variant="standard"
        {...register("email")}
        error={errors.email ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.email?.message}</InvalidField>
      <TextField
        required
        id="username"
        name="username"
        label="Username"
        variant="standard"
        type="text"
        {...register("username")}
        error={errors.username ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.username?.message}</InvalidField>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        variant="standard"
        type="text"
        {...register("name")}
        error={errors.name ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.name?.message}</InvalidField>
      <TextField
        required
        id="lastName"
        name="lastName"
        label="Last name"
        variant="standard"
        type="text"
        {...register("lastName")}
        error={errors.lastName ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.lastName?.message}</InvalidField>
      <TextField
        required
        id="street"
        name="street"
        label="Street"
        variant="standard"
        type="text"
        {...register("street")}
        error={errors.street ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.street?.message}</InvalidField>
      <InvalidField>{errors.lastName?.message}</InvalidField>
      <TextField
        required
        id="houseNumber"
        name="houseNumber"
        label="House Number"
        variant="standard"
        type="text"
        {...register("houseNumber")}
        error={errors.houseNumber ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.houseNumber?.message}</InvalidField>
      <TextField
        required
        id="flatNumber"
        name="flatNumber"
        label="Flat Number"
        variant="standard"
        type="text"
        {...register("flatNumber")}
        error={errors.flatNumber ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.flatNumber?.message}</InvalidField>
      <TextField
        required
        id="zipCode"
        name="zipCode"
        label="Zip Code"
        variant="standard"
        type="text"
        {...register("zipCode")}
        error={errors.zipCode ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.zipCode?.message}</InvalidField>
      <TextField
        required
        id="city"
        name="city"
        label="City"
        variant="standard"
        type="text"
        {...register("city")}
        error={errors.city ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.city?.message}</InvalidField>
      <TextField
        required
        id="country"
        name="country"
        label="Country"
        variant="standard"
        type="text"
        {...register("country")}
        error={errors.country ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.country?.message}</InvalidField>
      <TextField
        required
        id="password"
        name="password"
        label="Password"
        variant="standard"
        type="password"
        {...register("password")}
        error={errors.password ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.password?.message}</InvalidField>
      <TextField
        required
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        variant="standard"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.confirmPassword?.message}</InvalidField>
      <FormControlLabel
        control={
          <Controller
            control={control}
            name="acceptTerms"
            defaultValue="false"
            inputRef={register()}
            render={({ field: { onChange } }) => (
              <Checkbox
                color="primary"
                onChange={(e) => onChange(e.target.checked)}
              />
            )}
          />
        }
        label={
          <Typography color={errors.acceptTerms ? "error" : "inherit"}>
            I have read and agree to the Terms *
          </Typography>
        }
      />
      <br />
      <Typography variant="inherit" color="textSecondary">
        {errors.acceptTerms ? "(" + errors.acceptTerms.message + ")" : ""}
      </Typography>
      <br />
      <Grid container direction="row" justifyContent="space-between">
        <Button size="xsmall" onClick={changeForm} inverse>
          Change to login
        </Button>
        <Button onClick={handleSubmit(onSubmit)} size="xsmall">
          Login
        </Button>
      </Grid>
    </div>
  );
};
