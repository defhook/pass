import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container Fluid>
      <Row class="contactus">
        <h3 class="colorLink">
          <a href="mailto:anymail@anymail.com" className="link">Contact Us!</a>
        </h3>
      </Row>
    </Container>
  );
}

export default Footer;