import React, { createContext, useState } from "react";

export const SearchContext = createContext({
  search: [],
  setSearch: () => {},
});

const SearchProvider = ({ children }) => {
  const [search, setSearchState] = useState(() => {
    const storedSearch = localStorage.getItem("search");
    return storedSearch ? JSON.parse(storedSearch) : [];
  });

  const setSearch = (newSearch) => {
    setSearchState(newSearch);
    localStorage.setItem("search", JSON.stringify(newSearch));
  };

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
