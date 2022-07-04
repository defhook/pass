import React from "react";
import coverImage from "../../assets/main/polygonmap.jpg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section className="my-5 about-me">
      <Container Fluid>
        <Row>
          <h1 class="neonText">Pass</h1>
        </Row>
        <Row>
          <Col sm={8}>
              <img
                src={coverImage}
                className="my-2"
                style={{ width: "100%" }}
                alt="cover"
              />
          </Col>
          <Col>
            <div className="my-2">
              <p class="aboutMe">
                We're thrill seekers that are focused on getting the most of our
                adrenaline rush! In 2022, we decided to create an easy and
                simple way of viewing wait times for theme parks. We're a small
                group that updates this site. If you have any questions feel
                free to reach out.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
