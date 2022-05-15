import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const EmailVerificationModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="auth-modal wide-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h3>Please Verify Your Email</h3>
          <p>
            Check your email at john@gmail.com and verify your account.
            <br />
            This window will automatically close once verification os completed.
          </p>
          <div className="mt-5">
            <button
              className="buttons btn-blue px-3 me-3"
              onClick={handleClose}
            >
              Resend Email
            </button>
            <button
              className="buttons btn-transparent px-3"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EmailVerificationModal;
