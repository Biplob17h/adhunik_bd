import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input type="text" className="text-black" />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;