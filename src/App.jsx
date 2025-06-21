import { Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About.jsx";
import Admin from "./components/Admin.jsx";
import Create from "./components/Create.jsx";
import Discover from "./components/Discover.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Recipe from "./components/Recipe.jsx";
import Search from "./components/Search.jsx";
import Signup from "./components/Signup.jsx";
import Update from "./components/Update.jsx";
import Footer from "./shared/Footer.jsx";
import Header from "./shared/Header.jsx";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Test",
    },
    {
      id: 2,
      title: "Test2",
    },
    {
      id: 3,
      title: "Test3",
    },
  ];
  // source : https://react-bootstrap.netlify.app/docs/components/modal

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe/:_id" element={<Recipe />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update" element={<Update tasks={tasks} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
