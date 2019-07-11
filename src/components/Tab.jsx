import React from "react";

const Tab = props => {
  const { link } = props;
  return <div className={`Tab ${link}`}>{link}</div>;
};

export default Tab;
