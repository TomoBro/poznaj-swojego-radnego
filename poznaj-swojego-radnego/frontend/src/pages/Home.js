import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../assets/styles/Home.css';
import mapaWarszawa from '../assets/images/mapa-warszawa.png';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col md={8} className="map-container">
        <img src={mapaWarszawa} alt="Mapa Warszawy" usemap="#mapaWarszawy" className="img-fluid" />
          <map name="mapaWarszawy">
            <area shape="poly" coords="164,59,205,26,271,8,282,40,365,25,375,50,407,49,419,24,527,13,563,178,535,187,549,235,347,313,267,266,230,227,181,163,189,113,176,87" href="/dzielnica/białołęka" href="/dzielnica/bialoleka" alt="Białołęka" />
            <area shape="poly" coords="70,116,105,134,104,159,71,178" href="/dzielnica/bielany" alt="Bielany" />
            <area shape="poly" coords="41,151,71,165,71,191,41,197" href="/dzielnica/bemowo" alt="Bemowo" />
            <area shape="poly" coords="388,304,351,315,390,437,447,505,457,476,522,432,414,384" href="/dzielnica/praga-polnoc" alt="Praga Północ" />
            <area shape="poly" coords="453,501,495,455,530,429,623,432,667,505,641,526,575,593,487,568" href="/dzielnica/praga-poludnie" alt="Praga Południe" />
            <area shape="poly" coords="80,192,108,210,108,240,80,240" href="/dzielnica/wola" alt="Wola" />
            <area shape="poly" coords="109,210,136,225,136,255,109,255" href="/dzielnica/srodmiescie" alt="Śródmieście" />
            <area shape="poly" coords="50,246,80,261,80,291,50,291" href="/dzielnica/ursynow" alt="Ursynów" />
            <area shape="poly" coords="82,258,110,275,110,305,82,305" href="/dzielnica/mokotow" alt="Mokotów" />
            <area shape="poly" coords="113,277,143,293,143,323,113,323" href="/dzielnica/wilanow" alt="Wilanów" />
            <area shape="poly" coords="146,288,176,303,176,333,146,333" href="/dzielnica/wawer" alt="Wawer" />
            <area shape="poly" coords="179,293,209,307,209,337,179,337" href="/dzielnica/wesola" alt="Wesoła" />
            <area shape="poly" coords="82,206,112,220,112,250,82,250" href="/dzielnica/ochota" alt="Ochota" />
            <area shape="poly" coords="113,220,143,235,143,265,113,265" href="/dzielnica/wlochy" alt="Włochy" />
            <area shape="poly" coords="146,230,176,245,176,275,146,275" href="/dzielnica/ursus" alt="Ursus" />
            <area shape="poly" coords="179,237,209,253,209,283,179,283" href="/dzielnica/rembertow" alt="Rembertów" />
            <area shape="poly" coords="390,300,419,383,526,429,614,423,609,376,590,331,580,326,551,266,548,239" href="/dzielnica/targowek" alt="Targówek"/>            
          </map>
        </Col>
    
<Col md={4} className="info-cards shadow p-3 mb-8 bg-body-tertiary rounded">
  <Link to="/rada-miasta" className="card-link">
    <Card className="mb-4 card-button">
      <Card.Body>
        <Card.Title>Rada Miasta</Card.Title>
      </Card.Body>
    </Card>
  </Link>
  <Link to="/rady-dzielnicy" className="card-link">
    <Card className="mb-4 card-button">
      <Card.Body>
        <Card.Title>Rady Dzielnicy</Card.Title>
      </Card.Body>
    </Card>
  </Link>
  <Link to="/glosowania" className="card-link">
    <Card className="mb-4 card-button">
      <Card.Body>
        <Card.Title>Głosowania</Card.Title>
      </Card.Body>
    </Card>
  </Link>
  <Link to="/interpelacje" className="card-link">
    <Card className="mb-4 card-button">
      <Card.Body>
        <Card.Title>Interpelacje</Card.Title>
      </Card.Body>
    </Card>
  </Link>
  <Link to="/oswiadczenia" className="card-link">
    <Card className="mb-4 card-button">
      <Card.Body>
        <Card.Title>Oświadczenia</Card.Title>
      </Card.Body>
    </Card>
  </Link>
  <Link to="/kontakt" className="card-link">
    <Card className="mb-4 card-button">
      <Card.Body>
        <Card.Title>Kontakt</Card.Title>
      </Card.Body>
    </Card>
  </Link>
</Col>


      </Row>
    </Container>
  );
};

export default Home;
