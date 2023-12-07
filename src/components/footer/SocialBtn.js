import React from "react";

const SocialBtn = ({ label }) => {
  return (
    <button style={{ background: "none", border: "none", cursor: "pointer" }}>
      {label}
    </button>
  );
};

export default SocialBtn;
