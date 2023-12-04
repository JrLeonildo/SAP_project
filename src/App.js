import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import MyCalendar from "./components/calendar/MyCalendar";
import { GlobalModalContext } from "./GlobalContext";

function App() {
  return (
    <GlobalModalContext>
      <div className="App">
        <Header />

        <Main />
        <div className="calendar">
          <MyCalendar />
        </div>

        <Footer />
      </div>
    </GlobalModalContext>
  );
}

export default App;
