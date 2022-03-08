import React from "react";
import styles from "./Button.module.scss";
import { Icon } from "../Icon";

const Button = ({ type, title, icon, onClick, param }) => {
  return (
    <span>
      <button type={type} onClick={() => onClick(param)}>
        {icon && <Icon icon={icon} />}
        {title}
      </button>
    </span>
  );
};

export { Button };
