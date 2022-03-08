import React from "react";
import classNames from "classnames";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ setFilters, filters }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setFilters({ ...filters, input: e.target.value });
        }}
      ></input>
    </>
  );
};

export { SearchInput };
