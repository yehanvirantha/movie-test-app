import React from "react";
import classNames from "classnames";
import styles from "./RadioInput.module.scss";

const RadioInput = ({
  value,
  defaultChecked,
  setFilters,
  filters,
  title,
  className,
}) => {
  return (
    <label className={classNames(className, styles.bg)}>
      <input
        type="radio"
        name="type"
        value={value}
        defaultChecked={defaultChecked}
        onChange={(e) => {
          setFilters({ ...filters, type: e.currentTarget.value });
        }}
        className={styles.radio}
      />
      {title}
    </label>
  );
};

export { RadioInput };
