import React from "react";
import PropTypes from "prop-types";

const Sort = ({ sort, setSort }) => {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <label>Sort by: </label>
      <select value={sort} onChange={handleSortChange}>
        <option value="alphabetical">Alphabetical</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

Sort.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Sort;
