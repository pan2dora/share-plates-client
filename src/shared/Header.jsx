import { Link } from "react-router-dom";

function Header() {
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
            src="public/images/Share.svg"
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
              <li class="dropdown">
                {/* replace profile link with image */}
                <div></div>
                <a href="#" class="dropbtn">
                  Profile
                 
               <i class="fa-solid fa-caret-down"></i>
                </a>
                 
                <div class="dropdown-content">
                  <Link to="/admin">Profile</Link>
                  <Link to="/create">Create</Link>
                  <Link to="/logout">Logout</Link>
                  
                  {/* <a href="#">Fav Recipes</a> */}
                  
                </div>
              </li>
             
            </ul>
          </nav>

          {/* <!-----------------------------Search ------------------------------------------> */}

          <div className="search">
            <input type="text" className="search-bar" placeholder="Search..." />
            {/* <!-- Search Icon --> */}
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          {/* <!-- Profile Icon - This will eventually become a drop down--> */}
          <div>
            <a href="admin.html">
              <i className="fa-solid fa-circle-user"></i>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
