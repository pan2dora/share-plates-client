import { Link, Routes } from "react-router-dom";
import Search from "../components/Search";
import Logo from "../assets/images/Share.svg";
import Create from "../components/Create";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Header() {
  //Create state to pass as prop to search component using destructuring
  const [search, setSearch] = useState("");
  // source: https://react-bootstrap.netlify.app/docs/components/modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModal = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <>
      {/* <!-- Header & Primary Nav container --> */}
      <div className="navbar-container">
        <header>
          {/* <!--  Hambuger --> */}
          <a href="#">
            <i className="fa-solid fa-bars"></i>
          </a>
          {/* <!-----------------------------Logo ------------------------------------------> */}
          <img
            src={Logo}
            alt="Animation of plate with share plate in the middle"
            className="nav-logo"
          />
          {/* <!-- Start of Primary Navbar --> */}

          <nav className="primary-navigation">
            {/* <!-----------------------------Navbar Links------------------------------------------> */}
            <ul className="nav-links">
              <li>
                <Link to="/discover">Discover</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* Add logic for if the user is logged in or not, if logged in display Profile if not display login */}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="dropdown">
                {/* replace profile link with image */}
                {/* <div></div> */}
                <a href="#" className="dropbtn">
                  Profile
                  <i className="fa-solid fa-caret-down"></i>
                </a>

                <div className="dropdown-content">
                  <Link to="/admin">Profile</Link>

                  <Link to="#" onClick={handleModal}>
                    Create
                  </Link>
                  <Link to="/logout">Logout</Link>

                  {/* <a href="#">Fav Recipes</a> */}
                </div>
              </li>
            </ul>
            <Create show={show} handleClose={handleClose} />
          </nav>

          {/* <!-----------------------------Search ------------------------------------------> */}

          <div className="search">
            {/* <input type="text" className="search-bar" placeholder="Search..." /> */}
            <Search search={search} setSearch={setSearch} />

            {/* <!-- Search Icon --> */}
            {/* {/* <i className="fa-solid fa-magnifying-glass"></i> */}
          </div>

          {/* <!-- Profile Icon - This will eventually become a drop down--> */}
          <div>
            <a href="/admin">
              <i className="fa-solid fa-circle-user"></i>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
