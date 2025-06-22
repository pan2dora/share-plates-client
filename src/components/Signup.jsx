import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ user , setUser}) {
   const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const navigate = useNavigate(); 
  const url = import.meta.env.VITE_API_BASE_URL
  const endpoint = "/api/auth/register"

  const handleSignup = (e) => {
    e.preventDefault();
    
    const body = {
      firstname: e.target.firstname.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    console.log("body", body)
  setLoading(true)

fetch(`${url}${endpoint}`,{
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(body),
})
    .then((response) => response.json())
      .then((result) => {
    
        localStorage.setItem("user", JSON.stringify(result.data.newUser));
        setUser(result.data.newUser);
        navigate("../admin");
    
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }


  return (
    <form className="signup-form" onSubmit={handleSignup}>
       {/* First Name */}
      <div className="flex-input">
        <label htmlFor="firstname" >First name</label>
        <input type="text" id="firstname" name="firstname" required />
      </div>
      {/* USERNAME */}
      <div className="flex-input">
        <label htmlFor="username" >Username</label>
        <input type="text" id="username" name="username" required />
      </div>
      {/* EMAIL */}
      <div className="flex-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      {/* PASSWORD */}
      <div className="flex-input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      {/* IMAGE UPLOAD
      <div className="flex-input">
        <label htmlFor="image">Profile Photo</label>
        <input type="file" />
      </div> */}
      {/* SIGNUP BUTTON */}
      <button type="submit">{loading? "Registering" : "Register" }</button>
      {error && <p>There is an error: {error}</p>}
    </form>
  );
}

export default Signup;
