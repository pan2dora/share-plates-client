function Footer() {
    return (
        <>
        {/*-------------------------------Footer -------------------------------*/}
        <footer>
          {/*--------------------------- Logo -------------------------------*/}
          <img
            className="footer-logo"
            src="public/images/share-tra.svg"
            alt="Animation of a plate with Share Plate scripted within"
          />
          {/*------------------  SOCIAL LINKS ----------------------------------*/}
          <div className="social-links">
            <h2>FOLLOW US</h2>
            <div className="footer-icons" />
            <ul>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok" />
              </a>
              <a href="#">
                <i className="fa-brands fa-bluesky" />
              </a>
            </ul>
          </div>
          {/* WEBPAGE LINKS */}
          <div className="footer-links">
            <h2>LINKS</h2>
            <ul>
              <a href="index.html">
                <li>Home</li>
              </a>
              <a href="about.html">
                <li>About</li>
              </a>
              <a href="login.html">
                <li>Login</li>
              </a>
            </ul>
          </div>
          {/* PRODUCT OF/BRANDING ICON */}
          {/* Will add back later */}
          {/* <div class="product-of"> 
       <h2>A PRODUCT OF</h2>
       
      
           </div> */}
        </footer>
        {/*-------------------------------Footer end -------------------------------*/}
      </>
      
    )
  }

  export default Footer;