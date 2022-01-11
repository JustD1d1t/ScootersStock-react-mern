import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import CatalogPage from "./pages/scooters/CatalogPage";
import ScooterPage from "./pages/scooters/ScooterPage";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ContentWrapper from "./shared/components/ContentWrapper/ContentWrapper";
import Footer from "./shared/components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <ContentWrapper>
          <MainNavigation />
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/scooters" exact>
            <CatalogPage />
          </Route>
          <Route path="/scooters/:id" exact>
            <ScooterPage />
          </Route>
          <Footer />
        </ContentWrapper>
      </Router>
    </>
  );
};

export default App;
