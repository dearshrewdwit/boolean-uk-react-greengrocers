import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label>Filter by type: </label>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="vegetable">Vegetables</option>
        <option value="fruit">Fruits</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
