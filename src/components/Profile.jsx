import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function Profile({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
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
        <input type="password" />
      </div>
      {/* IMAGE UPLOAD */}
      <div className="flex-input">
        <label htmlFor="image">Profile Photo</label>
        <input type="file" />
      </div>
      {/* SIGNUP BUTTON */}
      <input type="submit" defaultValue="Save" />
     <Button type="submit">Update</Button>
    </Modal>
  );
}
export default Profile;
