import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import CatalogPage from "./pages/catalog/CatalogPage";

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
          <Route path="/catalog" exact>
            <CatalogPage />
          </Route>
          <Footer />
        </ContentWrapper>
      </Router>
    </>
  );
};

export default App;
