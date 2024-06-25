import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from'react-router-dom';
import '../assets/styles/RadnyCard.css'
// import RadnyDetails from '../pages/RadnyDetails';

const RadnyCard = ({ radny }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={radny.photo_url} alt={radny.last_name}/>
      <Card.Body>
        <Card.Title>{radny.first_name} {radny.last_name}</Card.Title>
        <Card.Text>
          {radny.position}
        </Card.Text>
        <Card.Text>
          {radny.party}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/radny/${radny.id}`}>Więcej</Button>
      </Card.Body>
    </Card>
  );
};

export default RadnyCard;

