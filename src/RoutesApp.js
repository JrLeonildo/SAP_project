import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Loginpage from "./components/loginPage/Loginpage";
import Register from "./components/loginPage/Register";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Loginpage />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Loginpage />} />
          <Route exact path="/siginUp" element={<Register />} />
          <Route path="*" element={<Loginpage />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
