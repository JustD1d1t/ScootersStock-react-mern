import { useState } from "react";
import { UserNavigation } from "./components/UserNavigation/UserNavigation";
import { UserPanel } from "./components/UserPanel/UserPanel";

import { Grid } from "@mui/material";

export const UserPage = () => {
  const [sectionVisible, setSectionVisible] = useState("account");

  const handlePanel = (type) => {
    if (type === "account") {
      setSectionVisible("account");
    } else if (type === "password") {
      setSectionVisible("password");
    } else if (type === "favourite") {
      setSectionVisible("favourite");
    } else setSectionVisible("orders");
  };

  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        <UserNavigation handlePanel={handlePanel} />
      </Grid>
      <Grid item xs={12} md={10} px={1}>
        <UserPanel accountVisible={sectionVisible} />
      </Grid>
    </Grid>
  );
};
