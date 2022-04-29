import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { jwt } from "../../utils/jsonWebToken";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  userData: {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const isTokenExpired = jwt.isTokenExpired(token);
  //     if (!isTokenExpired) {
  //       const tokenData = jwt.parseJwt(token);
  //       setUserData(tokenData);
  //       setIsLoggedIn(true);
  //     }
  //   }
  // }, []);
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    const tokenData = jwt.parseJwt(token);
    setUserData(tokenData);
  };

  const context = useMemo(
    () => ({
      isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
      userData,
    }),

    [isLoggedIn, userData]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
