import React from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return {
    logged: true,
    name: "Rodrigo temporal",
  };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};
