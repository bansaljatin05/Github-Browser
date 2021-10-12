import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
      <SideItem name="Repository Name" description="Repository Description" />
    </div>
  );
};

const SideItem = ({ name, description }) => {
  return (
    <div className="sidebar-item">
      <p className="sidebar-item__name">{name}</p>
      <p className="sidebar-item__description">{description}</p>
    </div>
  );
};

export default Sidebar;
