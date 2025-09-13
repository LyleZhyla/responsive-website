import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button, Carousel } from "react-bootstrap";

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
      icon: "i bi-music-player ",
      color: "text-success",
      title: "Music Lover",
      short: "Listening to pop, soft rock, acoustic, and OPM hits",
      slides: [
        { image: require("./assets/music1.png"), text: "Iris – Goo Goo Dolls" },
        { image: require("./assets/music2.png"), text: "Shape of You – Ed Sheeran" },
        { image: require("./assets/music3.jpg"), text: "Alexandra – Reality Club" },
        { image: require("./assets/music4.jpg"), text: "It Will Rain – Bruno Mars" },
        { image: require("./assets/music5.jpg"), text: "Paraluman – Adie" },
      ]
    },
    {
      icon: "bbi bi-music-note-beamed",
      color: "text-primary",
      title: "Instrument Playing",
      short: "Playing guitar, piano, and other instruments",
      slides: [
        { image: require("./assets/instrument1.jpg"), text: "Guitar" },
        { image: require("./assets/instrument2.jpg"), text: "Bass Guitar" },
        { image: require("./assets/instrument3.jpg"), text: "Drums" },
        { image: require("./assets/instrument4.png"), text: "Keyboard" },
      ]
    },
    {
      icon: "bi bi-collection-play",
      color: "text-danger",
      title: "Anime & K-Drama",
      short: "Watching anime series and K-dramas",
      slides: [
        { image: require("./assets/anime1.jpg"), text: "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World" },
        { image: require("./assets/anime2.jpg"), text: "Am I Actually the Strongest?" },
        { image: require("./assets/anime3.jpg"), text: "Bogus Skill <<Fruitmaster>>" },
        { image: require("./assets/kdrama1.png"), text: "King the Land" },
        { image: require("./assets/kdrama2.jpg"), text: "Business Proposal" },
        { image: require("./assets/kdrama3.jpg"), text: "True Beauty" },
      ]
    },
    {
      icon: "bi bi-dribbble",
      color: "text-warning",
      title: "Sports Enthusiast",
      short: "Loves racquet sports and other competitive games",
      slides: [
        { image: require("./assets/sport1.jpg"), text: "Tennis" },
        { image: require("./assets/sport2.jpg"), text: "Badminton" },
        { image: require("./assets/sport3.png"), text: "Volleyball" },
        { image: require("./assets/sport5.jpg"), text: "Basketball" },
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
