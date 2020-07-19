import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Africa from '../continents/Africa';
import continents from '../../helpers/containers/continentsNames';

function AfricanModal() {
  const africa = continents[1];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        {africa}
        &apos;s
        stats per country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            {' '}
            {africa}
            &apos;s
            stats-per-country:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Africa />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close page list
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AfricanModal;
