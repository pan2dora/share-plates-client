import { useEffect, useState } from "react";
import mockdata from "../data/mockdata";

function Discover() {
  const [recipes, setRecipes] = useState([]);
//Random assortment of recipes, later will be randomize based on users filters
  useEffect(() => {
    setRecipes(mockdata);

    console.log("Use effect works");
  }, []);

  return (
    <>
      {/* FIRST CARD */}
      <div className="card-container">
        {recipes.map((recipe) => (
          <div>
            {/* Still deciding if I want entire card to be link */}
            <article className="card">
              <img src={recipe.image} alt="test" />
              <div className="card-content">
                <a href="/recipe">
                  <h1 className="card-title">{recipe.title}</h1>
                </a>
                <p className="card-description">{recipe.blerb}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}

export default Discover;
