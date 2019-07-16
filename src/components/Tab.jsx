import React from "react";

const Tab = props => {
  const { link, tab } = props;
  return (
    <div onClick={tab} className={`tab ${link}`}>
      {link}
    </div>
  );
};

export default Tab;
