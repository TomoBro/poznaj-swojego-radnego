// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { supabase } from '../supabaseClient';
// import { Container, Card } from 'react-bootstrap';
// import '../assets/styles/RadnyDetails.css';

// const RadnyDetails = () => {
//   const { id } = useParams();
//   const [radny, setRadny] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRadny = async () => {
//       console.log('Fetching radny with id:', id);
//       const { data, error } = await supabase
//         .from('radni')
//         .select('*')
//         .eq('id', id)
//         .single();

//       if (error) {
//         setError(error);
//         console.error('Error fetching radny:', error);
//       } else {
//         setRadny(data);
//         console.log('Fetched radny data:', data);
//       }
//       setLoading(false);
//     };

//     fetchRadny();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!radny) {
//     return <div>No data found</div>;
//   }

//   return (
//     <Container className="mt-5">
//       <Card>
//         <Card.Img variant="top" src={radny.photo_url || 'https://picsum.photos/200'} alt={`${radny.first_name} ${radny.last_name}`} />
//         <Card.Body>
//           <Card.Title>{radny.first_name} {radny.last_name}</Card.Title>
//           <Card.Text>{radny.description || 'Brak opisu'}</Card.Text>
//           <Card.Text><strong>Stanowisko:</strong> {radny.position || 'Brak danych'}</Card.Text>
//           <Card.Text><strong>Partia:</strong> {radny.party || 'Brak danych'}</Card.Text>
//           <Card.Text><strong>Email:</strong> <a href={`mailto:${radny.email}`}>{radny.email || 'Brak danych'}</a></Card.Text>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default RadnyDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/RadnyDetails.css';

const RadnyDetails = () => {
  const { id } = useParams();
  const [radny, setRadny] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRadny = async () => {
      const { data, error } = await supabase
        .from('radni')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError(error);
      } else {
        setRadny(data);
      }
      setLoading(false);
    };

    fetchRadny();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!radny) {
    return <div>No data found</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Img variant="top" src={radny.photo_url || 'https://picsum.photos/200'} alt={`${radny.first_name} ${radny.last_name}`} />
            <Card.Body>
              <Card.Title>{radny.first_name} {radny.last_name}</Card.Title>
              <Card.Text>{radny.description || 'Brak opisu'}</Card.Text>
              <Card.Text><strong>Stanowisko:</strong> {radny.position || 'Brak danych'}</Card.Text>
              <Card.Text><strong>Partia:</strong> {radny.party || 'Brak danych'}</Card.Text>
              <Card.Text><strong>Email:</strong> <a href={`mailto:${radny.email}`}>{radny.email || 'Brak danych'}</a></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='side-cards'>
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Głosowania</Card.Title>
              {/* <Card.Text>Informacje</Card.Text> */}
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
      
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Interpelacje</Card.Title>
              {/* <Card.Text>Informacje</Card.Text> */}
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
        
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Oświadczenia majątkowe</Card.Title>
              {/* <Card.Text>Informacje</Card.Text> */}
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RadnyDetails;
