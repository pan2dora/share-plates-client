// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import About from './components/About.jsx';
import Admin from './components/Admin.jsx';
import Create from './components/Create.jsx';
import Discover from './components/Discover.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Recipe from './components/Recipe.jsx';
import Search from './components/Search.jsx';
import Signup from './components/Signup.jsx';
import Update from './components/Update.jsx';
import Footer from './shared/Footer.jsx';
import Header from './shared/Header.jsx';

function App() {


  return (<>
  <Header/>
  <About/>
  <Admin/>
  <Create/>
  <Discover/>
  <Home/>
  <Login/>
  <Recipe/>
  <Search/>
  <Signup/>
  <Update/>
  <Footer/>
  
  </>
  )
}

export default App;
