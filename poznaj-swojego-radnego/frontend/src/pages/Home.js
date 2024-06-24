import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col md={8} className="map-container">
          {/* Tu możesz dodać kod dla interaktywnej mapy */}
          <div className="map-placeholder">Mapa Warszawy</div>
        </Col>
        <Col md={4} className="info-cards">
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Rada Miasta</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Rady Dzielnicy</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Głosowania</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Interpelacje</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Oświadczenia</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Kontakt</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
