import React, { memo } from "react";
import styles from "./Sidebar.module.scss";
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
              className={styles.item}
              key={`${index}_${item.Title}`}
              onClick={() => setSelectedTitle(item.Title)}
            >
              <Image imgLink={item.Poster} className={styles.image} />
                <div className={styles.item_content}>
                    <div className={styles.content_title}>{item.Title}</div>
                    <div className={styles.content_year}>{item.Year}</div>
                </div>
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
