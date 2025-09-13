import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Card, Row, Col, Image, NavDropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProfilePic from './assets/2x2.jpg';
import './App.css';

import Academic from "./Academic";
import Hobbies from "./Hobbies";

function App() {
  return (
    <>
      <header className="navbar-wrapper">
        <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">About</Nav.Link>
                
                {/* Dropdown for Academic */}
                <NavDropdown title="Academic" id="academic-dropdown">
                  <NavDropdown.Item href="#education">Education</NavDropdown.Item>
                  <NavDropdown.Item href="#teaching">Teaching</NavDropdown.Item>
                  <NavDropdown.Item href="#research">Research</NavDropdown.Item>
                  <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>



      {/* Hero Section */}
      <section className="hero-section">
        <Container className="text-center">
          <Image
            src={ProfilePic} // imported image
            roundedCircle
            fluid
            alt="Profile"
            className="mb-3 shadow"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
          <h1 className="fw-bold">Hi, I’m Lyle Zhyla Patalod</h1>
            <p className="lead">
              Educator | IT Specialist | Researcher
            </p>
            <Button variant="primary" size="lg" className="mt-2  mb-5">
              Download CV
            </Button>

            <h2 className="fw-bold text-center">About Me</h2>
            
              <Card.Body>
                <Card.Text className="fs-5 text-muted">
                  I am a dedicated <b>IT Lecturer</b> with expertise in <b>programming,
                  research, and curriculum development</b>. Currently teaching at
                  <b> Tarlac Agricultural University</b> while pursuing impactful research
                  projects in IT and agriculture.
                </Card.Text>
              </Card.Body>
            
        </Container>
      </section>


      {/* Skills Section */}
      <section id="skills">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Skills</h2>
          <Row>
            <Col md={6}>
              <h5>Python</h5>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" role="progressbar" style={{width: "90%"}}>
                  Advanced
                </div>
              </div>
              <h5>Java</h5>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" role="progressbar" style={{width: "75%"}}>
                  Intermediate
                </div>
              </div>
              <h5>JavaScript / React</h5>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning text-dark" role="progressbar" style={{width: "80%"}}>
                  Advanced
                </div>
              </div>
            </Col>
            <Col md={6}>
              <h5>Flask / MySQL</h5>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}}>
                  Intermediate
                </div>
              </div>
              <h5>Git & Netlify</h5>
              <div className="progress mb-3">
                <div className="progress-bar bg-secondary" role="progressbar" style={{width: "60%"}}>
                  Intermediate
                </div>
              </div>
              <h5>Teaching & Research</h5>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: "95%"}}>
                  Expert
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Academic Section */}
      <Academic />
      

      {/* Hobbies Section */}
      <Hobbies />

      {/* Contact Section */}
      <section id="contact" className="text-center">
        <Container>
          <h2 className="fw-bold mb-4">Contact</h2>
          <p className="fs-5">Email: <a href="mailto:zhyla.patalod@gmail.com">zhyla.patalod@gmail.com</a></p>
          <p className="fs-5">LinkedIn | GitHub | Other Links</p>
          <Button variant="success" size="lg">Contact Me</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-3 mt-4">
        © {new Date().getFullYear()} My Portfolio | Built with React & Bootstrap
      </footer>
    </>
  );
}

export default App;
