import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  userData: {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const loggedInUser = localStorage.getItem("user");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
      setUserData(loggedInUser);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = (user) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setUserData(JSON.stringify(user));
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
