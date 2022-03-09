import React, { useState, useEffect, memo, useCallback } from "react";
import axios from "axios";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Content.module.scss";

import { getfromTitleQueryEndpoint } from "../../utils/Config";
import { Button } from "../Layout/Button";
import { Image } from "../Layout/Image";

const Content = ({
  getSelectedTitle,
  setIsLoading,
  isLoading,
  watchlist,
  setWatchlist,
}) => {
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

  const updateWatchlist = useCallback(
    (title) => {
      let setArray = watchlist;
      if (setArray.includes(title)) {
        alert("already added");
        return false;
      } else {
        setArray.push(title);
        alert("added");
      }
      setWatchlist(setArray);
    },
    [watchlist]
  );

  return (
    <div className={styles.content}>
      {isLoading.detail ? (
        <span className="loader">loading ....</span>
      ) : (
        movieDetails && (
          <>
          <div className={styles.content_top_container}>
            <Image imgLink={movieDetails.Poster} />
            <div className={styles.content_top_detail}>
              <Button
                  type="button"
                  title={`Watchlist${
                      watchlist.includes(movieDetails.Title) ? "ed" : ""
                  }`}
                  icon={faBookmark}
                  onClick={updateWatchlist}
                  param={movieDetails.Title}
                  className={styles.watchlist_button}
              />
              <div className={styles.movie_title}>{movieDetails.Title}</div>
              <div className={styles.movie_details_all}>
              <span className={styles.movie_rate}>{movieDetails.Rated}</span>
              <span>{movieDetails.Year}</span>
              <span>{movieDetails.Genre}</span>
              <span>{movieDetails.Runtime}</span>
              <div>{movieDetails.Actors}</div>
              </div>
            </div>
          </div>
            <div className={styles.movie_details}>{movieDetails.Plot}</div>
            <div className={styles.movie_ratings}>
              {movieDetails.Ratings &&
                movieDetails.Ratings.map((item) => (
                  <div>
                    <div>{item.Value}</div>
                    <div>{item.Source}</div>
                  </div>
                ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default memo(Content);
