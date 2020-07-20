import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function CountryStatModal(props) {
  const [show, setShow] = useState(false);
  const [stats, setStats] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const key = props.id;
  const nation = props.value;

  console.log(key);

  useEffect(() => {
    axios.get(`https://www.trackcorona.live/api/countries/${key}`)
      .then(results => {
        setStats({
          country_code: results.data.data[0].country_code,
          confirmed: results.data.data[0].confirmed,
          recovered: results.data.data[0].recovered,
          dead: results.data.data[0].dead,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const values = Object.values(stats);
  return (
    <>
      <Button id={key} variant="success" onClick={handleShow}>
        Check Statistics
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            Covid-19 Numbers for
            {' '}
            {nation}
            :
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
                <td>{values[1]}</td>
              </tr>
              <tr className="bg-success">
                <th scope="row">Recovered:</th>
                <td>{values[2]}</td>
              </tr>
              <tr className="bg-danger">
                <th scope="row">Deaths:</th>
                <td>{values[3]}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Go Back
          </Button>
          <Button variant="success" onClick={handleClose}>
            Get live results
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default CountryStatModal;
