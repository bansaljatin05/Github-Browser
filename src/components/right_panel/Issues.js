import React from "react";
import "./Issues.css";

const Issue = ({ title, user }) => {
  return (
    <div className="issue">
      <h6 className="issue-title">{title}</h6>
      <div className="issue-desc">
        <input
          className="issue-desc__photo"
          type="image"
          src={user.avatar_url}
          alt="photo"
        />
        <p className="issue-desc__description">{user.login}</p>
      </div>
    </div>
  );
};

export default Issue;
