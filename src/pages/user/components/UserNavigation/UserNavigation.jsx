import { Grid } from "@mui/material";
import { ButtonNavigation } from "../ButtonNavigation/ButtonNavigation";
import { useContext } from "react";
import AuthContext from "../../../../context/auth/authContext";
export const UserNavigation = ({ handlePanel }) => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.onLogout();
  };
  return (
    <Grid container>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("account")}
        >
          Konto
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("password")}
        >
          Edytuj hasło
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("favourite")}
        >
          Ulubione
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("orders")}
        >
          Zamówienia
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation fullWidth disableRipple onClick={handleLogout}>
          Wyloguj
        </ButtonNavigation>
      </Grid>
    </Grid>
  );
};
