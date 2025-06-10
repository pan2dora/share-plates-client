function Search({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        // when the user inputs their data the value will be target and equal to the input -> futher functionality will become a actual search feature but for now that is not the case
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <!-- Search Icon --> */}
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Search;
