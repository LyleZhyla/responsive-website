import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

export default function Academic() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleClose = () => setShow(false);
  const handleShow = (title, body) => {
    setModalContent({ title, body });
    setShow(true);
  };

  return (
    <section id="academic">
      <Container>
        <h2 className="fw-bold mb-4 text-center">Academic</h2>
        <Row>
          {/* Education */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "Education",
                  "MSIT - Master of Science in Information Technology\nBSIT (Cum Laude) - Bachelor of Science in Information Technology\nExchange Student - Indonesia Program"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
                <Card.Title className="fw-bold text-primary mt-2">
                  Education
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Teaching */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "Teaching",
                  "Undergraduate: Discrete Math, Database Mgmt\nGraduate: Database Security, Research Methods"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <i className="bi bi-easel fs-1 text-success"></i>
                <Card.Title className="fw-bold text-success mt-2">
                  Teaching
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Research */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "Research",
                  "Focus: Database Security, Alumni Platforms, Disaster Response Systems"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <i className="bi bi-search fs-1 text-danger"></i>
                <Card.Title className="fw-bold text-danger mt-2">
                  Research
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Projects */}
          <Col md={6} lg={3}>
            <Card
              className="shadow-sm border-0 mb-4 text-center p-3 card-hover"
              onClick={() =>
                handleShow(
                  "Projects",
                  "Library Management System, Bookstore System, Disaster Response Platform"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <i className="bi bi-code-slash fs-1 text-warning"></i>
                <Card.Title className="fw-bold text-warning mt-2">
                  Projects
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent.body.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
