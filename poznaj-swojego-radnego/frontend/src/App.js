import React, { useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRadni } from './features/radni/radniSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const radni = useSelector((state) => state.radni.radni);
  const radniStatus = useSelector((state) => state.radni.status);
  const error = useSelector((state) => state.radni.error);

  useEffect(() => {
    if (radniStatus === 'idle') {
      dispatch(fetchRadni());
    }
  }, [radniStatus, dispatch]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Poznaj swojego radnego</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row className="mt-5">
          {radniStatus === 'loading' && <div>Loading...</div>}
          {radniStatus === 'failed' && <div>Error: {error}</div>}
          {radniStatus === 'succeeded' && radni.map((radny) => (
            <Col key={radny.id} md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{radny.name}</Card.Title>
                  <Card.Text>
                    {radny.description}
                  </Card.Text>
                  <Button variant="primary">Więcej</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
