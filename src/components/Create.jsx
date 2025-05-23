import { useState } from "react";

function Create() {


  // handles the form data
  const [formData, setFormData] = useState({
    recipe: "",
    image: "",
    about: "",
    items: [],
    price: "",
    instructions: [],
    diet: "",
  });
// Handle submit

const handleSubmit = (e) => {
  e.preventDefault(console.log("Submitted"));
  const body = {
  recipe: e.target.recipe.value,
  };
}




  // This state sets the id for items since everyone must be unique
  const [count, setCount] = useState(0);
  // does the same thing for instructions
  const [countInstructions, setCountInstructions] = useState(0)
  // Working on logic for this image state that will eventually render image previews
  // const [image, setImage] = useState("")
  // These two states handle the ingredient list
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // These two states handle the Instructions list
  const [newInstruction, setNewInstruction] = useState("");
  const [instructions, setInstructions] = useState([]);

  const handleListSubmit = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    setItems((prevItems) => {
      return [...prevItems, { id: count + 1, title: newItem }];
    });
  };

  const handleInstructionsubmit = (e) => {
    e.preventDefault();
    setCountInstructions((prevCount) => prevCount + 1);
    setInstructions((prevItems) => {
      return [...prevItems, { id: countInstructions + 1, title: newInstruction }];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  // Create Image preview

  console.log("Items:", items);
console.log("Instructions:", instructions)
  console.log("Form Data:", formData);

  return (

    <div className="form-wrapper">
      <div className="create-form-header">
        <h1>Add Recipe</h1>
      </div>
    <div className="create-form-blerb">
    <h2>Add your favorite recipe and share it with community!</h2>
    </div>
      <form onSubmit={handleSubmit} className="create-form" >
        {/* RECIPE NAME */}
        <div className="flex-input">
          <label htmlFor="recipe">Recipe Name</label>
          <input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="What's your recipes name?"
            onChange={handleChange}
          />
        </div>
        {/* IMAGE UPLOAD */}
        {/* I want the image to display as a preview */}
        <div className="flex-input">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" onChange={handleChange} />
        </div>
        <div>
          <img src="{image}" alt="preview image" />
        </div>
        {/* BLERB */}
        <div className="flex-input">
          <label htmlFor="about">Description</label>
          <input type="text" name="about" id="about" onChange={handleChange} placeholder="Tell us a story about your recipe" />
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
          <button className="btn-delete">-</button>
        </div>
{/* This will eventually be connected to the ingredients but will work on this in the backend because I need to add all the values */}
        <div className="flex-input">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
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
            onChange={(e)=>setNewInstruction(e.target.value)}
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
          <button className="btn-delete">-</button>
        </div>

        {/* FILTERS */}
        <div className="flex-input">
          <label htmlFor="diet">Tags</label>
          <input type="text" name="diet" id="diet" onChange={handleChange} />
        </div>
        {/* Eventually this will be where people can input various dietary tags */}
        {/* SUBMIT BUTTON */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
