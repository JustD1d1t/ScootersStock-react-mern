import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useContext } from "react";

import ScrollToTop from "./shared/hooks/ScrollToTop";
import MainPage from "./pages/main/MainPage";
import CatalogPage from "./pages/scooters/CatalogPage";
import ScooterPage from "./pages/scooters/ScooterPage";
import CartPage from "./pages/cart/CartPage";
import SummaryPage from "./pages/summary/SummaryPage.jsx";
import { AuthPage } from "./pages/auth/AuthPage.jsx";
import AuthContext from "./context/auth/authContext";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ContentWrapper from "./shared/components/ContentWrapper/ContentWrapper";
import Footer from "./shared/components/Footer/Footer";

const App = () => {
  const authContext = useContext(AuthContext);
  return (
    // router jest już rootem
    <>
      <Router basename={process.env.PUBLIC_URL}>
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
            <Route path="/summary">
              <SummaryPage />
            </Route>
            {!authContext.isLoggedIn && (
              <Route path="/auth" exact>
                <AuthPage />
              </Route>
            )}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </ContentWrapper>
      </Router>
    </>
  );
};

export default App;
