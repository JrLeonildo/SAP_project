import React from "react";
import styles from "./Header.module.css";
import ButtonModal from "../buttons/ButtonModal";
import { GlobalContext } from "../../GlobalContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const ModalContext = React.useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <div>
        <h1>Your Reserva</h1>
      </div>
      <div className={styles.iconsContainer}>
        <div>
          <FaSearch />
        </div>
        <div>
          <ButtonModal
            modal={ModalContext.modal}
            setModal={ModalContext.setModal}
          />
        </div>
        <div>
          <MdOutlineSpeakerNotes />
        </div>
        <div>
          <RiDeleteBin6Line />
        </div>
      </div>
    </header>
  );
};

export default Header;
