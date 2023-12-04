import React from "react";
import Input from "../input/Input";
//import DateInput from "../input/DateInput";
import styles from "./Modal.module.css";
import ButtonForm from "../buttons/ButtonForm";
import { toast } from "react-toastify";
import { GlobalContext } from "../../GlobalContext";

const FormModal = ({ formModal, setReservations }) => {
  const notifySuccess = () =>
    toast.success("Reserva Adicionada", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const ModalContext = React.useContext(GlobalContext);
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [initialH, setInitialH] = React.useState("");
  const [endH, setEndH] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [projector, setProjector] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    createReservation(name, date, initialH, endH, location, projector);
  }

  function createReservation(
    name,
    date,
    initialHour,
    endHour,
    location,
    projector
  ) {
    const obj = {
      id: name + date + initialHour + endHour + location + projector,
      name: name,
      date: date.replace(/^(\d{2})(\d{2})(\d{2}).*/, "$1/$2/$3"),
      initialHour: initialHour.replace(/^(\d{2})(\d{2}).*/, "$1:$2"),
      endHour: endHour.replace(/^(\d{2})(\d{2}).*/, "$1:$2"),
      location: location,
      projector: projector,
    };

    setReservations((reservations) => [...reservations, obj]);

    ModalContext.setFormModal(false);
    notifySuccess();
    setName("");
    setDate("");
    setInitialH("");
    setEndH("");
    setLocation("");
    setProjector("");
  }

  if (formModal)
    return (
      <div className={styles.modalContainer}>
        <h2>Reserve</h2>
        <div className={styles.modal}>
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome: "
              type="text"
              id="name"
              value={name}
              setValue={setName}
            />
            <Input
              label="Data: "
              id="date"
              type="date"
              value={date}
              setValue={setDate}
            />
            <Input
              label="De: "
              id="initialHour"
              type="time"
              value={initialH}
              setValue={setInitialH}
            />
            <Input
              label="Até: "
              id="endHour"
              type="time"
              value={endH}
              setValue={setEndH}
            />
            <Input
              label="Local: "
              id="location"
              type="text"
              value={location}
              setValue={setLocation}
            />
            <Input
              label="Projetor: "
              id="projector"
              type="text"
              value={projector}
              setValue={setProjector}
            />
            <ButtonForm text="reservar" />
          </form>
        </div>
      </div>
    );
  return null;
};

export default FormModal;
