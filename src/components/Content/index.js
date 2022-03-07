import React, { useImperativeHandle, forwardRef, useState } from "react";
import axios from "axios";
import { getfromTitleQueryEndpoint } from "../../utils/Config";

const Content = forwardRef((props, ref) => {
  const [movieDetails, setMovieDetails] = useState("");
  useImperativeHandle(ref, () => ({
    clickedTitleContent(ref) {
      clickedTitleContent(ref);
    },
  }));

  const clickedTitleContent = (selectedTitle) => {
    if (selectedTitle) {
      axios
        .get(getfromTitleQueryEndpoint(selectedTitle))
        .then((Response) => {
          if (Response.data.Response == "True") {
            setMovieDetails(Response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="content">
        <img src={movieDetails.Poster} />
        <span>{movieDetails.Title}</span>
        <span>{movieDetails.Year}</span>
        <span>{movieDetails.Genre}</span>
        <span>{movieDetails.Runtime}</span>
        <span>{movieDetails.Actors}</span>
        <span>{movieDetails.Plot}</span>
      {movieDetails.Ratings &&
        movieDetails.Ratings.map((item) => (
          <div>
            <span>{item.Value}</span>
            <span>{item.Source}</span>
          </div>
        ))}
    </div>
  );
});

export default Content;
