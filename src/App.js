import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Card, Row, Col, Image, Carousel, NavDropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProfilePic from './assets/2x2.jpg';
import './App.css';

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
      <section id="academic">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Academic</h2>
          <Row>
            {/* Education */}
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 mb-4 text-center p-3">
                <Card.Body>
                  <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
                  <Card.Title className="fw-bold text-primary mt-2">Education</Card.Title>
                  <Card.Text>
                    <strong>MSIT</strong> – Master of Science in IT <br />
                    <strong>BSIT (Cum Laude)</strong> – Bachelor of Science in IT <br />
                    <strong>Exchange Student</strong> – Indonesia
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

           {/* Teaching */}
          <Col md={6} lg={3}>
            <Card className="shadow-sm border-0 mb-4 text-center p-3">
              <Card.Body>
                {/* Gumamit ng existing icon */}
                <i className="bi bi-easel fs-1 text-success"></i>
                <Card.Title className="fw-bold text-success mt-2">Teaching</Card.Title>
                <Card.Text>
                  Undergraduate: Discrete Math, Database Mgmt <br />
                  Graduate: Database Security, Research Methods
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

            {/* Research */}
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 mb-4 text-center p-3">
                <Card.Body>
                  <i className="bi bi-search fs-1 text-danger"></i>
                  <Card.Title className="fw-bold text-danger mt-2">Research</Card.Title>
                  <Card.Text>
                    <strong>Ongoing:</strong> Biochar & Soil Health <br />
                    <strong>Proposal:</strong> Alumni Engagement System <br />
                    <strong>Future:</strong> AI in Curriculum Analytics
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Projects */}
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 mb-4 text-center p-3">
                <Card.Body>
                  <i className="bi bi-code-slash fs-1 text-warning"></i>
                  <Card.Title className="fw-bold text-warning mt-2">Projects</Card.Title>
                  <Card.Text>
                    RescueNet: Disaster Response <br />
                    Library Management (Flask + MySQL) <br />
                    Bookstore System: Inventory & Sales
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Hobbies & Interests</h2>
          <Row>
            <Col md={3} sm={6} className="text-center mb-3">
              <Card className="shadow-sm border-0 p-3">
                <Card.Body>
                  <i className="bi bi-book fs-1 text-primary"></i>
                  <Card.Title className="mt-2">Reading</Card.Title>
                  <Card.Text>Tech blogs, research, and self-growth books</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="text-center mb-3">
              <Card className="shadow-sm border-0 p-3">
                <Card.Body>
                  <i className="bi bi-music-note-beamed fs-1 text-success"></i>
                  <Card.Title className="mt-2">Music</Card.Title>
                  <Card.Text>Listening to OPM and classical music</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="text-center mb-3">
              <Card className="shadow-sm border-0 p-3">
                <Card.Body>
                  <i className="bi bi-globe2 fs-1 text-danger"></i>
                  <Card.Title className="mt-2">Travel</Card.Title>
                  <Card.Text>Exploring cultures and new environments</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="text-center mb-3">
              <Card className="shadow-sm border-0 p-3">
                <Card.Body>
                  <i className="bi bi-brush fs-1 text-warning"></i>
                  <Card.Title className="mt-2">Creative Arts</Card.Title>
                  <Card.Text>Digital design and visual storytelling</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

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
      <footer className="bg-dark text-white text-center py-3 mt-4">
        © {new Date().getFullYear()} My Portfolio | Built with React & Bootstrap
      </footer>
    </>
  );
}

export default App;
