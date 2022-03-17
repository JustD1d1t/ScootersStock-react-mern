import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import AuthContext from "../../../context/auth/authContext";
import { useContext, useReducer } from "react";
import Button from "../../../shared/components/Button/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InvalidField } from "../../../shared/components/InvalidField/InvalidField";
import { BasicModal } from "../../../shared/components/Modal/Modal";
import { useHttpClient } from "../../../shared/hooks/httpHook";

const modalReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "OPEN_MODAL":
      newState.modalActive = true;
      newState.modalMessage = action.message;
      return newState;
    case "CLOSE_MODAL":
      newState.modalActive = false;
      newState.modalMessage = null;
      return newState;
    default:
      throw new Error("You shouldn't get here");
  }
};

export const RegisterForm = ({ changeForm }) => {
  const { sendRequest } = useHttpClient();
  const [modalState, dispatchModal] = useReducer(modalReducer, {
    modalActive: false,
    modalMessage: null,
  });

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
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Only digits")
      .min(7, "House number must be at least 7 characters")
      .max(9, "House number must not exceed 9 characters"),
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

  const closeModal = () => dispatchModal({ type: "CLOSE_MODAL" });

  const onSubmit = async (data) => {
    const url = "http://localhost:4000/user/register";
    const response = await sendRequest(url, "POST", JSON.stringify(data), {
      "Content-Type": "application/json",
    });
    if (response.errors) {
      dispatchModal({
        type: "OPEN_MODAL",
        message: response.errors.user,
      });
    }
  };

  return (
    <div>
      <BasicModal
        text={modalState.modalMessage}
        closeModal={closeModal}
        modalActive={modalState.modalActive}
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
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        variant="standard"
        type="text"
        {...register("phoneNumber")}
        error={errors.phoneNumber ? true : false}
        fullWidth
        margin="dense"
      />
      <InvalidField>{errors.phoneNumber?.message}</InvalidField>
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
      <InvalidField>{errors.acceptTerms?.message}</InvalidField>
      <br />
      <Grid container direction="row" justifyContent="space-between">
        <Button size="xsmall" onClick={changeForm} inverse>
          Change to login
        </Button>
        <Button onClick={handleSubmit(onSubmit)} size="xsmall">
          Register
        </Button>
      </Grid>
    </div>
  );
};
