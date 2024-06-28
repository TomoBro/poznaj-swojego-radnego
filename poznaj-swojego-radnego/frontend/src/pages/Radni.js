import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRadni } from '../features/radni/radniSlice';
import RadnyCard from '../components/RadnyCard';
import AddRadnyModal from '../components/AddRadnyModal';
import '../assets/styles/Radni.css';
import { Link } from 'react-router-dom';

const Radni = () => {
  const dispatch = useDispatch();
  const radni = useSelector((state) => state.radni.radni);
  const radniStatus = useSelector((state) => state.radni.status);
  const error = useSelector((state) => state.radni.error);

  const [filter, setFilter] = useState({ party: '', position: '' });
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    if (radniStatus === 'idle') {
      dispatch(fetchRadni());
    }
  }, [radniStatus, dispatch]);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredRadni = radni.filter((radny) => {
    return (
      (filter.party === '' || radny.party === filter.party) &&
      (filter.position === '' || radny.position === filter.position)
    );
  });

  const handleRadnyAdded = (newRadny) => {
    dispatch(fetchRadni()); // refresh the list
  };

  return (
    <Container>
      <Row className="mt-5 filter-container">
        <Col md={4}>
          <Form.Group controlId="partyFilter">
            <Form.Label className="filter-label">Filtruj według partii</Form.Label>
            <Form.Control
              as="select"
              name="party"
              value={filter.party}
              onChange={handleFilterChange}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="">Wszystkie</option>
              <option value="LEWICA">LEWICA</option>
              <option value="KO">KO</option>
              <option value="PIS">PIS</option>
              <option value="PSL">PSL</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="positionFilter">
            <Form.Label className="filter-label">Filtruj według pozycji</Form.Label>
            <Form.Control
              as="select"
              name="position"
              value={filter.position}
              onChange={handleFilterChange}
              class="form-select form-select-lg mb-3" aria-label="Large select example"
            >
              <option value="">Wszystkie</option>
              <option value="Rada Miasta">Rada Miasta</option>
              <option value="Rada Dzielnicy">Rada Dzielnicy</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4} className="d-flex align-items-end">
          <Button variant="primary" onClick={() => setShowModal(true)}>Dodaj radnego</Button>
        </Col>
      </Row>
      <Row className="mt-3">
        {radniStatus === 'loading' && <div>Loading...</div>}
        {radniStatus === 'failed' && <div>Error: {error}</div>}
        {radniStatus === 'succeeded' && filteredRadni.map((radny) => (
          <Col key={radny.id} md={3} sm={6} xs={12}>
            <RadnyCard radny={radny} />
          </Col>
        ))}
      </Row>
      <AddRadnyModal 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
        onRadnyAdded={handleRadnyAdded} 
      />
    </Container>
  );
};

export default Radni;
