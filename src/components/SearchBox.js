import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search anything"
        className="search-input"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
