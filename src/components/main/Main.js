import React from "react";
import styles from "./Main.module.css";
import FormModal from "../form_modal/FormModal";
import ReserveCard from "../reserveCard/ReserveCard";
import { GlobalContext } from "../../GlobalContext";
import { ToastContainer, toast } from "react-toastify";

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

const Main = () => {
  const [reservations, setReservations] = React.useState([]);
  const ModalContext = React.useContext(GlobalContext);

  function handleRemoveReserve(deleted) {
    setReservations(reservations.filter((reserve) => reserve.id !== deleted));
    notifyDeleted();
  }

  return (
    <div className={styles.main}>
      <ToastContainer />
      <h2 className={styles.mainHeader}>Reservas</h2>
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
        <FormModal
          formModal={ModalContext.formModal}
          reservations={reservations}
          setReservations={setReservations}
        />
      </div>
    </div>
  );
};

export default Main;
