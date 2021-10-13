import React from "react";
import "./branches.css";

const Branches = ({ name }) => {
  return (
    <div className="branch-item">
      <p>{name}</p>
    </div>
  );
};

export default Branches;
