import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  // function handleText(e){
  // console.log(e.target.value)
  // }
  // const navigate = useNavigate();
  const [recipes, setRecipes] = useState({});
  const url = import.meta.env.VITE_API_BASE_URL;
  const endpoint = "/api/recipes";
  const { _id } = useParams();
  console.log(useParams());

  // console.log("ids:", params.recipes)
  useEffect(() => {
    fetch(`${url}${endpoint}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        console.log("Update Sucess:", result.success.message);
      })
      .catch((error) => console.log("Error:", error.message));
  });

  return (
    <>
      {/* Test */}
      {/* {props.tasks.map((task) => (
        <ul key={task.id}>
          <li>Task {task.title}</li>
          <li>Status:{task.title}</li>
        </ul>
      ))} */}

      <div>Update</div>

      <div className="form-wrapper">
        <form className="create-form">
          {/* RECIPE NAME */}
          <div className="flex-input">
            <label htmlFor="recipe">Recipe</label>
            <input type="text" />
          </div>
          {/* IMAGE UPLOAD */}
          <div className="flex-input">
            <label htmlFor="image">Image</label>
            <input type="file" />
          </div>
          {/* BLERB */}
          <div className="flex-input">
            <label htmlFor="about">About Recipe</label>
            <input type="text" />
          </div>
          {/* SHOPPING LIST */}
          <div className="flex-input">
            <label htmlFor="items">Shopping List</label>
            <input type="text" />
          </div>
          <div className="flex-input">
            <label htmlFor="items-price">Price</label>
            <input type="number" />
          </div>
          {/* INSYRUCTIONS */}
          <div className="flex-input">
            <label htmlFor="">Instructions</label>
            <input type="text" />
          </div>
          {/* FILTERS */}
          <div className="flex-input">
            <label htmlFor="diet">Diet</label>
            <input type="" />
          </div>
          {/* Eventually this will be where people can input various dietary tags */}
          {/* SUBMIT BUTTON */}
          <input type="button" defaultValue="Update" />
        </form>
      </div>
    </>
  );
}

export default Update;
