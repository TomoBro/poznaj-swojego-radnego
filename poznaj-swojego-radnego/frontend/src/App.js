import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import Radni from './pages/Radni';
import About from './pages/About';
import Contact from './pages/Contact';
import RadnyDetails from './pages/RadnyDetails';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">Poznaj swojego radnego</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Strona główna</Nav.Link>
              <Nav.Link as={Link} to="/about">O nas</Nav.Link>
              <Nav.Link as={Link} to="/radni">Radni</Nav.Link>
              <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/radni" element={<Radni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/radny/:id" element={<RadnyDetails />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

