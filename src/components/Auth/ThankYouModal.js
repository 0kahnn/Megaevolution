import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import thankYou from "../../assets/images/thank_you.png";
const ThankYouModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="auth-modal blue-bar">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={thankYou} className="thankyou-image mt-4" />
          <h4 className="mt-4">Thank You For Signing Up!</h4>

          <button
            className="buttons btn-yellow ps-4 pe-4 mt-4"
            onClick={handleClose}
          >
            Okay
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ThankYouModal;
