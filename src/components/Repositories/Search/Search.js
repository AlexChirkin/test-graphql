import React, { useState, useCallback } from "react";

import PropTypes from "prop-types";

import searchStyles from "./Search.module.css";


const Search = ({ setSearch, loading, setCursor, defaultCursorParam }) => {
  const [inputVal, setInputVal] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setCursor(defaultCursorParam);
      setSearch(inputVal);
    },
    [defaultCursorParam, inputVal, setCursor, setSearch]
  );
  return (
    <div className={searchStyles.search}>
      <form onSubmit={onSubmit} className={searchStyles.form}>
        <input
          className={searchStyles.formInput}
          placeholder={"Search..."}
          value={inputVal}
          onChange={(e) => setInputVal(e.target?.value)}
        />
        <button
          type="submit"
          className={searchStyles.formBtn}
          disabled={loading}
        >
          Search
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setCursor: PropTypes.func.isRequired,
  defaultCursorParam: PropTypes.object.isRequired,
};

export default Search;
