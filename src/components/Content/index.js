import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getfromTitleQueryEndpoint } from "../../utils/Config";

const Content = ({ getSelectedTitle, setIsLoading, isLoading }) => {
  useEffect(() => {
    if (getSelectedTitle) {
      clickedTitleContent(getSelectedTitle);
    }
    return () => {};
  }, [getSelectedTitle]);

  const [movieDetails, setMovieDetails] = useState("");

  const clickedTitleContent = (selectedTitle) => {
    if (selectedTitle) {
      setMovieDetails("");
      setIsLoading({ ...isLoading, detail: true });
      axios
        .get(getfromTitleQueryEndpoint(selectedTitle))
        .then((Response) => {
          if (Response.data.Response == "True") {
            setMovieDetails(Response.data);
            setIsLoading({ ...isLoading, detail: false });
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading({ ...isLoading, detail: false });
        });
    }
  };
  return (
    <div className="content">
      {isLoading.detail ? (
        <span>loading ....</span>
      ) : (
        movieDetails && (
          <>
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
          </>
        )
      )}
    </div>
  );
};

export default Content;
