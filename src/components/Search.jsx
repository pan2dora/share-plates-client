import { useEffect, useState } from "react";
import { Link, Routes } from "react-router-dom";
import mockAPI from "../data/mockdata";

function Search({ search, setSearch }) {
  // console.log("Search:", search)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipes);

    console.log("Use effect works");
  }, [recipes]);

  //source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //For the time being I will use an api for extra recipes
  // source:https://spoonacular.com/food-api/docs#Search-Recipes-Complex
  //drop down source: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_filters_dropdown_hover
  // const SPOON_API_BASE_URL = import.meta.env.VITE_SPOON_API_BASE_URL;
  // const SPOON_API_KEY = import.meta.env.VITE_SPOON_API_KEY;
  // const testAPI = "www.themealdb.com/api/json/v1/1/filter.php?i=";
  // const foodAPIKey = 1;

  // console.log("mock data:", mockAPI )

  // useEffect(() => {
  //   fetch(mockAPI, {
  //     method: "GET",

  //     headers: { "Content-type": "application/json" },
  //   })
  //     .then((response) => response.json())

  //     .then((result) => {
  //       console.log("Success:", result.success.message);

  //       setRecipes(result.data.recipes);
  //     })
  //     .catch(console.log("error"));

  // }, []);
  // console.log(books);

  // console.log("This is search:", search);
  // console.log("recipe to search", recipes);

  //basic filtering func
  function filterItems(arr, search) {
    return arr.filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const filteredSearch = filterItems(mockAPI, search);

 

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
            {filteredSearch.map((item)=>(
              <a href="/recipe" key={item.id}>{item.title}</a>
            ))}

            {/* {recipes.map((recipe) => (
              <a key={recipe.id}>{recipe.title}</a>
            ))} */}
          </ul>
        </div>
      </div>

      {/* <div className="dropdown">
          <ul>
          
            {books.map((book) => (
              <li>{book.title}</li>
           ) )}
          </ul>
        </div> */}

      {/* <!-- Search Icon --> */}
    </div>
  );
}

export default Search;
