import React, { useRef, useState } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import Content from "./Content";
const MainContent = () => {
  const [getSearchResponse, setSearchResponse] = useState("");
  const [isLoading, setIsLoading] = useState({
    list: false,
    detail: false,
  });
  const [getSelectedID, setSelectedID] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  return (
    <div className="container">
      <Header
        setSearchResponse={setSearchResponse}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <div className="main">
        <SideBar
          getSearchResponse={getSearchResponse}
          isLoading={isLoading}
          setSelectedID={setSelectedID}
        />
        <Content
          getSelectedID={getSelectedID}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />
      </div>
    </div>
  );
};

export default MainContent;
