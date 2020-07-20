import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function CountryStatModal() {
  const [show, setShow] = useState(false);
  const [stats, setStats] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const id = 'US';

  useEffect(() => {
    axios.get(`https://www.trackcorona.live/api/countries/${id}`)
      .then(results => {
        setStats({
          confirmed: results.data.data[0].confirmed,
          recovered: results.data.data[0].recovered,
          dead: results.data.data[0].dead,
        });
      })
      .catch(error => {
        throw error;
      });
  }, []);

  const values = Object.values(stats);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Check Statistics
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            Covid-19 Numbers:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Statistics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-info">
                <th scope="row">Confirmed:</th>
                <td>{values[0]}</td>
              </tr>
              <tr className="bg-success">
                <th scope="row">Recovered:</th>
                <td>{values[1]}</td>
              </tr>
              <tr className="bg-danger">
                <th scope="row">Deaths:</th>
                <td>{values[2]}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default CountryStatModal;
