function Signup() {
     

    return (
      <form className="signup-form">
      {/* USERNAME */}
      <div className="flex-input">
        <label htmlFor="username">Username</label>
        <input type="text" />
      </div>
      {/* EMAIL */}
      <div className="flex-input">
        <label htmlFor="email">Email</label>
        <input type="text" />
      </div>
      {/* PASSWORD */}
      <div className="flex-input">
        <label htmlFor="password">Password</label>
        <input type="text" />
      </div>
      {/* IMAGE UPLOAD */}
      <div className="flex-input">
        <label htmlFor="image">Profile Photo</label>
        <input type="file" />
      </div>
      {/* SIGNUP BUTTON */}
      <input type="submit" defaultValue="Signup" />
    </form>
    
    )
  }

  export default Signup;