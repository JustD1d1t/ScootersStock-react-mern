import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { TextField, Paper, Box, Grid } from "@mui/material";
import Button from "../../../../shared/components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InvalidField } from "../../../../shared/components/InvalidField/InvalidField";
import { MOCK_LOGINS } from "../../../../mock/data";
import styles from "./Password.module.scss";

export const Password = () => {
  const authContext = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(null);
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

  useEffect(() => {
    const user = JSON.parse(authContext.userData);
    setUserEmail(user.email);
  }, [authContext]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const user = MOCK_LOGINS.find((login) => login.email === userEmail);
    const mockId = MOCK_LOGINS.indexOf(user);
    user.password = data.password;
    MOCK_LOGINS[mockId] = user;
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ margin: "auto 0" }}
    >
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
