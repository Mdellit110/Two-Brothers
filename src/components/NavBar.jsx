import React from "react";
import Tab from "./Tab";

const NavBar = props => {
  const { setOpenTab } = props;
  return (
    <div className="nav">
      <div className="logo" />
      <div className="tab-group">
        <Tab tab={() => setOpenTab("home")} link="Home" />
        <Tab tab={() => setOpenTab("review")} link="Reviews" />
        <Tab tab={() => setOpenTab("gallery")} link="Gallery" />
        <Tab tab={() => setOpenTab("inventory")} link="Inventory" />
        <Tab tab={() => setOpenTab("quote")} link="Quotes" />
      </div>
    </div>
  );
};

export default NavBar;
