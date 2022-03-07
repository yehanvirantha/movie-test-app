import React, { useRef } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
const MainContent = () => {
  const callSiderBarRef = useRef();
  const callContentRef = useRef();

  const getSelectedTitle = (value) => {
    callSiderBarRef.current.getselectedMovieList(value);
  };
  const getClickTitle = (value) => {
    callContentRef.current.clickedTitleContent(value);
  };

  return (
    <div className="container">
      <Header />
      <div className="main">
        <SideBar />
      </div>
    </div>
  );
};

export default MainContent;
