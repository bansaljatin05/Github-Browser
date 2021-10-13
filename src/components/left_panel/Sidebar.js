import React from "react";
import "./sidebar.css";

const Sidebar = ({ repos, selectRepo }) => {
  return (
    <div className="sidebar">
      {repos.length ? (
        repos.map((repo) => (
          <SideItem
            key={repo.id}
            name={repo.name}
            description={repo.description}
            owner={repo.owner.login}
            selectRepo={selectRepo}
          />
        ))
      ) : (
        <div className="centre-div">
          <p>No repositories!!</p>
        </div>
      )}
    </div>
  );
};

const SideItem = ({ name, description, owner, selectRepo }) => {
  return (
    <div
      className="sidebar-item"
      onClick={() => {
        // console.log("hello");
        selectRepo(name, owner);
      }}
    >
      <p className="sidebar-item__name">{name ? name : "No Name"}</p>
      <p className="sidebar-item__description">
        {description ? description : "No Description"}
      </p>
    </div>
  );
};

export default Sidebar;
