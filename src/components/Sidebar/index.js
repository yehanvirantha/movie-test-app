import React, { memo } from "react";
import "./style.scss";
import { Image } from "../Layout/Image";
import ResultCount from "./ResultCount";

const SideBar = ({ getSearchResponse, isLoading, setSelectedTitle }) => {
  return (
    <div className="side__bar">
      {isLoading.list ? (
        <span>loading ....</span>
      ) : getSearchResponse.Response === "True" ? (
        <div className="list__content">
          <ResultCount count={getSearchResponse.totalResults} />
          {getSearchResponse.Search.map((item, index) => (
            <div
              className="item"
              key={index}
              onClick={() => setSelectedTitle(item.Title)}
            >
              <Image imgLink={item.Poster} className="image" />
              <div>{item.Title}</div>
              <div>{item.Year}</div>
            </div>
          ))}
        </div>
      ) : (
        <span className="not__found"> {getSearchResponse.Error} </span>
      )}
    </div>
  );
};

export default memo(SideBar);
