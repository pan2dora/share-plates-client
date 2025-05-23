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
                <a href="#">Login</a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropbtn">
                 Profile
                </a>
                <div class="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Create Recipe</a>
                  <a href="#">Fav Recipes</a>
                </div>
              </li>
              <li>
                <a href="discover.html">Discover</a>
              </li>
              <li>
                <a href="about.html">About</a>
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
