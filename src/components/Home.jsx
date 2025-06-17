import { useState, useEffect } from "react";

function Home() {
  //Use state to handle recipes data

  const [recipes, setRecipes] = useState([]);

  //Url vars

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const endpoint = "/api/recipes";

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
  }, []);
  return (
    <>
      {/* FIRST CARD */}
      <div className="card-container">
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            <a href="#">
              <article className="card">
                <img src={`../images/${recipe.image}`}   alt="test" />
                <div className="card-content">
                  <h1 className="card-title">{recipe.recipe}</h1>
                  <p className="card-description">{recipe.about}</p>
                </div>
              </article>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
