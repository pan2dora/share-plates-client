import { useEffect, useState } from "react";

function Search({ search, setSearch }) {
  // console.log("Search:", search)
  const [recipes, setRecipes] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const endpoint = "/api/recipes";

  useEffect(() => {
    fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      credintials: "included",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result.success.message);
        setRecipes(result.data.recipes);
      })
      .catch(console.log("error:"));
  }, [ API_BASE_URL]);

  //basic filtering func
  function filterItems(arr, search) {
    return arr.filter((item) =>
      item.recipe.toLowerCase().includes(search.toLowerCase())
    );
  }

  const filteredSearch = filterItems(recipes, search);

  return (
    <div className="search">
      <div className="dropdown">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          // when the user inputs their data the value will be target and equal to the input -> futher functionality will become a actual search feature but for now that is not the case
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <ul className="dropdown-content">
            <a>Test Item</a>
            {/*  I have a func that filters my searches, how do I go about rendering that search? */}
            {/* if item == price then populate the items in that range */}
            {filteredSearch.map((item) => (
              <a  href={`/recipe/${item._id}`}key={item._id} >
                {item.recipe}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
