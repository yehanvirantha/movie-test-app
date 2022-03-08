import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Slider from "react-input-slider";
import styles from "./style.module.scss";

import { getSearchQueryEndpoint } from "../../../utils/Config";
import { setYear, types } from "../../../utils/Constant";

import { RadioInput } from "../../Layout/RadioInput";
import { SearchInput } from "../../Layout/SearchInput";

const SearchOptions = ({ setSearchResponse, setIsLoading, isLoading }) => {
  const [isError, setIsError] = useState(false);
  const [filters, setFilters] = useState({
    input: "",
    year: "",
    type: "",
    page: 1,
  });
  const { yfrom, yto } = setYear;

  useEffect(() => {
    handleOnChange();
    return () => {};
  }, [filters.input, filters.year, filters.type]);

  const handleOnChange = useCallback(() => {
    const { input, year, type, page } = filters;
    setIsError(false);

    if ((year.length > 0 || type.length > 0) && input.length <= 0) {
      setIsError(true);
      return false;
    } else {
      if (input.length > 3) {
        let searchParam = `&s=${input}&page=${page}`;

        if (year > 0) {
          searchParam += `&y=${year}`;
        }
        if (type.length > 0) {
          searchParam += `&type=${type}`;
        }
        setIsLoading({ ...isLoading, list: true });
        // trigger http
        axios
          .get(getSearchQueryEndpoint(searchParam))
          .then((Response) => {
            setSearchResponse(Response.data);
            setIsLoading({ ...isLoading, list: false });
          })
          .catch((error) => {
            setIsLoading({ ...isLoading, list: false });
            console.log(error);
          });
        return false;
      }
    }
  }, [filters.input, filters.year, filters.type]);

  return (
    <div className="filters">
      <span className="input">
        <SearchInput setFilters={setFilters} filters={filters} />
        {isError && (
          <p className={styles.error}>
            Please enter film name ( type more than 3 character)
          </p>
        )}
      </span>
      <span className="year__silder">
        <div>{"year: " + filters.year}</div>
        <span>{yfrom}</span>
        <Slider
          axis="x"
          xstep={1}
          xmin={yfrom}
          xmax={yto}
          x={filters.year}
          onChange={({ x }) => {
            setFilters({ ...filters, year: parseFloat(x.toFixed(2)) });
          }}
        />
        <span>{yto}</span>
      </span>
      <span className="type">
        <div>Type</div>
        <span>
          <ul>
            {types.map((x, index) => {
              return (
                <li key={`${index}_${x.value}`}>
                  <RadioInput
                    value={x.value}
                    defaultChecked={x.defaultChecked}
                    setFilters={setFilters}
                    filters={filters}
                    title={x.title}
                    className={"label"}
                  />
                </li>
              );
            })}
          </ul>
        </span>
      </span>
    </div>
  );
};

export default SearchOptions;
