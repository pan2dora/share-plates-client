import recipesData from "../data/recipes";
import { useState, useEffect } from "react";

function Home() {
  //Use state to handle recipes data

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
    console.log("Use effect works");
  }, []);

  return (
    <>
      {/* FIRST CARD */}
      {recipes.map((recipe) => (
        <div className="card-container" key={recipe.id}>
          {/* Still deciding if I want entire card to be link */}
          <a href="#">
            <article className="card">
              <img src="public/images/placeholder.png" alt="test" />
              <div className="card-content">
                <h1 className="card-title">{recipe.title}</h1>
                <p className="card-description">{recipe.blerb}</p>
              </div>
            </article>
          </a>
        </div>
      ))}
    </>
  );
}

export default Home;
