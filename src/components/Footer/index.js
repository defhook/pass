import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container Fluid>
      <Row class="contactus">
        <h3 class="hover">
          <a href="mailto:anymail@anymail.com">Contact Us!</a>
        </h3>
      </Row>
    </Container>
  );
}

export default Footer;
