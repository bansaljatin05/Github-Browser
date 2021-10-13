import React from "react";
import { Link } from "react-router-dom";
import "./branches.css";

const Branches = ({ branch, owner, name }) => {
  return (
    <Link to={`/commits/${branch}`} className="branch-item">
      {branch}
    </Link>
  );
};

export default Branches;
