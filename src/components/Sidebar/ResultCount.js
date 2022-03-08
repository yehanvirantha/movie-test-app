import React, { memo, useMemo } from "react";

const ResultCount = ({ count }) => {
  const resultCount = useMemo(() => {
    return `${count} Result${count > 1 ? "s" : ""}`;
  }, [count]);

  return <div className="count">{resultCount}</div>;
};

export default memo(ResultCount);
