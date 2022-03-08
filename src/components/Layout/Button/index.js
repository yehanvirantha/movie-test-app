import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { Icon } from "../Icon";
const Button = ({ type, title, icon }) => {
  return (
    <span>
      <button type={type}>
        {icon && <Icon icon={icon} />}
        {title}
      </button>
    </span>
  );
};

export { Button };
