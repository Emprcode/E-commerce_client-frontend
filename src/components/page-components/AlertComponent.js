import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const AlertComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShow(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>aceXsports alert!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Server is running on free tire, So, might take a while to fetch
          products.
          <p> Thank you for your patient!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
