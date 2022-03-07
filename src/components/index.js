import React, { useRef } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import Content from "./Content";
const MainContent = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default MainContent;
