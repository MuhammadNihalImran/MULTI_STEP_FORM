import React from "react";
import { Modal, Button } from "react-bootstrap";

const SummaryPopup = ({ show, handleClose, formData }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Form Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p>
          <strong>Question:</strong> {formData.question}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SummaryPopup;
