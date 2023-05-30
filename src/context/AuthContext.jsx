/* eslint-disable no-unused-vars */
import React from "react";

const AuthContext = React.createContext({
  user: null,
  loading: false,
  createUser: (email, password) => {},
  login: (email, password) => {},
  loginWithgoogle: () => {},
  updateUserProfile: (name) => {},
});

export default AuthContext;
