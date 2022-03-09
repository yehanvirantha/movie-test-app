import React from "react";
import styles from "./Button.module.scss";
import { Icon } from "../Icon";
import classNames from "classnames";

const Button = ({ type, title, icon, onClick, param, className }) => {
  return (
      <button type={type} onClick={() => onClick(param)} className={classNames('btn', className)}>
        {icon && <Icon icon={icon} />}
        {title}
      </button>
  );
};

export { Button };
