import "./App.scss";
import React from "react";
import classNames from "classnames";

import MainContent from "./components";
function App() {
  return (
    <div className={classNames("App", "movie__wrapper")}>
      <MainContent />
    </div>
  );
}

export default App;
