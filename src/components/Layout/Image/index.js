import React from "react";

const Image = ({ imgLink, className }) => {
  return (
    <>
      <img className={className} src={imgLink} />
    </>
  );
};

export { Image };
