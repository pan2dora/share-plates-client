import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Update from "./Update";

function Admin() {
  const [recipes, setRecipes] = useState([]);
  const [recipeCard, setRecipeCard] = useState(null);
  const [show, setShow] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const endpoint = "/api/recipes";
  console.log(recipes);
  //Random assortment of recipes, later will be randomize based on users filters
  useEffect(() => {
    fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result.success.message);
        setRecipes(result.data.recipes);
      })
      .catch(console.log("error:"));
  }, [API_BASE_URL]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModal = (recipeObject) => {
    if (!recipeObject || !recipeObject._id) {
      console.log("modal and id error");
    }

    setRecipeCard(recipeObject);
    handleShow();
  };
  console.log(recipeCard);

  const handleDelete = (recipe) => {
    console.log("Deleting", recipe);
    fetch(`${API_BASE_URL}${endpoint}/delete/${recipe._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", result.success.message))
      .catch(console.log("error"));
  };

  return (
    <>
      {/* <Button onClick={() => handleModal()}>Edit Profile</Button> */}
      {/* <Profile show={show} handleClose={handleClose} /> */}
     
      <div className="card-wrapper">
        {recipes.map((recipe) => (
          <Row key={recipe._id}>
            <Col>
              <Card className="card">
                <Card.Img
                  className="card-image"
                  src={recipe.image}
                  alt="Image of food"
                />

                <Card.Body className="card-content">
                  <Link to={`/recipe/${recipe._id}`}>
                    <Card.Title>{recipe.recipe}</Card.Title>
                  </Link>
                  <Card.Text>{recipe.about}</Card.Text>
                </Card.Body>
                <div className="admin-btn-container">
                <Button  className="admin-btn" onClick={() => handleModal(recipe)}>Edit</Button>

                <Button className="admin-btn" onClick={() => handleDelete(recipe)}>Delete</Button></div>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
      <Update show={show} handleClose={handleClose} recipes={recipeCard} />
    </>
  );
}

export default Admin;
