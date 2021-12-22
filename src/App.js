import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ContentWrapper from "./shared/components/ContentWrapper/ContentWrapper";

const App = () => {
  return (
    <>
      <Router>
        <ContentWrapper>
          <MainNavigation></MainNavigation>
        </ContentWrapper>
      </Router>
    </>
  );
};

export default App;
