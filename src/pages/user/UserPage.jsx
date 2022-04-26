import { UserNavigation } from "./components/UserNavigation/UserNavigation";

import { Grid } from "@mui/material";

export const UserPage = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        <UserNavigation />
      </Grid>
      <Grid item xs={12} md={10} px={1}>
        {children}
      </Grid>
    </Grid>
  );
};
