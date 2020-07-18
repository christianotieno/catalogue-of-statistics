import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Europe from '../continents/Europe';
import continents from '../../helpers/containers/continentsNames';

function EuropeanModal() {
  const europe = continents[2];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {europe}
        &apos;s
        stats per country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {' '}
            {europe}
            &apos;s
            stats per country
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Europe />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EuropeanModal;
