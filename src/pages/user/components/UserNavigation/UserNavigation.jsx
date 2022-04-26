import { Grid } from "@mui/material";
import { ButtonNavigation } from "../ButtonNavigation/ButtonNavigation";
import { useContext } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { Link } from "react-router-dom";

export const UserNavigation = () => {
  const authContext = useContext(AuthContext);
  const handleLogout = () => {
    authContext.onLogout();
  };
  return (
    <Grid container>
      <Grid item md={12}>
        <Link to="/user/account">
          <ButtonNavigation fullWidth disableRipple>
            Account
          </ButtonNavigation>
        </Link>
      </Grid>
      <Grid item md={12}>
        <Link to="/user/password">
          <ButtonNavigation fullWidth disableRipple>
            Change password
          </ButtonNavigation>
        </Link>
      </Grid>
      <Grid item md={12}>
        <Link to="/user/favourite">
          <ButtonNavigation fullWidth disableRipple>
            Favourites
          </ButtonNavigation>
        </Link>
      </Grid>
      <Grid item md={12}>
        <Link to="/user/orders">
          <ButtonNavigation fullWidth disableRipple>
            Orders
          </ButtonNavigation>
        </Link>
      </Grid>
      {authContext.userData.admin && (
        <Grid item md={12}>
          <Link to="/user/add-scooter">
            <ButtonNavigation fullWidth disableRipple>
              Add scooter
            </ButtonNavigation>
          </Link>
        </Grid>
      )}
      <Grid item md={12}>
        <ButtonNavigation fullWidth disableRipple onClick={handleLogout}>
          Logout
        </ButtonNavigation>
      </Grid>
    </Grid>
  );
};
