import React from 'react';

export const SearchBar = ({inputValue, onClickSearch, updateSearchTerm}) => {
  return (
    <form className="search" onSubmit={onClickSearch}>
      <input
        type="text"
        value={inputValue}
        onChange={updateSearchTerm}
      />
    <input type="submit" value="Search"/>
    </form>
  );
};
