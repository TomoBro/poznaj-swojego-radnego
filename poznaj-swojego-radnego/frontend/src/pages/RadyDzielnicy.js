import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/RadyDzielnicy.css';

const dzielnice = [
  "Bemowo", "Białołęka", "Bielany", "Mokotów", "Ochota", 
  "Praga-Południe", "Praga-Północ", "Rembertów", "Śródmieście", 
  "Targówek", "Ursus", "Ursynów", "Wawer", "Wesoła", 
  "Wilanów", "Włochy", "Wola", "Żoliborz"
];

const RadyDzielnicy = () => {
  return (
    <Container className="mt-5">
      <Row>
        {dzielnice.map((dzielnica, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{dzielnica}</Card.Title>
                <Button as={Link} to={`/dzielnica/${dzielnica.toLowerCase()}`} variant="primary">Więcej</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RadyDzielnicy;
