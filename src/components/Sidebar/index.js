import React, { useImperativeHandle, forwardRef, useState } from "react";
import axios from "axios";
import { getSearchQueryEndpoint } from "../../utils/Config";

const SideBar = forwardRef((props, ref) => {
  const [movieList, setMovieList] = useState([]);

  useImperativeHandle(ref, () => ({
    getselectedMovieList(ref) {
      getselectedMovieList(ref);
    },
  }));

  const getselectedMovieList = (selectedTitle) => {
    if (selectedTitle) {
      axios
        .get(getSearchQueryEndpoint(selectedTitle))
        .then((Response) => {
          if (Response.data.Response == "True") {
            setMovieList(Response.data.Search);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="side__bar">
      <div className="count">
        {movieList && movieList.length} Result {movieList.length > 1 ? "s" : ""}
      </div>
      {movieList &&
        movieList.map((item, index) => (
          <div key={index} onClick={() => props.click(item.Title)}>
            <img src={item.Poster} />
            <div>{item.Title}</div>
            <div>{item.Year}</div>
          </div>
        ))}
    </div>
  );
});

export default SideBar;
