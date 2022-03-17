import { useContext, useReducer } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { TextField, Paper, Box, Grid } from "@mui/material";
import Button from "../../../../shared/components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InvalidField } from "../../../../shared/components/InvalidField/InvalidField";
import styles from "./Password.module.scss";
import { useHttpClient } from "../../../../shared/hooks/httpHook";
import { BasicModal } from "../../../../shared/components/Modal/Modal";

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

export const Password = () => {
  const authContext = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [modalState, dispatchModal] = useReducer(modalReducer, {
    modalActive: false,
    modalMessage: null,
  });
  const schema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password"), null], "You have to type same password")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const response = await sendRequest(
      "http://localhost:4000/user/reset",
      "POST",
      JSON.stringify({
        password: data.password,
        userId: authContext.userData.id,
      }),
      {
        "Content-Type": "application/json",
      }
    );
    if (response.message) {
      dispatchModal({
        type: "OPEN_MODAL",
        message: response.message,
      });
      setValue("password", "");
      setValue("confirmPassword", "");
    }
  };

  const closeModal = () => dispatchModal({ type: "CLOSE_MODAL" });

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ margin: "auto 0" }}
    >
      <BasicModal
        text={modalState.modalMessage}
        closeModal={closeModal}
        modalActive={modalState.modalActive}
      />
      <Grid item xs={12} sm={8} md={6}>
        <Paper>
          <Box px={2} py={1}>
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
            <Button
              onClick={handleSubmit(onSubmit)}
              size="xsmall"
              classes={styles.password__button}
              center
            >
              Change password
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
