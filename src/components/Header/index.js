import React from "react";
import SearchOptions from "./SearchOptions";

const Header = ({ setSearchResponse, setIsLoading, isLoading }) => {
  return (
    <div className="header">
      HEADER
      <SearchOptions
        setSearchResponse={setSearchResponse}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Header;
