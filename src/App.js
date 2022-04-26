import { Route, Redirect, Switch, HashRouter } from "react-router-dom";

import { useContext } from "react";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

import ScrollToTop from "./shared/hooks/ScrollToTop";
import MainPage from "./pages/main/MainPage";
import CatalogPage from "./pages/scooters/CatalogPage";
import ScooterPage from "./pages/scooters/ScooterPage";
import CartPage from "./pages/cart/CartPage";
import SummaryPage from "./pages/summary/SummaryPage.jsx";
import { AuthPage } from "./pages/auth/AuthPage.jsx";
import { UserPage } from "./pages/user/UserPage";
import { Account } from "./pages/user/components/Account/Accounts";
import { Password } from "./pages/user/components/Password/Password";
import { Favourite } from "./pages/user/components/Favourite/Favourite";
import { Orders } from "./pages/user/components/Orders/Orders";
import { ScooterForm } from "./pages/user/components/ScooterForm/ScooterForm.jsx";

import AuthContext from "./context/auth/authContext";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ContentWrapper from "./shared/components/ContentWrapper/ContentWrapper";
import Footer from "./shared/components/Footer/Footer";

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => {
  const authContext = useContext(AuthContext);
  return (
    <ThemeProvider theme={THEME}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <ContentWrapper>
          <MainNavigation />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/scooters" exact>
              <CatalogPage />
            </Route>
            <Route path="/scooters/:id">
              <ScooterPage />
            </Route>
            <Route path="/cart" exact>
              <CartPage />
            </Route>
            {authContext.isLoggedIn && (
              <Route path="/summary" exact>
                <SummaryPage />
              </Route>
            )}
            {authContext.isLoggedIn && (
              <Route path="/user" exact>
                <UserPage>
                  <Account />
                </UserPage>
              </Route>
            )}
            {authContext.isLoggedIn && (
              <Route path="/user/account" exact>
                <UserPage>
                  <Account />
                </UserPage>
              </Route>
            )}
            {authContext.isLoggedIn && (
              <Route path="/user/favourite" exact>
                <UserPage>
                  <Favourite />
                </UserPage>
              </Route>
            )}
            {authContext.isLoggedIn && (
              <Route path="/user/password" exact>
                <UserPage>
                  <Password />
                </UserPage>
              </Route>
            )}
            {authContext.isLoggedIn && (
              <Route path="/user/orders" exact>
                <UserPage>
                  <Orders />
                </UserPage>
              </Route>
            )}
            {authContext.isLoggedIn && authContext.userData?.admin && (
              <Route path="/user/add-scooter" exact>
                <UserPage>
                  <ScooterForm />
                </UserPage>
              </Route>
            )}
            {!authContext.isLoggedIn && (
              <Route path="/auth" exact>
                <AuthPage />
              </Route>
            )}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </ContentWrapper>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
