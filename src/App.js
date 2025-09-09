import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Card, Row, Col, Image, Carousel } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProfilePic from './assets/2x2.jpg';
import './App.css';

function App() {
  return (
    <>
      {/* About Section */}
      <section id="about">
        <Container>
          <h2 className="fw-bold mb-4 text-center">About Me</h2>
          <Card className="p-4 shadow-sm border-0">
            <Card.Body>
              <Card.Text className="fs-5">
                I am a dedicated <b>IT Lecturer</b> with expertise in programming,
                research, and curriculum development. Currently teaching at
                <b> Tarlac Agricultural University</b> while pursuing impactful
                research projects in IT and agriculture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Education Section */}
      <section id="education">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Education</h2>
          <Row>
            <Col md={4}>
              <Card className="shadow-sm border-0 mb-3 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">MSIT</Card.Title>
                  <Card.Text>
                    Master of Science in Information Technology
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0 mb-3 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">BSIT (Cum Laude)</Card.Title>
                  <Card.Text>
                    Bachelor of Science in Information Technology
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0 mb-3 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Exchange Student</Card.Title>
                  <Card.Text>
                    International Study Program – Indonesia
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Teaching Section */}
      <section id="teaching">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Teaching</h2>
          <Row>
            <Col md={6}>
              <Card className="shadow-sm border-0 mb-3 p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Undergraduate Courses</Card.Title>
                  <Card.Text>
                    • Discrete Mathematics <br />
                    • Database Management <br />
                    • Living in the IT Era
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm border-0 mb-3 p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Graduate / Special Topics</Card.Title>
                  <Card.Text>
                    • Database Security & Concurrency <br />
                    • Research Methods in IT <br />
                    • Emerging Technologies
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Research Section */}
      <section id="research">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Research</h2>
          <Carousel interval={2000} controls indicators={false}>
            <Carousel.Item>
              <Card className="shadow-sm border-0 text-center p-4">
                <Card.Body>
                  <Card.Title className="fw-bold">Ongoing Research</Card.Title>
                  <Card.Text>
                    Biochar and Soil Health in Tarlac – exploring sustainable
                    agriculture through IT-assisted soil analysis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="shadow-sm border-0 text-center p-4">
                <Card.Body>
                  <Card.Title className="fw-bold">Proposal</Card.Title>
                  <Card.Text>
                    Digital Platform for Alumni Engagement – fostering connections
                    and career development through an online system.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className="shadow-sm border-0 text-center p-4">
                <Card.Body>
                  <Card.Title className="fw-bold">Future Research</Card.Title>
                  <Card.Text>
                    Integration of AI in curriculum analytics to improve teaching
                    and student learning outcomes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Container>
          <h2 className="fw-bold mb-4 text-center">Projects & Systems</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-3 shadow-sm border-0">
                <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
                <Card.Body>
                  <Card.Title>RescueNet</Card.Title>
                  <Card.Text>
                    Disaster Preparedness and Response System for real-time support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3 shadow-sm border-0">
                <Card.Img variant="top" src="https://img.pikbest.com/backgrounds/20241215/abstract-blue-background-with-some-smooth-lines-in-it--28see-more-my-portfolio-29_11256315.jpg!bw700" />
                <Card.Body>
                  <Card.Title>Library Management System</Card.Title>
                  <Card.Text>
                    Web-based library system using Flask and MySQL.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3 shadow-sm border-0">
                <Card.Img variant="top" src="https://img.pikbest.com/wp/202347/architecture-portfolio-blue-luxury-background-with-abstract-wall-wave-3d-rendered-and-perfect-for-website-presentation-or-use_9759684.jpg!sw800" />
                <Card.Body>
                  <Card.Title>Bookstore System</Card.Title>
                  <Card.Text>
                    Inventory and Sales Management with integrated MySQL database.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
