import React from "react";

export const AuthContext = React.createContext({});

export const AuthProviders = (props) => {
  const user = {
    name: "Nilton",
  };
  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
