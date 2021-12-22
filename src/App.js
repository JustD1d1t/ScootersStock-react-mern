import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./pages/main/MainPage";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ContentWrapper from "./shared/components/ContentWrapper/ContentWrapper";

const App = () => {
  return (
    <>
      <Router>
        <ContentWrapper>
          <MainNavigation />
          <Route path="/" exact>
            <MainPage />
          </Route>
        </ContentWrapper>
      </Router>
    </>
  );
};

export default App;
