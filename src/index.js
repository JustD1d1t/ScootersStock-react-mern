import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { AuthContextProvider } from "./context/auth/authContext";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContextProvider>,
  document.getElementById("root")
);
