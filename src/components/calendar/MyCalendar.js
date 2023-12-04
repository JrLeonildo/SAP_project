import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendarContainer">
      <Calendar
        onChange={onChange}
        value={date}
        locale="pt-br"
        calendarType="gregory"
        prev2Label=""
        next2Label=""
      />
    </div>
  );
};

export default MyCalendar;
