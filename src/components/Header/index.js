import React from "react";
import SearchOptions from "./SearchOptions";

const Header = (props) => {
  const getSelectedTitle = (value) => {
    props.selectedTitletoHeader(value);
  };

  return (
    <div className="header">
      HEADER
      <SearchOptions />
    </div>
  );
};

export default Header;
