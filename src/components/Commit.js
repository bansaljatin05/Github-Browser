import React from "react";
import "./commit.css";

const Commit = ({ commit, author }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="commit">
      <span className="commit__date">{formatDate(commit.author.date)}</span>
      <div>
        <p className="commit__description">{commit.message}</p>
      </div>
      <div className="commit-row">
        <input
          className="commit-row__photo"
          type="image"
          src={author.avatar_url}
          alt="photo"
        />
        <p className="commit-row__user">{commit.author.name}</p>
      </div>
    </div>
  );
};

export default Commit;
