import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Asia from '../continents/Asia';
import continents from '../../helpers/containers/continentsNames';

function AsianModal() {
  const asia = continents[0];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {asia}
        &apos;s
        stats per country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            {' '}
            {asia}
            &apos;s
            stats-per-country:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Asia />
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

export default AsianModal;
