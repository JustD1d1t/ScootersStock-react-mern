import { useState } from "react";
import { LoginForm } from "./components/LoginForm.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";
import { Box, Paper, Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./AuthPage.scss";

export const AuthPage = () => {
  const [isLogginForm, setIsLogginForm] = useState(true);

  const changeForm = () => {
    setIsLogginForm((prevState) => !prevState);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ margin: "auto 0" }}
    >
      <Grid item xs={12} md={6}>
        <Paper>
          <Box px={2} py={1}>
            <CSSTransition
              in={isLogginForm}
              timeout={400}
              classNames="change-form"
              mountOnEnter
              unmountOnExit
            >
              <LoginForm changeForm={changeForm} />
            </CSSTransition>
            <CSSTransition
              in={!isLogginForm}
              timeout={400}
              classNames="change-form"
              mountOnEnter
              unmountOnExit
            >
              <RegisterForm changeForm={changeForm} />
            </CSSTransition>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
