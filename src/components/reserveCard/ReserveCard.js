import React from "react";
import styles from "../reserveCard/ReserveCard.module.css";
import { AiFillDelete } from "react-icons/ai";

const ReserveCard = ({
  id,
  name,
  date,
  initialHour,
  endHour,
  location,
  projector,
  handleRemoveReserve,
}) => {
  return (
    <div key={id} className={styles.card}>
      <div className={styles.nameContainer}>
        <h3>
          Nome: <span>{name}</span>
        </h3>
      </div>
      <div className={styles.dateContainer}>
        <p>
          Data: <span>{date}</span>
        </p>
        <p>
          De: <span>{initialHour}</span> Até: <span>{endHour}</span>
        </p>
        <p>
          Local: <span>{location}</span>
        </p>
        <p>
          Projetor: <span>{projector}</span>
        </p>
      </div>
      <button onClick={handleRemoveReserve}>
        <i>
          <AiFillDelete />
        </i>
      </button>
    </div>
  );
};

export default ReserveCard;
