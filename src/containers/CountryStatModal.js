import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

function CountryStatModal(props) {
  const [show, setShow] = useState(false);
  const [stats, setStats] = useState({});
  const [error, setError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = props;
  const { value } = props;

  useEffect(() => {
    axios.get(`https://www.trackcorona.live/api/countries/${id}`)
      .then(results => {
        setStats({
          ...stats,
          country_code: results.data.data[0].country_code,
          confirmed: results.data.data[0].confirmed,
          recovered: results.data.data[0].recovered,
          dead: results.data.data[0].dead,
        });
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  const values = Object.values(stats);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Check Statistics
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="zulu">
            Covid-19 Numbers for
            {' '}
            {value}
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
                <td>
                  {values[1]}
                  {' '}
                  {error}
                </td>
              </tr>
              <tr className="bg-success">
                <th scope="row">Recovered:</th>
                <td>
                  {values[2]}
                  {' '}
                  {error}
                </td>
              </tr>
              <tr className="bg-danger">
                <th scope="row">Deaths:</th>
                <td>
                  {values[3]}
                  {' '}
                  {error}
                </td>
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

CountryStatModal.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CountryStatModal;
