import { useEffect, useState } from "react";
import recipesData from "../data/recipes";

function Discover() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);

    console.log("Use effect works");
  }, []);

  return (
    <>
      {/* FIRST CARD */}
      {recipes.map((recipe)=>(

      <div className="card-container">
        {/* Still deciding if I want entire card to be link */}
        <a href="update.html">
          <article className="card">
            <img src={recipe.image} alt="test" />
            <div className="card-content">
              <h1 className="card-title">{recipe.title}</h1>
              <p className="card-description">{recipe.blerb}</p>
            </div>
          </article>
        </a>
      </div>))}
    </>
  );
}

export default Discover;
