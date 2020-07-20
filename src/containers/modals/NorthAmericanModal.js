import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NorthAmerica from '../continents/NorthAmerica';
import continents from '../../helpers/containers/continentsNames';

function NorthAmericanModal() {
  const northAmerica = continents[4];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        {northAmerica}
        &apos;s
        stats per country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            {' '}
            {northAmerica}
            &apos;s
            stats-per-country:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NorthAmerica />
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

export default NorthAmericanModal;
