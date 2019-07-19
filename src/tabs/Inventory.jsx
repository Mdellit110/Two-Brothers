import React from "react";
const Inventory = props => {
  return (
    <div className="Inventory-page">
      <div className="title block blue">INVENTORY</div>
      <div className="tents desc block blue">
        <h2>TENTS</h2>
        <h3>Heres a list of our tents and their capacities based on set up</h3>
      </div>
      <div className="inventory block white">
        <div className="item-desc">content</div>
        <div className="inventory-image tent float" />
      </div>
      <div className="inventory block blue">
        <div className="inventory-image tent float" />
        <div className="item-desc">content</div>
      </div>
      <div className="inventory block white">
        <div className="item-desc">content</div>
        <div className="inventory-image tent float" />
      </div>
      <div className="services desc block blue">
        <h2>SERVICES</h2>
        <h3>Heres a list of our services</h3>
      </div>
      <div className="inventory block blue">
        <div className="inventory-image tent float" />
        <div className="item-desc">content</div>
      </div>
      <div className="inventory block white">
        <div className="item-desc">content</div>
        <div className="inventory-image tent float" />
      </div>
      <div className="inventory block blue">
        <div className="inventory-image tent float" />
        <div className="item-desc">content</div>
      </div>
      <div className="inventory block white">
        <div className="item-desc">content</div>
        <div className="inventory-image tent float" />
      </div>
      <div className="inventory block blue">
        <div className="inventory-image tent float" />
        <div className="item-desc">content</div>
      </div>
    </div>
  );
};

export default Inventory;
