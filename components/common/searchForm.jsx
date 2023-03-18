import React from 'react';

const SearchForm = (props) => {
    const faSearch=<i className="fa fa-search" aria-hidden="true"></i>;
    return (
        <form className="w-100 m-auto" role="search">
        <input
          type="search"
          className="form-control"
          placeholder="Search ..."
          aria-label="Search"
        />
      </form>
      );
}
 
export default SearchForm;