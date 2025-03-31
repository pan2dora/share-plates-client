function Create() {
    return (
      <div className="form-wrapper">
      <form className="create-form">
        {/* RECIPE NAME */}
        <div className="flex-input">
          <label htmlFor="recipe">Recipe</label>
          <input type="text" />
        </div>
        {/* IMAGE UPLOAD */}
        <div className="flex-input">
          <label htmlFor="image">Image</label>
          <input type="file" />
        </div>
        {/* BLERB */}
        <div className="flex-input">
          <label htmlFor="about">About Recipe</label>
          <input type="text" />
        </div>
        {/* SHOPPING LIST */}
        <div className="flex-input">
          <label htmlFor="items">Shopping List</label>
          <input type="text" />
        </div>
        <div className="flex-input">
          <label htmlFor="items-price">Price</label>
          <input type="number" />
        </div>
        {/* INSYRUCTIONS */}
        <div className="flex-input">
          <label htmlFor="">Instructions</label>
          <input type="text" />
        </div>
        {/* FILTERS */}
        <div className="flex-input">
          <label htmlFor="diet">Diet</label>
          <input type="" />
        </div>
        {/* Eventually this will be where people can input various dietary tags */}
        {/* SUBMIT BUTTON */}
        <input
          type="button"
          defaultValue="Create"
          onclick="window.location.href='discover.html'"
        />
      </form>
    </div>
    )
  }

  export default Create;