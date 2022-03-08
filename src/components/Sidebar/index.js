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
        <ul className="list__content">
          <ResultCount count={getSearchResponse.totalResults} />
          {getSearchResponse.Search.map((item, index) => (
            <li
              className="item"
              key={`${index}_${item.Title}`}
              onClick={() => setSelectedTitle(item.Title)}
            >
              <Image imgLink={item.Poster} className="image" />
              <div>{item.Title}</div>
              <div>{item.Year}</div>
            </li>
          ))}
        </ul>
      ) : (
        <span className="not__found"> {getSearchResponse.Error} </span>
      )}
    </div>
  );
};

export default memo(SideBar);
