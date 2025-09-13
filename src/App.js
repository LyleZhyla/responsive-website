import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Card, Row, Col, Image} from 'react-bootstrap';
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
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#educational-background">Education</Nav.Link>
                <Nav.Link href="#hobbies">Hobbies</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>



      {/* Hero Section */}
      <section className="hero-section py-6">
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
      <section id="skills" className="py-5">
      <Container>
        <h2 className="fw-bold mb-4 text-center">Expertise & Skills</h2>
        <Row>
          {/* Expertise Column */}
          <Col md={6}>
            <h4 className="text-center mb-4">Expertise</h4>
            <h5>Teaching & Research</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "95%" }}
              >
                Expert
              </div>
            </div>

            <h5>Python</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "90%" }}
              >
                Advanced
              </div>
            </div>

            <h5>JavaScript / React</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning text-dark"
                role="progressbar"
                style={{ width: "80%" }}
              >
                Advanced
              </div>
            </div>

            <h5>Java</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "75%" }}
              >
                Intermediate
              </div>
            </div>

            <h5>Flask / MySQL</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "70%" }}
              >
                Intermediate
              </div>
            </div>

            <h5>Git & Netlify</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-secondary"
                role="progressbar"
                style={{ width: "60%" }}
              >
                Intermediate
              </div>
            </div>
          </Col>

          {/* Skills Column */}
          <Col md={6}>
            <h4 className="text-center mb-4">Skills</h4>
            <Row className="text-center">
              <Col md={6} className="mb-4">
                <i className="bi bi-people-fill fs-1 text-primary"></i>
                <h5 className="mt-2">Leadership</h5>
              </Col>
              <Col md={6} className="mb-4">
                <i className="bi bi-chat-dots-fill fs-1 text-success"></i>
                <h5 className="mt-2">Communication</h5>
              </Col>
              <Col md={6} className="mb-4">
                <i className="bi bi-lightbulb-fill fs-1 text-warning"></i>
                <h5 className="mt-2">Problem Solving</h5>
              </Col>
              <Col md={6} className="mb-4">
                <i className="bi bi-people fs-1 text-danger"></i>
                <h5 className="mt-2">Teamwork</h5>
              </Col>
              <Col md={6} className="mb-4">
                <i className="bi bi-clock-history fs-1 text-info"></i>
                <h5 className="mt-2">Time Management</h5>
              </Col>
              <Col md={6} className="mb-4">
                <i className="bi bi-journal-check fs-1 text-secondary"></i>
                <h5 className="mt-2">Adaptability</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>



      {/* Academic Section */}
      <Academic />
      

      {/* Hobbies Section */}
      <Hobbies />

      {/* Contact Section */}
      <section id="contact" className="text-center py-4">
        <Container>
          <h2 className="fw-bold mb-4">Contact</h2>
          <p className="fs-5">
            Email:{" "}
            <a href="mailto:zhyla.patalod@gmail.com">zhyla.patalod@gmail.com</a>
          </p>
          <p className="fs-5">Contact No.: 0966 650 5101</p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://www.facebook.com/zhyla.patalod/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-1"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/zhylapatals/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-1"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lyle-zhyla-patalod-9512b9190/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-1"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
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
