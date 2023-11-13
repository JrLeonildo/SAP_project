import React from "react";
import Input from "../input/Input";
import styles from "./Modal.module.css";
import ButtonForm from "../buttons/ButtonForm";

const Modal = ({ modal, reservations, setReservations }) => {
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
      date: date,
      initialHour: initialHour,
      endHour: endHour,
      location: location,
      projector: projector,
    };

    setReservations((reservations) => [...reservations, obj]);
    alert("reserva adicionada");
    setName("");
    setDate("");
    setInitialH("");
    setEndH("");
    setLocation("");
    setProjector("");
  }

  if (modal)
    return (
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome: "
            type="text"
            id="name"
            value={name}
            setValue={setName}
            placeholder="Lionel Messi"
            required
          />
          <Input
            label="Data: "
            type="date"
            id="date"
            value={date}
            setValue={setDate}
            required
          />
          <Input
            label="De: "
            type="time"
            id="initialHour"
            value={initialH}
            setValue={setInitialH}
            required
          />
          <Input
            label="Até: "
            type="time"
            id="endHour"
            value={endH}
            setValue={setEndH}
            required
          />
          <Input
            label="Local: "
            type="text"
            id="location"
            placeholder="Sala 1 ou Biblioteca"
            value={location}
            setValue={setLocation}
            required
          />
          <Input
            label="Projetor: "
            type="text"
            id="projector"
            placeholder="001"
            value={projector}
            setValue={setProjector}
            required
          />
          <ButtonForm text="Salvar" />
        </form>
      </div>
    );
  return null;
};

export default Modal;
