
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_BASE_URL;
  const endpoint = "/api/auth/login/local";

  const handleLogin = (e) => {
    e.preventDefault();
    const body = {
      // email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

console.log(body)


    setIsLoading(true);

    fetch(`${url}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
          console.log("Full result:", result); // This will show you the actual structure
  console.log("result.data:", result.data);
  console.log("result.data.newUser:", result.data?.newUser);
        localStorage.setItem("user", JSON.stringify(result.data.newUser));
        setUser(result.data.newUser);
        navigate("../admin");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  
  return (
    <div className="form-wrapper">
      <img
        className="footer-logo"
        src="public/images/sp-logo.svg"
        alt="White and Red CodeSquad.org logo"
      />
      <div>
        {/*------------------------Login Form-----------------------------------*/}
        <form onSubmit={handleLogin} className="login-form">
          <div className="flex-input">
            <label htmlFor="username" />Username
            <input
              type="text"
              placeholder="username"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="flex-input">
            <label htmlFor="password" /> Password
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </div>
          {/* using index.html as a placeholder for the button */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logining in ..." : "Login"}
          </button>
          
          {error && <p>There is an error: {error}</p>}
        </form>
        <div>
        <p> No account please <Link to="/signup">register</Link> </p>
        </div>
      </div>
    </div> 
  );
}

export default Login;
