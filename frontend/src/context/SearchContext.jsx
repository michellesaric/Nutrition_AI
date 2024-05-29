import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  search: [],
  setSearch: () => {},
});

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState([]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
