import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SouthAmerica from '../continents/SouthAmerica';
import continents from '../../helpers/containers/continentsNames';

function SouthAmericanModal() {
  const southAmerica = continents[5];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {southAmerica}
        &apos;s
        stats per country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {' '}
            {southAmerica}
            &apos;s
            stats per country
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SouthAmerica />
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

export default SouthAmericanModal;
