import React from "react";

export const GlobalContext = React.createContext();

export const GlobalModalContext = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <GlobalContext.Provider value={{ modal, setModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
