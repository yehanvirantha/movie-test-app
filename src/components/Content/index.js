import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { getfromTitleQueryEndpoint } from "../../utils/Config";
import { Button } from "../Layout/Button";

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

            <Button type="button" title="Watchlist" icon={faCoffee} />
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

export default memo(Content);
