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

  // file upload: resource Cosden Solutions on youtube - File upload

  //when this is called it checks for the file and access the first index and sets it as files state

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

  const handleNewRecipes = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    console.log("Value in handle Change:", value, name);
    setNewRecipe((prevRecipeData) => ({ ...prevRecipeData, [name]: value }));
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault(console.log("Submitted"));
    //Created a loop that loops through my array of items and instructions because I couldn't figure out how to push my data to arrays in the backend
    let newItem = [];
    for (let i = 0; i < items.length; i++) {
      console.log("Loop:", i);
      newItem.push(items[i].title);
      console.log("Does New instructions work:", newItem);
    }

    let newInstruction = [];
    for (let i = 0; i < instructions.length; i++) {
      console.log("Loop:", i);
      newInstruction.push(instructions[i].title);
      console.log("Does New instructions work:", newInstruction);
    }

    const recipeToSubmit = {
      ...newRecipe,
      items: newItem,
      instructions: newInstruction,
    };

    console.log("Recipe to submit:", recipeToSubmit);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const endpoint = "/api/recipes/create/new";

    fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeToSubmit),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => {
        return console.log(error);
      });
  };

  //Handle ingredients list
  const handleListSubmit = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, { id: prevItems.length + 1, title: newItem }];
    });
    setNewItem("");
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
    setNewInstruction("");
  };
  console.log("form data:", newRecipe);
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
              onChange={handleNewRecipes}
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
              onChange={handleNewRecipes}
              placeholder="paste an image url"
            />
          </div>
          <div>
            <img src="src/assets/images/placeholder.png" alt="preview image" />
          </div>
          {/* BLERB */}
          <div className="flex-input">
            <label htmlFor="about">Description</label>
            <textarea
              type="text"
              name="about"
              id="about"
              value={newRecipe.about}
              onChange={handleNewRecipes}
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

            <button
              type="button"
              onClick={handleListSubmit}
              className="items-btn"
            >
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
              onChange={handleNewRecipes}
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

            <button
              type="button"
              onClick={handleInstructionsubmit}
              className="items-btn"
            >
              +
            </button>

            {/* Figure out ui for  */}
            <ul className="instructions">
              {instructions.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.title}</li>;
              })}
            </ul>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </>
  );
}

export default Create;
