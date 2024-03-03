import css from "./SearchBar.module.css";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ onSearch, value }) => {
  const searchBarId = useId();

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.searchBar.value;

    if (value === "") {
      toast("You should enter something before searching");
      return;
    }

    e.target.reset();
    onSearch(value);
  };

  return (
    <header className={css.headerContainer}>
      <Toaster />
      <form className={css.searchForm} value={value} onSubmit={handleSearch}>
        <button className={css.searchButton} type="submit">
          <IoSearchOutline size={25} className={css.searchIcon} />
        </button>
        <input
          className={css.input}
          name="searchBar"
          id={searchBarId}
          type="text"
          autoComplete="off"
          placeholder="Search for images..."
        />
      </form>
    </header>
  );
};

export default SearchBar;
