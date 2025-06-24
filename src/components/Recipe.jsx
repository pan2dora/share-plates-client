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
    <div className="recipe-container">  
      <div>
      </div>
      <h1>{recipe.recipe}</h1>
      <img src={recipe.image} alt="picture offood" />
      <p>{recipe.about}</p>
      <section>
        <ul>
          {/* source stackoverflow for the question mark: https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map  */}
          {recipe.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
       <section>
        <ul>
          {/* source stackoverflow for the question mark: https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map  */}
          {recipe.instructions?.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </section>
      <p>${recipe.price}</p>
    </div>
  );
}

export default Recipe;
