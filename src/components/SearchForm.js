import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef(null);

  useEffect(() => {
    if (searchValue.current !== null) {
      searchValue.current.focus();
    }
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  function handleSubmit(e) {
    e.prevent.default();
  }

  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
