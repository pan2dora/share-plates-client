function Login() {


  
    return (
      <div className="form-wrapper">
      <img
        className="footer-logo"
        src="public/images/sp-logo.svg"
        alt="White and Red CodeSquad.org logo"
      />
      <div>
        {/*------------------------Login Form-----------------------------------*/}
        <form className="login-form">
          <div className="flex-input">
            <label htmlFor="username" /> Username
            <input type="text" placeholder="Username" />
          </div>
          <div className="flex-input">
            <label htmlFor="password" /> Password
            <input type="text" placeholder="Password" />
          </div>
          {/* using index.html as a placeholder for the button */}
          <input
            className="flex"
            type="button"
            defaultValue="Login"
            onclick="window.location.href='index.html'"
          />
        </form>
        <div className="login-checkbox">
          <div>
            <input type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
          <div>
            <a href="#">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
    
    )
  }

  export default Login;