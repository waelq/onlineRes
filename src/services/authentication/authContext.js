import React, { useEffect, useState, useContext, createContext } from "react";
// import firebase in new virsion like this
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { LoginRequset } from "./auth.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoadin] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoadin(true);
    LoginRequset(email, password)
      .then((u) => {
        setUser(u);
        setIsLoadin(false);
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        error,
        isLoading,
        onLogin
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
