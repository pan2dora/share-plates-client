import Logo from "../assets/images/Share.svg";

function Footer() {
  return (
    <>
      {/*-------------------------------Footer -------------------------------*/}
      <footer>
        {/*--------------------------- Logo -------------------------------*/}
        <img
          className="footer-logo"
          src={Logo}
          alt="Animation of a plate with Share Plate scripted within"
        />
        {/*------------------  SOCIAL LINKS ----------------------------------*/}
        <div className="social-links">
          <h2>FOLLOW US</h2>
         
            <ul>
              <li>
                <a href="https://www.youtube.com/@pan2dora">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pandorab/">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-bluesky" />
                </a>
              </li>
            </ul>
         
        </div>
        {/* WEBPAGE LINKS */}
        <div className="footer-links">
          <h2>LINKS</h2>
        
            <ul>
              <li>
                <a href="/discover">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              {/* <li>
                <a href="login.html">Login</a>
              </li> */}
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
  );
}

export default Footer;
