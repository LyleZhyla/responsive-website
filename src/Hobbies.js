import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button, Carousel } from "react-bootstrap";
import readingImg from "./assets/1.png";
import musicImg from "./assets/1.png";
import travelImg from "./assets/1.png";
import artsImg from "./assets/1.png";

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
      slides: [
        {
          image: require("./assets/1.png"),
          text: "Atomic Habits – A practical guide to building better habits."
        },
        {
          image: require("./assets/2x2.jpg"),
          text: "Deep Work – Strategies for focused success in a distracted world."
        },
      ]
    },
    {
      icon: "bi bi-music-note-beamed",
      color: "text-success",
      title: "Music",
      short: "Listening to OPM and classical music",
      slides: [
        {
          image: require("./assets/1.png"),
          text: "Favorite OPM Playlist – A mix of modern and classic hits."
        },
        {
          image: require("./assets/2x2.jpg"),
          text: "Classical Essentials – Beethoven, Mozart, and Chopin."
        }
      ]
    },
    {
      icon: "bi bi-globe2",
      color: "text-danger",
      title: "Travel",
      short: "Exploring cultures and new environments",
      slides: [
        {
          image: require("./assets/1.png"),
          text: "Japan – Cherry blossoms and cultural immersion."
        },
        {
          image: require("./assets/2x2.jpg"),
          text: "Singapore – Gardens by the Bay and Marina Bay Sands."
        }
      ]
    },
    {
      icon: "bi bi-brush",
      color: "text-warning",
      title: "Creative Arts",
      short: "Digital design and visual storytelling",
      slides: [
        {
          image: require("./assets/1.png"),
          text: "Poster Design – Minimalist storytelling through visuals."
        },
        {
          image: require("./assets/2x2.jpg"),
          text: "Digital Illustrations – Bringing imagination to life."
        }
      ]
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
                  <Card.Title className="mt-2" style={{ color: "#0d1b2a" }}>
                    {hobby.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#0d1b2a" }}>
                    {hobby.short}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal with Carousel */}
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selected?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selected?.slides && (
              <Carousel>
                {selected.slides.map((slide, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={slide.image}
                      alt={`slide-${idx}`}
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                      <p>{slide.text}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
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