import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./components/About.jsx";
import Admin from "./components/Admin.jsx";
import Create from "./components/Create.jsx";
import Discover from "./components/Discover.jsx";
import Login from "./components/Login.jsx";
import Recipe from "./components/Recipe.jsx";
import Signup from "./components/Signup.jsx";
import Update from "./components/Update.jsx";
import Footer from "./shared/Footer.jsx";
import Header from "./shared/Header.jsx";

import { useState } from "react";

function App() {
  // source : https://react-bootstrap.netlify.app/docs/components/modal
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <>
      <header>
        <Header user={user} setUser={setUser} />
      </header>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />

        <Route
          path="/login"
          element={<Login />}
          user={user}
          setUser={setUser}
        />
        <Route path="/recipe/:_id" element={<Recipe />} />
        <Route
          path="/signup"
          element={<Signup />}
          user={user}
          setUser={setUser}
        />
        <Route path="/update/:_id" element={<Update />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
