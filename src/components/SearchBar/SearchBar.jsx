import React from "react";
import "./SearchBar.css";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <>
      <div id="search-bar">
        <label htmlFor="">
          <input type="text" placeholder="Search" />
          <div id="search-icon">
            <MagnifyingGlass size={32} color="#ffffff" weight="duotone" />
          </div>
        </label>
      </div>
    </>
  );
};

export default SearchBar;
