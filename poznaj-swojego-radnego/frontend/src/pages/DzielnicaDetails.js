import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { supabase } from '../supabaseClient';
import '../assets/styles/DzielnicaDetails.css';

const DzielnicaDetails = () => {
  const { dzielnica } = useParams();
  const [radni, setRadni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRadni = async () => {
      const { data, error } = await supabase
        .from('radni')
        .select('*')
        .ilike('position', `%${dzielnica}%`);

      if (!error) {
        setRadni(data);
      }
      setLoading(false);
    };

    fetchRadni();
  }, [dzielnica]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <h1>Radni dzielnicy {dzielnica.charAt(0).toUpperCase() + dzielnica.slice(1)}</h1>
      <Row>
        {radni.map((radny) => (
          <Col key={radny.id} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={radny.photo_url || 'https://picsum.photos/200'} />
              <Card.Body>
                <Card.Title>{radny.first_name} {radny.last_name}</Card.Title>
                <Card.Text>{radny.position}</Card.Text>
                <Card.Text>{radny.party}</Card.Text>
                <Button as={Link} to={`/radny/${radny.id}`} variant="primary">Więcej</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DzielnicaDetails;
