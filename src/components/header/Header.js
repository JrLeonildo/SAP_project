import React from "react";
import styles from "./Header.module.css";
import ButtonModal from "../buttons/ButtonModal";
import { GlobalContext } from "../../GlobalContext";
import NotificationsWindow from "../notificationsWindow/NotificationsWindow";
import BinWindow from "../binWindow/BinWindow";

const Header = () => {
  const ModalContext = React.useContext(GlobalContext);
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1>Your Reserva</h1>
      </div>
      <div className={styles.navContainer}>
        <ButtonModal
          formModal={ModalContext.formModal}
          setFormModal={ModalContext.setFormModal}
        />
        <NotificationsWindow />
        <BinWindow />
      </div>
    </header>
  );
};

export default Header;
