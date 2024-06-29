// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
// import Home from './pages/Home';
// import RadaMiasta from './pages/RadaMiasta';
// import RadyDzielnicy from './pages/RadyDzielnicy';
// import DzielnicaDetails from './pages/DzielnicaDetails';
// import Glosowania from './pages/Glosowania';
// import Interpelacje from './pages/Interpelacje';
// import Oswiadczenia from './pages/Oswiadczenia';
// import Radni from './pages/Radni';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import RadnyDetails from './pages/RadnyDetails';
// import AddRadny from './pages/AddRadny';
// import './assets/styles/App.css';
// import './assets/styles/global.css';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg="primary" variant="secondary" expand={false} fixed="end" className="navbar sticky-top bg-body-tertiary">
//           <Container fluid>
//             <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-2" />
//             <Navbar.Brand as={Link} to="/">Poznaj swojego radnego</Navbar.Brand>
//             <Navbar.Offcanvas
//               id="offcanvasNavbar"
//               aria-labelledby="offcanvasNavbarLabel"
//               placement="start"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id="offcanvasNavbarLabel">Poznaj Swojego Radnego</Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3 nav-link">
//                   <Nav.Link as={Link} to="/">Strona główna</Nav.Link>
//                   <Nav.Link as={Link} to="/rada-miasta">Rada Miasta</Nav.Link>
//                   <Nav.Link as={Link} to="/rady-dzielnicy">Rady Dzielnicy</Nav.Link>
//                   <Nav.Link as={Link} to="/radni">Radni</Nav.Link>
//                   <Nav.Link as={Link} to="/glosowania">Głosowania</Nav.Link>
//                   <Nav.Link as={Link} to="/interpelacje">Interpelacje</Nav.Link>
//                   <Nav.Link as={Link} to="/oswiadczenia">Oświadczenia</Nav.Link>
//                   <Nav.Link as={Link} to="/about">O nas</Nav.Link>
//                   <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//         <Container style={{ marginTop: '56px' }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/rada-miasta" element={<RadaMiasta />} />
//             <Route path="/rady-dzielnicy" element={<RadyDzielnicy />} />
//             <Route path="/dzielnica/:dzielnica" element={<DzielnicaDetails />} />
//             <Route path="/glosowania" element={<Glosowania />} />
//             <Route path="/interpelacje" element={<Interpelacje />} />
//             <Route path="/oswiadczenia" element={<Oswiadczenia />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/radni" element={<Radni />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/radny/:id" element={<RadnyDetails />} />
//             <Route path="/add-radny" element={<AddRadny />} /> 
//           </Routes>
//         </Container>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import Home from './pages/Home';
import RadaMiasta from './pages/RadaMiasta';
import RadyDzielnicy from './pages/RadyDzielnicy';
import DzielnicaDetails from './pages/DzielnicaDetails';
import Glosowania from './pages/Glosowania';
import Interpelacje from './pages/Interpelacje';
import Oswiadczenia from './pages/Oswiadczenia';
import Radni from './pages/Radni';
import About from './pages/About';
import Contact from './pages/Contact';
import RadnyDetails from './pages/RadnyDetails';
import AddRadny from './pages/AddRadny';
import './assets/styles/App.css';
import './assets/styles/global.css';

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="primary" variant="secondary" expand={false} fixed="end" className="navbar sticky-top bg-body-tertiary" expanded={expanded}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-2" onClick={handleToggle} />
            <Navbar.Brand as={Link} to="/">Poznaj swojego radnego</Navbar.Brand>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton onClick={handleClose}>
                <Offcanvas.Title id="offcanvasNavbarLabel">Poznaj Swojego Radnego</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" onClick={handleClose}>Strona główna</Nav.Link>
                  <Nav.Link as={Link} to="/rada-miasta" onClick={handleClose}>Rada Miasta</Nav.Link>
                  <Nav.Link as={Link} to="/rady-dzielnicy" onClick={handleClose}>Rady Dzielnicy</Nav.Link>
                  <Nav.Link as={Link} to="/radni" onClick={handleClose}>Radni</Nav.Link>
                  <Nav.Link as={Link} to="/glosowania" onClick={handleClose}>Głosowania</Nav.Link>
                  <Nav.Link as={Link} to="/interpelacje" onClick={handleClose}>Interpelacje</Nav.Link>
                  <Nav.Link as={Link} to="/oswiadczenia" onClick={handleClose}>Oświadczenia</Nav.Link>
                  <Nav.Link as={Link} to="/about" onClick={handleClose}>O nas</Nav.Link>
                  <Nav.Link as={Link} to="/contact" onClick={handleClose}>Kontakt</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Container style={{ marginTop: '56px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rada-miasta" element={<RadaMiasta />} />
            <Route path="/rady-dzielnicy" element={<RadyDzielnicy />} />
            <Route path="/dzielnica/:dzielnica" element={<DzielnicaDetails />} />
            <Route path="/glosowania" element={<Glosowania />} />
            <Route path="/interpelacje" element={<Interpelacje />} />
            <Route path="/oswiadczenia" element={<Oswiadczenia />} />
            <Route path="/about" element={<About />} />
            <Route path="/radni" element={<Radni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/radny/:id" element={<RadnyDetails />} />
            <Route path="/add-radny" element={<AddRadny />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
