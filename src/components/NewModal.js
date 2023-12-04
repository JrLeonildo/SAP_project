import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "./input/Input";
import ButtonForm from "./buttons/ButtonForm";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const NewModal = ({ reservations, setReservations }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

    setName("");
    setDate("");
    setInitialH("");
    setEndH("");
    setLocation("");
    setProjector("");
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
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
        </Box>
      </Modal>
    </div>
  );
};

export default NewModal;
