import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useMemo,
} from "react";
import axios from "axios";
import { getSearchQueryEndpoint } from "../../utils/Config";
import "./style.scss";
const SideBar = ({ getSearchResponse, isLoading, setSelectedTitle }) => {
  return (
    <div className="side__bar">
      {isLoading.list ? (
        <span>loading ....</span>
      ) : getSearchResponse.Response === "True" ? (
        <div className="list__content">
          <div className="count">
            {getSearchResponse.totalResults} Result
            {getSearchResponse.totalResults > 1 ? "s" : ""}
          </div>
          {getSearchResponse.Search.map((item, index) => (
            <div
              className="item"
              key={index}
              onClick={() => setSelectedTitle(item.Title)}
            >
              <img width="80" height="80" src={item.Poster} />
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

export default SideBar;
