import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon }) => {
  return (
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export { Icon };
