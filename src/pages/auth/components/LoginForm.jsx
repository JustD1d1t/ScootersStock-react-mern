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
import { useHistory } from "react-router-dom";

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

export const LoginForm = ({ changeForm }) => {
  const { sendRequest } = useHttpClient();
  const authContext = useContext(AuthContext);
  const history = useHistory();
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
    password: Yup.string()
      .required("Password is required")
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
    const url = "http://localhost:4000/user/login";
    const response = await sendRequest(url, "POST", JSON.stringify(data), {
      "Content-Type": "application/json",
    });
    if (response.errors?.user) {
      dispatchModal({
        type: "OPEN_MODAL",
        message: response.errors.user,
      });
      return;
    } else if (response.errors?.password) {
      dispatchModal({
        type: "OPEN_MODAL",
        message: response.errors.password,
      });
      return;
    }
    authContext.onLogin(response.token);
    history.push("/");
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
        margin="dense"
        variant="standard"
        {...register("email")}
        error={errors.email ? true : false}
        fullWidth
      />
      <InvalidField>{errors.email?.message}</InvalidField>
      <TextField
        required
        id="password"
        name="password"
        label="Password"
        margin="dense"
        variant="standard"
        type="password"
        {...register("password")}
        error={errors.password ? true : false}
        fullWidth
      />
      <Typography variant="inherit" color="textSecondary">
        {errors.password?.message}
      </Typography>
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
          Change to register
        </Button>
        <Button onClick={handleSubmit(onSubmit)} size="xsmall">
          Login
        </Button>
      </Grid>
    </div>
  );
};
