import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { supabase } from '../supabaseClient';

const AddRadny = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [party, setParty] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('radni')
      .insert([{ first_name: firstName, last_name: lastName, position, party, email, photo_url: photoUrl, description }]);

    if (error) {
      alert('Error adding radny');
    } else {
      alert ('Radny added successfully');
      // Clear form fields
      setFirstName('');
      setLastName('');
      setPosition('');
      setParty('');
      setEmail('');
      setPhotoUrl('');
      setDescription('');
    }
  };

  return (
    <Container className="mt-5">
      <h1>Dodaj nowego radnego</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>Imię</Form.Label>
          <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formPosition">
        <Form.Label>Stanowisko</Form.Label>
          <Form.Control 
            as="select" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)} 
            required
          >
            <option value="">Wybierz...</option>
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

        <Form.Group controlId="formParty">
          <Form.Label>Partia</Form.Label>
          <Form.Control type="text" value={party} onChange={(e) => setParty(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formPhotoUrl">
          <Form.Label>Link do zdjęcia</Form.Label>
          <Form.Control type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Opis</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Dodaj radnego</Button>
      </Form>
    </Container>
  );
};

export default AddRadny;
