/* eslint-disable react/prop-types */
export default function SortDropdown({ setSort }) {

    function handleChange(e) {
        setSort(e.target.value)
    }

  return (
    <div className="sort-form">
      <label htmlFor="sort-dropdown">Sort by: </label>
      <select onChange={(e) => handleChange(e)} name="sort-dropdown">
    <option value="">-</option>
    <option value="price">Price</option>
    <option value="name">Name</option>
    </select>
    </div>
  );
}
