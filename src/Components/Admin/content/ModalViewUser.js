import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalViewUser = (props) => {
  const { show, setShow, dataView } = props;

  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setRole("USER");
    setPassword("");
    setUsername("");
    setImage("");
    setPreviewImage("");
    props.resetUpdateData();
  };

  useEffect(() => {
    if (!_.isEmpty(dataView)) {
      setEmail(dataView.email);
      setRole(dataView.role);
      setUsername(dataView.username);
      if (dataView.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
      }
    }
  }, [dataView]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>View A User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                disabled
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <input
                type="email"
                className="form-control"
                value={role}
                disabled
                onChange={(event) => setRole(event.target.value)}
              />

              {/* <select className="form-select">
                <option
                  defaultValue="USER"
                  onChange={(event) => setRole(event.target.value)}
                >
                  USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select> */}
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
