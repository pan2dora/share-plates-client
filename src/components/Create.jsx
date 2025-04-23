import { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    recipe: "",
    image: "",
    about: "",
    items: "",
    price: "",
    instructions: "",
    diet: "",
  });

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, { id: 1, title: newItem }];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  console.log(items);

  // console.log(formData);

  return (
    <div className="form-wrapper">
      <form className="create-form">
        {/* RECIPE NAME */}
        <div className="flex-input">
          <label htmlFor="recipe">Recipe</label>
          <input
            type="text"
            name="recipe"
            id="recipe"
            onChange={handleChange}
          />
        </div>
        {/* IMAGE UPLOAD */}
        <div className="flex-input">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" onChange={handleChange} />
        </div>
        {/* BLERB */}
        <div className="flex-input">
          <label htmlFor="about">About Recipe</label>
          <input type="text" name="about" id="about"  onChange={handleChange}/>
        </div>
        {/* SHOPPING LIST */}
        {/* Use state to update this  */}
        <div className="flex-input">
          <label htmlFor="items">Shopping List</label>
          <input
            value={newItem}
            type="text"
            name="items"
            id="items"
            onChange={(e) => setNewItem(e.target.value)}
          />

          <button onClick={handleSubmit} className="items-btn">
            +
          </button>
          {/* Figure out ui for  */}
          <ul className="shopping-list">
            {items.map((item) => {
              return <li>{item.title}</li>;
            })}
          </ul>
          <button className="btn-delete">-</button>
        </div>

        <div className="flex-input">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" />
        </div>
        {/* INSYRUCTIONS */}
        <div className="flex-input">
          <label htmlFor="">Instructions</label>
          <input type="text" name="instructions" id="instructions" />
        </div>
        {/* FILTERS */}
        <div className="flex-input">
          <label htmlFor="diet">Diet</label>
          <input type="text" name="diet" id="diet" />
        </div>
        {/* Eventually this will be where people can input various dietary tags */}
        {/* SUBMIT BUTTON */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
