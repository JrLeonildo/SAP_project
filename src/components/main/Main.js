import React from "react";
import styles from "./Main.module.css";
import Modal from "../modal/Modal";
import ButtonModal from "../buttons/ButtonModal";
import ReserveCard from "../reserveCard/ReserveCard";

const Main = () => {
  const [modal, setModal] = React.useState(false);
  const [reservations, setReservations] = React.useState([]);

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
    setModal(false);
  }, [reservations]);

  function handleRemoveReserve(deleted) {
    setReservations(reservations.filter((reserve) => reserve.id !== deleted));
  }

  return (
    <div className={styles.main}>
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
          modal={modal}
          reservations={reservations}
          setReservations={setReservations}
        />
        <ButtonModal modal={modal} setModal={setModal} />
      </div>
    </div>
  );
};

export default Main;
