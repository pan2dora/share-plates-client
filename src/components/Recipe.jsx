import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const { _id } = useParams();
  console.log("Use params:", useParams());
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_API_BASE_URL;

    fetch(`${url}/api/recipes/${_id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result.success.message);
        setRecipe(result.data.recipe);
      })
      .catch(console.log("error:"));
  }, [_id]);

  console.log("Recipe data:", recipe);
  console.log("recipe id", recipe[1]);

  return (
    <div>
      <div>
        <img src="public/images/placeholder.png" alt="" />
      </div>
      <h1>{recipe.recipe}</h1>
      <img src={recipe.image} alt="picture offood" />
      <p>{recipe.about}</p>
      <section>
        <ul>
          <li>{recipe.items}</li>
        </ul>
      </section>
    </div>
  );
}

export default Recipe;
