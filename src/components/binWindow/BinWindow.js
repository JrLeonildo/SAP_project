import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import styles from "./BinWindow.module.css";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 600,
  bgcolor: "background.paper",
  bgcolorHover: "#e9e9e9",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const BinWindow = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={styles.btnOpen} onClick={handleOpen}>
        <DeleteOutlinedIcon sx={{ fontSize: 30, color: "black" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.header}>
            <p>Lixeira</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BinWindow;
