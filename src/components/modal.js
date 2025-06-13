import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function MyModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btnesp"
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "red", borderColor: "red" }}
      >
        En savoir plus
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ma Fenêtre Modale</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voici le contenu de ma modale !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={() => alert("Action validée !")}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
