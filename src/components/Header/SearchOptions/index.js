import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Slider from "react-input-slider";
import { getSearchQueryEndpoint } from "../../../utils/Config";
import "./style.scss";
const setYear = {
  yfrom: 1970,
  yto: 2015,
};

const types = [
  {
    title: "Any",
    value: "",
    defaultChecked: true,
  },
  {
    title: "Movie",
    value: "movie",
    defaultChecked: false,
  },
  {
    title: "Series",
    value: "series",
    defaultChecked: false,
  },
  {
    title: "Episode",
    value: "episode",
    defaultChecked: false,
  },
];
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

        if (year > 0 ) {
          searchParam += `&y=${year}`;
        }
        if (type.length > 0) {
          searchParam += `&type=${type}`;
        }
        console.log("searchParam", searchParam);
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
        <input
          type="text"
          onChange={(e) => {
            setFilters({ ...filters, input: e.target.value });
          }}
        ></input>
        {isError && (
          <p className="error">
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
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value={x.value}
                      defaultChecked={x.defaultChecked}
                      onChange={(e) => {
                        setFilters({ ...filters, type: e.currentTarget.value });
                      }}
                    />
                    {x.title}
                  </label>
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
