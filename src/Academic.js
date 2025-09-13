import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

export default function EducationalBackground() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: null });

  const handleClose = () => setShow(false);
  const handleShow = (title, body) => {
    setModalContent({ title, body });
    setShow(true);
  };

  return (
    <section id="educational-background">
      <Container>
        <h2 className="fw-bold mb-4 text-center">Educational Background</h2>
        <Row>
          {/* Elementary */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "Elementary",
                  <>
                    <p>
                      <strong>Camiling North Elementary School</strong>
                      <br />
                      <em>2008 - 2014</em>
                    </p>
                    <p><strong>Awards:</strong></p>
                    <ul>
                      <li>Class Salutatorian</li>
                      <li>Athlete of the Year</li>
                    </ul>
                  </>
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body style={{ backgroundColor: "#001f3f", borderRadius: "12px", padding: "20px" }}>
                <i className="bi bi-pencil-square fs-1 text-white"></i>
                <Card.Title className="fw-bold text-white mt-2">
                  Elementary
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* High School */}
          <Col md={6} lg={3}>
            <Card 
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "High School",
                  <>
                    <p>
                      <strong>Camiling Catholic School, Inc.</strong>
                      <br />
                      Junior High School
                      <br />
                      <em>2014 - 2018</em>
                    </p>
                    <p><strong>Awards:</strong></p>
                    <ul>
                      <li>With Honor Awardee</li>
                      <li>Athlete of the Year</li>
                    </ul>
                    <hr />
                    <p>
                      <strong>Camiling Catholic School, Inc.</strong>
                      <br />
                      Senior High School
                      <br />
                      <em>2018 - 2020</em>
                    </p>
                    <p><strong>Awards:</strong></p>
                    <ul>
                      <li>With High Honor Awardee</li>
                      <li>Athlete of the Year</li>
                      <li>Outstanding Choir Member</li>
                    </ul>
                  </>
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body style={{ backgroundColor: "#001f3f", borderRadius: "12px", padding: "20px" }}>
                <i className="bi bi-journal-bookmark-fill fs-1 text-white"></i>
                <Card.Title className="fw-bold text-white mt-2">
                  High School
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* College */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "College",
                  <>
                    <p>
                      <strong>Tarlac Agricultural University</strong>
                      <br />
                      Bachelor of Science in Information Technology
                      <br />
                      <em>2020 - 2024</em>
                    </p>
                    <p><strong>Awards:</strong></p>
                    <ul>
                      <li>Cum Laude</li>
                      <li>College of Engineering and Technology Outstanding Student</li>
                    </ul>
                  </>
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body style={{ backgroundColor: "#001f3f", borderRadius: "12px", padding: "20px" }}>
                <i className="bi bi-mortarboard-fill fs-1 text-white"></i>
                <Card.Title className="fw-bold text-white mt-2">
                  College
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* International */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "International",
                  <>
                    <p>
                      <strong>
                        Universitas Bhinneka Nusantara, Malang, Indonesia (former STIKI, Malang)
                      </strong>
                      <br />
                      Sistem Informasi
                      <br />
                      <em>2023 - 2024</em>
                    </p>
                    <p><strong>Awards:</strong></p>
                    2nd International Student Conference
                    <ul>
                      <li>2nd Best Paper Awardee</li>
                    </ul>
                  </>
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body style={{ backgroundColor: "#001f3f", borderRadius: "12px", padding: "20px" }}>
                <i className="bi bi-globe2 fs-1 text-white"></i>
                <Card.Title className="fw-bold text-white mt-2">
                  International
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
