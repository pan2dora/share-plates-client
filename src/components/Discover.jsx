import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function Discover() {
  const [recipes, setRecipes] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const endpoint = "/api/recipes";
  //Random assortment of recipes, later will be randomize based on users filters
  useEffect(() => {
    fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
      credintials: "included",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result.success.message);
        setRecipes(result.data.recipes);
      })
      .catch(console.log("error:"));
  }, [API_BASE_URL]);
  console.log("API URL", );
  const endpoint2 = "/api/recipe/";
  const url = `${API_BASE_URL}${endpoint2}`;
  console.log("url", `${url}`);
  console.log("Recipe object", recipes);
  console.log("recipe id", recipes._id);

  return (
    <>
      {/* <Row xs={1} md={2} className="g-4"  >
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col  key={idx}   className="card-container">
           { recipes.map((recipe) => ( <Card key={recipe._id} className="card"  >
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title className="card-content">{recipe.recipe}</Card.Title>
                <Card.Text className="card-description" >
                  {recipe.about}
                </Card.Text>
              </Card.Body>
            </Card> ))}
        </Col>
      ))}
    </Row>
  ); */}

      {/* FIRST CARD */}

     <div className="card-wrapper">

        {recipes.map((recipe) => (
          <Row key={recipe._id}>
          <Col  >
       <Card col-lg-2 className="card">  
            
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
            </Card>
          </Col></Row>

        ))}
      </div>
    </>
  );
}

export default Discover;
