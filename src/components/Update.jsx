import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Update({ show, handleClose, recipes }) {
  const { _id } = useParams();
  console.log("Use params:", useParams());
  const [recipe, setRecipe] = useState(null);
  const currentId = recipes ? recipes._id : _id;
  const [updatedRecipe, setUpdatedRecipe] = useState({
    recipe: "",
    image: "",
    about: "",
    // items: [],
    // price: "",
    // instructions: [],
  });

  useEffect(() => {
    //Empty String if user has nothing to update
    if (recipe) {
      setUpdatedRecipe({
        recipe: recipe.recipe || "",
        image: recipe.image || "",
        about: recipe.about || "",
      });
    }
  }, [recipe]);

  const url = import.meta.env.VITE_API_BASE_URL;
  // Second fetch for put req
  useEffect(() => {
    if (!currentId) {
      console.log("error");
    }
    fetch(`${url}/api/recipes/${currentId}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result.success.message);
        setRecipe(result.data.recipe);
      })
      .catch(console.log("error:"));
  }, [currentId, url]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("Value in handle Change:", value, name);
    setUpdatedRecipe((prevRecipeData) => ({
      ...prevRecipeData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentId) {
      console.log("error, no id");
    }
    try {
      const response = await fetch(`${url}/api/recipes/update/${currentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });

      const result = await response.json();
      console.log("Success", result.success.message);
      handleClose();
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" key="recipe-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            {recipes ? `Update ${recipes.recipe}` : "Update"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="create-form" onSubmit={handleSubmit}>
            {/* RECIPE NAME */}
            {recipes ? (
              <div>
                <Container>
                  <Form.Group>
                    <Form.Label htmlFor="recipe">Recipe Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="recipe"
                      id="recipe"
                      placeholder={recipes.recipe}
                      onChange={handleUpdate}
                      autoFocus
                    />
                  </Form.Group>
                </Container>
                {/* Image and preview */}
                <Form.Group>
                  <Form.Label htmlFor="image">Upload Image</Form.Label>
                  <Container>
                    <Row>
                      <Col xs={12} md={8}>
                        <Form.Control
                          type="text"
                          name="image"
                          id="image"
                          onChange={handleUpdate}
                        />
                      </Col>
                      <Col xs={3} md={2}>
                        {!recipes.image ? (
                          <img
                            className="preview-image"
                            src={recipes.image}
                            alt="preview image"
                          />
                        ) : (
                          recipes.image && (
                            <img
                              src={recipes.image}
                              alt="Uploaded preview"
                              className="preview-image"
                            />
                          )
                        )}
                      </Col>
                    </Row>
                  </Container>{" "}
                </Form.Group>
                {/* About */}
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
                          onChange={handleUpdate}
                          placeholder={recipes.about}
                        />
                      </Col>
                    </Row>
                  </Container>{" "}
                </Form.Group>
                <Button type="submit">Update</Button>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Update;
