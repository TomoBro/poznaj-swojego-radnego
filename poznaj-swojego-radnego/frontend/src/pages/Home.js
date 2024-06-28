import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col md={8} className="map-container">
          {/* Tu możesz dodać kod dla interaktywnej mapy */}
          <div className="map-placeholder">Mapa Warszawy</div>
        </Col>
    
        <Col md={4} className="info-cards" class="shadow p-3 mb-5 bg-body-tertiary rounded">
          <Card className="mb-4">
            <Card.Body >
              <Card.Title>Rada Miasta</Card.Title>
              <Button as={Link} to="/rada-miasta" variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Rady Dzielnicy</Card.Title>
              <Button as={Link} to="/rady-dzielnicy" variant="primary">Więcej</Button>
              </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Głosowania</Card.Title>
              <button as={Link} to="/glosowania" variant="primary">Więcej</button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Interpelacje</Card.Title>
              <Button as={Link} to="/interpelacje" variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Oświadczenia</Card.Title>
              <Button as={Link} to="/oswiadczenia" variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Kontakt</Card.Title>
              <Button as={Link} to="/kontakt" variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
