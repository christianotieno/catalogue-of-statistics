import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Oceania from '../continents/Oceania';
import continents from '../../helpers/containers/continentsNames';

function OceanianModal() {
  const oceania = continents[3];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {oceania}
        &apos;s
        stats per country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            {' '}
            {oceania}
            &apos;s
            stats-per-country:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Oceania />
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

export default OceanianModal;
