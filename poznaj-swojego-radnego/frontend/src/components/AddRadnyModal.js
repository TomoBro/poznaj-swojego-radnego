import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { supabase } from '../supabaseClient';

const AddRadnyModal = ({ show, handleClose, onRadnyAdded }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    position: '',
    party: '',
    email: '',
    photo_url: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('radni')
      .insert([formData]);

    if (error) {
      console.error('Error adding radny:', error);
    } else {
      onRadnyAdded(data[0]);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Dodaj nowego radnego</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="form-floating">
          <Form.Group controlId="formFirstName" className="mb-3">
            <Form.Control 
              type="text" 
              name="first_name"
              placeholder="Imię"
              value={formData.first_name} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formLastName" className="mb-3">
            <Form.Control 
              type="text" 
              name="last_name"
              placeholder="Nazwisko" 
              value={formData.last_name} 
              onChange={handleChange}
              required 
            />
          </Form.Group>
          <Form.Group controlId="formPosition" className="mb-3">
            <Form.Control 
              as="select" 
              name="position"
              placeholder="Stanowisko" 
              value={formData.position} 
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
            <Form.Control 
              type="text" 
              name="party"
              placeholder="Partia" 
              value={formData.party} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="e-mail"
              value={formData.email} 
              onChange={handleChange} 
            />
          </Form.Group>

          <Form.Group controlId="formPhotoUrl" className="mb-3">
            <Form.Control 
              type="text" 
              name="photo_url" 
              placeholder="Link do zdjęcia"
              value={formData.photo_url} 
              onChange={handleChange} 
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="description" 
              placeholder="Opis radnego"
              value={formData.description} 
              onChange={handleChange} 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">Dodaj radnego</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddRadnyModal;
