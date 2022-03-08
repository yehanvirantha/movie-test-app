import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = ({ icon }) => {
  return (
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export { Icon };
