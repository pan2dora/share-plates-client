import { useState } from "react";

function Create() {
  // manages form inputs
  const [newRecipe, setNewRecipe] = useState({
    recipe: "",
    image: "",
    about: "",
    items: [],
    price: "",
    instructions: [],
  });
  // Handle submit
  // This state sets the id for items since everyone must be unique

  // does the same thing for instructions
  const [countInstructions, setCountInstructions] = useState(0);
  // Working on logic for this image state that will eventually render image previews
  // const [image, setImage] = useState("")
  // These two states handle the ingredient list
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // These two states handle the Instructions list
  const [newInstruction, setNewInstruction] = useState("");
  const [instructions, setInstructions] = useState([]);

  //handles the changes for each of the inputs
  const handlenewRecipes = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("Value in handle Change:", value, name);
    setNewRecipe((prevRecipeData) => ({ ...prevRecipeData, [name]: value }));
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault(console.log("Submitted"));

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const endpoint = "/api/recipes/new/create";

    fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => {
        return console.log(error);
      });
  };

  const recipeToSubmit = {
    ...newRecipe,
    items: items,
    instructions: instructions,
  };
console.log("Recipe to submit:", recipeToSubmit)
  console.log("form data:", newRecipe);

  //Handle ingredients list
  const handleListSubmit = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, { title: newItem }];
    });
  };

  //For later refractoring with filtering
  // const handleListRemove = (id) => {
  //   setItems((prevItems) => prevItems.filter((item) => item !== item));
  // };

  const handleInstructionsubmit = (e) => {
    e.preventDefault();
    setCountInstructions((prevCount) => prevCount + 1);
    setInstructions((prevItems) => {
      return [
        ...prevItems,
        { id: countInstructions + 1, title: newInstruction },
      ];
    });
  };

  // Create Image preview

  console.log("Items:", items);
  console.log("Instructions:", instructions);
  console.log("Form Data:", newRecipe);

  return (
    <>
      <div className="create-form-header">
        <h1>Add Recipe</h1>
      </div>

      <div className="form-wrapper">
        <div className="create-form-blerb">
          {/* <h2>Add your favorite recipe and share it with community!</h2> */}
        </div>
        <form onSubmit={handleSubmit} className="create-form">
          {/* RECIPE NAME */}
          <div className="flex-input">
            <label htmlFor="recipe">Recipe Title</label>
            <input
              type="text"
              name="recipe"
              id="recipe"
              value={newRecipe.recipe}
              placeholder="What's your recipes name?"
              onChange={handlenewRecipes}
            />
          </div>
          {/* IMAGE UPLOAD */}
          {/* I want the image to display as a preview */}
          <div className="flex-input">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              value={newRecipe.image}
              onChange={handlenewRecipes}
            />
          </div>
          <div>
            <img src="{image}" alt="preview image" />
          </div>
          {/* BLERB */}
          <div className="flex-input">
            <label htmlFor="about">Description</label>
            <textarea
              type="text"
              name="about"
              id="about"
              value={newRecipe.about}
              onChange={handlenewRecipes}
              placeholder="Tell us a story about your recipe"
            />
          </div>
          {/* SHOPPING LIST */}
          {/* Use state to update this  */}
          <div className="flex-input">
            <label htmlFor="items">Ingredients</label>
            <input
              value={newItem}
              type="text"
              name="items"
              id="items"
              placeholder="Add an ingredient"
              onChange={(e) => setNewItem(e.target.value)}
            />

            <button onClick={handleListSubmit} className="items-btn">
              +
            </button>
            {/* Figure out ui for  */}
            <ul className="shopping-list">
              {items.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
            </ul>
          </div>
          {/* This will eventually be connected to the ingredients but will work on this in the backend because I need to add all the values */}
          <div className="flex-input">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={newRecipe.price}
              placeholder="$"
              onChange={handlenewRecipes}
            />
          </div>
          {/* INSYRUCTIONS */}
          <div className="flex-input">
            <label htmlFor="instructions">Instructions</label>
            <input
              value={newInstruction}
              type="text"
              name="instructions"
              id="instructions"
              onChange={(e) => setNewInstruction(e.target.value)}
            />

            <button onClick={handleInstructionsubmit} className="items-btn">
              +
            </button>

            {/* Figure out ui for  */}
            <ul className="instructions">
              {instructions.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.title}</li>;
              })}
            </ul>
            {/* <button className="btn-delete">-</button> */}
          </div>

          {/* FILTERS */}
          {/* <div className="flex-input">
            <label htmlFor="diet">Tags</label>
            <input type="text" name="diet" id="diet" onChange={handlenewRecipes} />
          </div> */}
          {/* Eventually this will be where people can input various dietary tags */}
          {/* SUBMIT BUTTON */}
          <button onClick={handleSubmit} type="submit">
            Create Recipe
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
