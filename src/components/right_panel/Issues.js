import React from "react";
import "./Issues.css";

const Issues = () => {
  return (
    <div className="issue">
      <h6 className="issue-title">Issue Title</h6>
      <div className="issue-desc">
        {/* <image
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt="User Photo"
          className="issue-desc__photo"
        /> */}
        <div className="issue-desc__photo"></div>
        <p className="issue-desc__description">Jonas</p>
      </div>
    </div>
  );
};

export default Issues;
