import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Modal, Form, Toast } from 'react-bootstrap';
import { supabase } from '../supabaseClient';
import { FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/RadnyDetails.css';


const RadnyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [radny, setRadny] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const fetchRadny = async () => {
      const { data, error } = await supabase
        .from('radni')
        .select('*')
        .eq('id', id)
        .single();
      if (!error) {
        setRadny(data);
      }
      setLoading(false);
    };

    fetchRadny();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Zapobiegamy domyślnemu zachowaniu formularza
    const { error } = await supabase
      .from('radni')
      .update(radny)
      .eq('id', id);
  
    if (error) {
      setToastMessage('Błąd podczas zapisywania zmian');
    } else {
      setToastMessage('Zmiany zostały zapisane pomyślnie');
      setShowModal(false);
    }
    setShowToast(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRadny({ ...radny, [name]: value });
  };

const handleDelete = async () => {
    const { error } = await supabase
      .from('radni')
      .delete()
      .eq('id', id);

    if (error) {
      setToastMessage('Błąd podczas usuwania radnego');
    } else {
      setToastMessage('Radny został usunięty pomyślnie');
      setShowModal(false);
      navigate('/radni');
    }
    setShowToast(true);
  };

  if (loading) {
    return <div>Loading...</div>;
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
              <Card.Text><strong><FaEnvelope />:</strong> <a href={`mailto:${radny.email}`}>{radny.email || 'Brak danych'}</a></Card.Text>
              <div className="social-icons">
                <a href={`https://facebook.com/${radny.facebook}`} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href={`https://twitter.com/${radny.twitter}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href={`https://linkedin.com/in/${radny.linkedin}`} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
              
              <button class="btn btn-outline-danger mt-3" onClick={() => setShowModal(true)}>Edytuj</button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex flex-column">
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Głosowania</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Interpelacje</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4 flex-fill">
            <Card.Body>
              <Card.Title>Oświadczenia majątkowe</Card.Title>
              <Button variant="primary">Więcej</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edytuj radnego</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>Imię</Form.Label>
              <Form.Control 
                type="text" 
                name="first_name" 
                value={radny.first_name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control 
                type="text" 
                name="last_name" 
                value={radny.last_name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formPosition" className="mb-3">
              <Form.Label>Stanowisko</Form.Label>
              <Form.Control 
                as="select" 
                name="position" 
                value={radny.position} 
                onChange={handleChange} 
                required
              >
                <option value="Rada Miasta">Rada Miasta</option>
              <option value="Rada Dzielnicy Bemowo">Rada Dzielnicy Bemowo</option>
              <option value="Rada Dzielnicy Białołęka">Rada Dzielnicy Białołęka</option>
              <option value="Rada Dzielnicy Bielany">Rada Dzielnicy Bielany</option>
              <option value="Rada Dzielnicy Mokotów">Rada Dzielnicy Mokotów</option>
              <option value="Rada Dzielnicy Ochota">Rada Dzielnicy Ochota</option>
              <option value="Rada Dzielnicy Praga-Południe">Rada Dzielnicy Praga-Południe</option>
              <option value="Rada Dzielnicy Praga-Północ">Rada Dzielnicy Praga-Północ</option>
              <option value="Rada Dzielnicy Rembertów">Rada Dzielnicy Rembertów</option>
              <option value="Rada Dzielnicy Śródmieście">Rada Dzielnicy Śródmieście</option>
              <option value="Rada Dzielnicy Targówek">Rada Dzielnicy Targówek</option>
              <option value="Rada Dzielnicy Ursus">Rada Dzielnicy Ursus</option>
              <option value="Rada Dzielnicy Ursynów">Rada Dzielnicy Ursynów</option>
              <option value="Rada Dzielnicy Wawer">Rada Dzielnicy Wawer</option>
              <option value="Rada Dzielnicy Wesoła">Rada Dzielnicy Wesoła</option>
              <option value="Rada Dzielnicy Wilanów">Rada Dzielnicy Wilanów</option>
              <option value="Rada Dzielnicy Włochy">Rada Dzielnicy Włochy</option>
              <option value="Rada Dzielnicy Wola">Rada Dzielnicy Wola</option>
              <option value="Rada Dzielnicy Żoliborz">Rada Dzielnicy Żoliborz</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formParty" className="mb-3">
              <Form.Label>Partia</Form.Label>
              <Form.Control 
                type="text" 
                name="party" 
                value={radny.party} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={radny.email} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formPhotoUrl" className="mb-3">
              <Form.Label>Link do zdjęcia</Form.Label>
              <Form.Control 
                type="text" 
                name="photo_url" 
                value={radny.photo_url} 
                onChange={handleChange} 
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Opis</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="description" 
                value={radny.description} 
                onChange={handleChange} 
              />
            </Form.Group>
<div class='button-container'>
<button type="button" class="btn btn-primary" onClick={handleSubmit}>Zapisz zmiany</button>
<button type="button" class="btn btn-danger me-md-2 button-delate" onClick={handleDelete}>Usuń radnego</button>
</div>
    
          </Form>
        </Modal.Body>
      </Modal>
      <Toast 
        show={showToast} 
        onClose={() => setShowToast(false)} 
        delay={3000} 
        autohide 
        style={{ position: 'fixed', top: 20, right: 20 }}
      >
        <Toast.Header>
          <strong className="me-auto">Powiadomienie</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </Container>
  );
};

export default RadnyDetails;