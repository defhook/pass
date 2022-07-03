import React from "react";
import { Form, Nav, Button, Container, Row, Col, } from "react-bootstrap";

function Navigation() {
  return (
    <Nav>
      <div className="Nav">
        <Row>
          <Col>
            <h1>Pass!</h1>
          </Col>
          <Nav className="Nav-header">
            <Container fluid>
              <Form>
                <Row>
                  <Col xs="4">
                    <Form.Group controlId="formEmail">
                      <Form.Label>User Id</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="example@email.com"
                      />
                      <Form.Text className="text-muted" />
                      Please log in for a personalized experience!
                    </Form.Group>
                  </Col>
                  <Col xs="4">
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="Password" placeholder="Password" />
                      <Form.Text className="text-muted" />
                    </Form.Group>
                  </Col>
                  <Col xs="3">
                  <Button variant="primary" type="submit">
                    {" "}
                    Log In{" "}
                  </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Nav>
        </Row>
      </div>
    </Nav>
  );
}

export default Navigation;
