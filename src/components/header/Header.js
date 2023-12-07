import React from "react";
import styles from "./Header.module.css";
import logo from "../logo/logo.svg";
import ButtonModal from "../buttons/ButtonModal";
import { GlobalContext } from "../../GlobalContext";
import NotificationsWindow from "../notificationsWindow/NotificationsWindow";
import BinWindow from "../binWindow/BinWindow";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import OutputBtn from "../buttons/OutputBtn";

const Header = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const ModalContext = React.useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo do site" />
      </div>
      <div className={styles.navContainer}>
        <ButtonModal
          formModal={ModalContext.formModal}
          setFormModal={ModalContext.setFormModal}
        />
        <NotificationsWindow />
        <BinWindow />
        <OutputBtn onClick={() => [signout(), navigate("/")]} />
      </div>
    </header>
  );
};

export default Header;
