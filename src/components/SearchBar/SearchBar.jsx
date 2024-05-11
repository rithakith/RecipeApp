import React from "react";
import "./SearchBar.css";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <>
      <div id="search-bar">
        <label htmlFor="">
          <MagnifyingGlass size={32} color="#509e2f" weight="duotone" />
          <input type="text" />
        </label>
      </div>
    </>
  );
};

export default SearchBar;
