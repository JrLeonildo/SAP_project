import React from "react";

export const GlobalContext = React.createContext();

export const GlobalModalContext = ({ children }) => {
  const [formModal, setFormModal] = React.useState(false);
  return (
    <GlobalContext.Provider value={{ formModal, setFormModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
