import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";

const Hobbies = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (hobby) => {
    setSelected(hobby);
    setShow(true);
  };

  const hobbies = [
    {
      icon: "bi bi-book",
      color: "text-primary",
      title: "Reading",
      short: "Tech blogs, research, and self-growth books",
      details: "I enjoy reading about technology trends, academic research, and personal development books that inspire growth."
    },
    {
      icon: "bi bi-music-note-beamed",
      color: "text-success",
      title: "Music",
      short: "Listening to OPM and classical music",
      details: "Music is one of my creative outlets. I enjoy listening to OPM hits and classical pieces for relaxation and focus."
    },
    {
      icon: "bi bi-globe2",
      color: "text-danger",
      title: "Travel",
      short: "Exploring cultures and new environments",
      details: "Traveling allows me to explore different cultures and broaden my perspective through new experiences."
    },
    {
      icon: "bi bi-brush",
      color: "text-warning",
      title: "Creative Arts",
      short: "Digital design and visual storytelling",
      details: "I express creativity through digital design and storytelling, combining visuals and concepts in unique ways."
    },
  ];

  return (
    <section id="hobbies">
      <Container>
        <h2 className="fw-bold mb-4 text-center">Hobbies & Interests</h2>
        <Row>
          {hobbies.map((hobby, index) => (
            <Col md={3} sm={6} className="text-center mb-3" key={index}>
              <Card 
                className="shadow-sm border-0 p-3 hover-card"
                onClick={() => handleShow(hobby)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <i className={`${hobby.icon} fs-1 ${hobby.color}`}></i>
                  <Card.Title className="mt-2" style={{ color: "#0d1b2a" }}z>{hobby.title}</Card.Title>
                  <Card.Text style={{ color: "#0d1b2a" }}>
                    {hobby.short}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for Hobbies */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selected?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selected?.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Hobbies;
