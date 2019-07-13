import React from "react";

const Tab = props => {
  const { link } = props;
  return <div className={`tab ${link}`}>{link}</div>;
};

export default Tab;
