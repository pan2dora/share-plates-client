function Home() {
    return (
      <>
  {/* FIRST CARD */}
  <div className="card-container">
    {/* Still deciding if I want entire card to be link */}
    <a href="update.html">
      <article className="card">
        <img src="public/images/placeholder.png" alt="test" />
        <div className="card-content">
          <h1 className="card-title">Recipe</h1>
          <p className="card-description">Blerb goes header</p>
        </div>
      </article>
    </a>
    {/* SECOND CARD */}
    <a href="#">
      <article className="card">
        <img src="public/images/placeholder.png" alt="test" />
        <div className="card-content">
          <h1 className="card-title">Recipe</h1>
          <p className="card-description">Blerb goes header</p>
        </div>
      </article>
    </a>
    {/* THIRD CARD*/}
    <a href="#">
      <article className="card">
        <img src="public/images/placeholder.png" alt="test" />
        <div className="card-content">
          <h1 className="card-title">Recipe</h1>
          <p className="card-description">Blerb goes header</p>
        </div>
      </article>
    </a>
    {/* FOURTH CARD */}
    <a href="#">
      <article className="card">
        <img src="public/images/placeholder.png" alt="test" />
        <div className="card-content">
          <h1 className="card-title">Recipe</h1>
          <p className="card-description">Blerb goes header</p>
        </div>
      </article>
    </a>
    {/* FIFTH CARD */}
    <a href="#">
      <article className="card">
        <img src="public/images/placeholder.png" alt="test" />
        <div className="card-content">
          <h1 className="card-title">Recipe</h1>
          <p className="card-description">Blerb goes header</p>
        </div>
      </article>
    </a>
    {/* SIXTH CARD */}
    <a href="#">
      <article className="card">
        <img src="public/images/placeholder.png" alt="test" />
        <div className="card-content">
          <h1 className="card-title">Recipe</h1>
          <p className="card-description">Blerb goes header</p>
        </div>
      </article>
    </a>
  </div>
</>

    )
  }

  export default Home;