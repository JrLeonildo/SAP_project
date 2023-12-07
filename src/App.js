import React from "react";
import "./App.css";
import { GlobalModalContext } from "./GlobalContext";
import { AuthProvider } from "./contexts/Auth";
import RoutesApp from "./RoutesApp";

function App() {
  return (
    <GlobalModalContext>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </GlobalModalContext>
  );
}

export default App;
