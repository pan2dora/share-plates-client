import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function Create({ show, handleClose }) {
  // manages form inputs
  const [newRecipe, setNewRecipe] = useState({
    recipe: "",
    image: "",
    about: "",
    items: [],
    price: "",
    instructions: [],
  });

  // file upload: resource Cosden Solutions on youtube - File upload and https://www.geeksforgeeks.org/reactjs/how-to-upload-image-and-preview-it-using-reactjs/

  const [countInstructions, setCountInstructions] = useState(0);
  // These two states handle the ingredient list
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // These two states handle the Instructions list
  const [newInstruction, setNewInstruction] = useState("");
  const [instructions, setInstructions] = useState([]);
  // images
  const [newFile, setFile] = useState();

  //   const handleNewImage = (e) => {
   
  //   const file = e.target.files[0]
  //   const reader = new FileReader()
  //   reader.onload = () =>{
  //     setFile(reader.result)
      
  //   }
  //   reader.readAsDataURL(file)
  // };

  // images done
  const handleNewRecipes = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("Value in handle Change:", value, name);
    setNewRecipe((prevRecipeData) => ({ ...prevRecipeData, [name]: value }));
  };

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted")
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
    console.log("new file", newFile);
    const recipeToSubmit = {
      ...newRecipe,
      items: newItem,
      instructions: newInstruction,
      // image: "newFile",
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
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add your Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="create-form-header">
          <h1>Add Recipe</h1>
        </div> */}

          {/* <div className="form-wrapper">
          <div className="create-form-blerb">
            {/* <h2>Add your favorite recipe and share it with community!</h2> */}
          {/* </div> */}
          <Form onSubmit={handleSubmit} className="create-form">
            {/* RECIPE NAME */}
            <Container>
              <Form.Group>
                <Form.Label htmlFor="recipe">Recipe Title</Form.Label>
                <Form.Control
                  type="text"
                  name="recipe"
                  id="recipe"
                  value={newRecipe.recipe}
                  placeholder="What's your recipes name?"
                  onChange={handleNewRecipes}
                  autoFocus
                />
              </Form.Group>
            </Container>

            <Form.Group>
              <Form.Label htmlFor="image">Upload Image</Form.Label>
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Control
                      type="text"
                      name="image"
                      id="image"
                      onChange={handleNewRecipes}
                    />
                  </Col>
                  <Col xs={3} md={2}>
                    {!newRecipe.image? (
                      <img
                        className="preview-image"
                        src={newRecipe.image}
                        alt="preview image"
                      />
                    ) : (
                     newRecipe.image && (
                        <img
                          src={newRecipe.image}
                          alt="Uploaded preview"
                          className="preview-image"
                        />
                      )
                    )}
                  </Col>
                </Row>
              </Container>{" "}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="about">About</Form.Label>
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Control
                      as="textarea"
                      type="textarea"
                      name="about"
                      id="about"
                      value={newRecipe.about}
                      onChange={handleNewRecipes}
                      placeholder="Tell us a story about your recipe"
                    />
                  </Col>
                </Row>
              </Container>{" "}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="ingredients">Ingredients</Form.Label>
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Control
                      value={newItem}
                      type="text"
                      name="items"
                      id="items"
                      placeholder="Add an ingredient"
                      onChange={(e) => setNewItem(e.target.value)}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Button
                      type="button"
                      onClick={handleListSubmit}
                      className="items-btn"
                    >
                      +
                    </Button>
                    <ul className="shopping-list">
                      {items.map((item) => {
                        return <li key={item.id}>{item.title}</li>;
                      })}
                    </ul>
                  </Col>
                </Row>
              </Container>
              <Form.Label htmlFor="ingredients">Instructions</Form.Label>
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Control
                      value={newInstruction}
                      type="text"
                      name="instructions"
                      id="instructions"
                      onChange={(e) => setNewInstruction(e.target.value)}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Button
                      type="button"
                      onClick={handleInstructionsubmit}
                      className="items-btn"
                    >
                      +
                    </Button>
                    <ol className="instructions">
                      {instructions.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.title}</li>;
                      })}
                    </ol>
                  </Col>
                </Row>
              </Container>
              <Form.Label htmlFor="price">Price</Form.Label>
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Control
                      type="number"
                      name="price"
                      id="price"
                      value={newRecipe.price}
                      placeholder="$"
                      onChange={handleNewRecipes}
                    />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            {/* IMAGE UPLOAD */}
            {/* I want the image to display as a preview */}
            {/* <div className="flex-input">
              <h2>Upload a image</h2>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleNewImage}
              />
            </div>
            <div> */}
            {/* source : lectures & https://legacy.reactjs.org/docs/conditional-rendering.html */}
            {/* {!newFile ? (
                <img
                  src="src/assets/images/placeholder.png"
                  alt="preview image"
                />
              ) : (
                newFile && <img src={newFile} alt="Uploaded preview" />
              )}
            </div> */}
            {/* BLERB */}
            {/* <div className="flex-input">
              <label htmlFor="about">Description</label>
              <textarea
                type="text"
                name="about"
                id="about"
                value={newRecipe.about}
                onChange={handleNewRecipes}
                placeholder="Tell us a story about your recipe"
              />
            </div> */}
            {/* SHOPPING LIST */}
            {/* Use state to update this  */}
            {/* <div className="flex-input">
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
              </button> */}
            {/* Figure out ui for  */}
            {/* <ul className="shopping-list">
                {items.map((item) => {
                  return <li key={item.id}>{item.title}</li>;
                })}
              </ul>
            </div> */}
            {/* This will eventually be connected to the ingredients but will work on this in the backend because I need to add all the values */}
            {/* <div className="flex-input">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                value={newRecipe.price}
                placeholder="$"
                onChange={handleNewRecipes}
              />
            </div> */}
            {/* INSYRUCTIONS */}
            {/* <div className="flex-input">
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
              </button> */}

            {/* Figure out ui for  */}
            {/* <ol className="instructions">
                {instructions.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.title}</li>;
                })}
              </ol>
            </div> */}

            {/* SUBMIT BUTTON */}
            {/* <button type="submit">Create Recipe</button> */}
          </Form>

          {/* </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Create;
