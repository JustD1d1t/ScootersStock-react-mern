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
          Account
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("password")}
        >
          Change password
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("favourite")}
        >
          Favourites
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation
          fullWidth
          disableRipple
          onClick={() => handlePanel("orders")}
        >
          Orders
        </ButtonNavigation>
      </Grid>
      <Grid item md={12}>
        <ButtonNavigation fullWidth disableRipple onClick={handleLogout}>
          Logout
        </ButtonNavigation>
      </Grid>
    </Grid>
  );
};
