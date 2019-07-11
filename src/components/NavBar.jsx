import React from "react";
import Tab from "./Tab";

const NavBar = props => {
  return (
    <div className="nav">
      <div className="logo" />
      <div className="tab-group">
        <Tab link="Home" />
        <Tab link="Reviews" />
        <Tab link="Gallery" />
        <Tab link="Inventory" />
        <Tab link="Quotes" />
      </div>
    </div>
  );
};

export default NavBar;
