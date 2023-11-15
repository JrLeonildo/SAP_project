import React from "react";
import styles from "./Main.module.css";
import { Modal, ToastContainer } from "../modal/Modal";
import ReserveCard from "../reserveCard/ReserveCard";
import { GlobalContext } from "../../GlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [reservations, setReservations] = React.useState([]);
  const ModalContext = React.useContext(GlobalContext);

  const notifyDeleted = () =>
    toast.info("Reserva Removida", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  React.useEffect(() => {
    const savedReserves = window.localStorage.getItem("savedReserves");
    if (savedReserves !== null) setReservations(JSON.parse(savedReserves));
  }, []);

  React.useEffect(() => {
    if (reservations !== null)
      window.localStorage.setItem(
        "savedReserves",
        JSON.stringify(reservations)
      );
    ModalContext.setModal(false);
  }, [reservations]);

  function handleRemoveReserve(deleted) {
    setReservations(reservations.filter((reserve) => reserve.id !== deleted));
    notifyDeleted();
  }

  return (
    <div className={styles.main}>
      <ToastContainer />
      <ul className={styles.cardContainer}>
        {reservations.map((reserve) => (
          <ReserveCard
            id={reserve.id}
            name={reserve.name}
            date={reserve.date}
            initialHour={reserve.initialHour}
            endHour={reserve.endHour}
            location={reserve.location}
            projector={reserve.projector}
            handleRemoveReserve={() => handleRemoveReserve(reserve.id)}
          />
        ))}
      </ul>

      <div>
        <Modal
          modal={ModalContext.modal}
          reservations={reservations}
          setReservations={setReservations}
        />
      </div>
    </div>
  );
};

export default Main;
