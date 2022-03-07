import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-input-slider";
import { getSearchQueryEndpoint } from "../../../utils/Config";

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
const SearchOptions = (props) => {
  const [listOpen, setListOpen] = useState(false);
  const [filters, setFilters] = useState({ input: "", year: "", type: "" });
  const { yfrom, yto } = setYear;

  useEffect(() => {
    const { input, year, type } = filters;
    console.log("filters", filters);
    return () => {};
  }, [filters.input, filters.year, filters.type]);

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    if (searchValue.length > 3) {
      axios
        .get(getSearchQueryEndpoint(searchValue))
        .then((Response) => {
          if (Response.data.Response == "True") {
            setListOpen(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="filters">
      <span className="input">
        <input
          type="text"
          onChange={(e) => setFilters({ ...filters, input: e.target.value })}
        ></input>
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
          onChange={({ x }) =>
            setFilters({ ...filters, year: parseFloat(x.toFixed(2)) })
          }
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
                      onChange={(e) =>
                        setFilters({ ...filters, type: e.currentTarget.value })
                      }
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
