import React from "react";
import { useGlobalContext } from "./context";
import ToggleTheme from "./ToggleTheme";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <>
      <div className="header-container">
        <h3>search hacker news</h3>
        <ToggleTheme />
      </div>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-input"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchForm;
