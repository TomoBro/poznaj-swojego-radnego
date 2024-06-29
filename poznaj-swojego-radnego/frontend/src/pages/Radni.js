import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRadni } from '../features/radni/radniSlice';
import RadnyCard from '../components/RadnyCard';
import AddRadnyModal from '../components/AddRadnyModal';
import '../assets/styles/Radni.css';


const Radni = () => {
  const dispatch = useDispatch();
  const radni = useSelector((state) => state.radni.radni);
  const radniStatus = useSelector((state) => state.radni.status);
  const error = useSelector((state) => state.radni.error);

  const [filter, setFilter] = useState({ party: '', position: '' });
  const [showModal, setShowModal] = useState(false);
  const[sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('last_name');

  useEffect(() => {
    if (radniStatus === 'idle') {
      dispatch(fetchRadni());
    }
  }, [radniStatus, dispatch]);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => { // Dodano funkcję handleSortChange
    setSortBy(e.target.value);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedRadni = [...radni].sort((a, b) => { // Zmiana: Sortowanie radnych
    const fieldA = a[sortBy].toUpperCase();
    const fieldB = b[sortBy].toUpperCase();
    if (sortOrder === 'asc') {
      return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
    } else {
      return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
    }
  });

  const filteredRadni = sortedRadni.filter((radny) => { // Zmiana: Używanie sortedRadni
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
      <Col md={3} className="d-flex align-items-end mb-3">
      <Form.Group controlId="partyFilter" className="w-100">
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
        <Col md={3} className="d-flex align-items-end mb-3">
        <Form.Group controlId="partyFilter" className="w-100">
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

        <Col md={3} className="d-flex align-items-end md-3">
        <Form.Group controlId="partyFilter" className="w-100">
            <Form.Label className="filter-label">Sortuj według</Form.Label>
            <Form.Control
              as="select"
              name="sortBy"
              value={sortBy}
              onChange={handleSortChange}
              className="filter-select"
            >
              <option value="last_name">Nazwisko</option>
              <option value="first_name">Imię</option>
              <option value="party">Partia</option>
              <option value="position">Stanowisko</option>
            </Form.Control>
          </Form.Group>
        </Col>
        </Row>
        <Col md={3} className="d-flex align-items-end mb-3">
          <Button variant="primary" onClick={() => setShowModal(true)}>Dodaj radnego</Button>
        </Col>
      
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
