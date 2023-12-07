import React from "react";
import styles from "./Home.module.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import MyCalendar from "../calendar/MyCalendar";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Main />
      <div className="calendar">
        <MyCalendar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
