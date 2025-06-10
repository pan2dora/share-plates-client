import { useEffect, useState } from "react";
import { Link, Routes } from "react-router-dom";

function Search({ search, setSearch }) {
  const [books, setBooks] = useState([]);
  //For the time being I will use an api for extra recipes
  // source:https://spoonacular.com/food-api/docs#Search-Recipes-Complex
  // const SPOON_API_BASE_URL = import.meta.env.VITE_SPOON_API_BASE_URL;
  // const SPOON_API_KEY = import.meta.env.VITE_SPOON_API_KEY;
  const testAPI =
    "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    fetch(testAPI, {
      method: "GET",

      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())

      .then((result) => {
        console.log("Success:", result.success.message);

        setBooks(result.data.books);
      })
      .catch(console.log("error"));

    // console.log("Use effect works");
  }, []);
  // console.log(books);

  // console.log("This is search:", search);
  console.log("Books to search", books);

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

        <div >
          <ul className="dropdown-content">
            <a>Test</a>
            {books.map((book) => (
              <a key={book._id}>
                {book.title}
              </a>
            ))}
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
