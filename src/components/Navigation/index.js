import React from "react";
import { Form, Nav, Button, Container, Row, Col } from "react-bootstrap";

function Navigation() {
  return (
    <header>
      <Nav className="navigation">
        <Row className="p-3">
          <Col xs="2">
            <a data-testid="link" href="https://github.com/defhook/pass">
              <span role="img" aria-label="ticket">
                {" "}
                <img
                  src={require(`../../assets/main/PASS-logo.png`)}
                  alt="github"
                  className="App-logo"
                />
              </span>{" "}
            </a>
          </Col>
          <Col xs="3">
            <Form>
              <Container>
                <Form.Group controlId="formEmail">
                  <Form.Label>User Id</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted" />
                </Form.Group>
              </Container>
            </Form>
          </Col>
          <Col xs="3">
            <Form>
              <Container>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" placeholder="Password" />
                  <Form.Text className="text-muted" />
                </Form.Group>
              </Container>
            </Form>
          </Col>
          <Col xs="4">
            <Button variant="danger m-4 p-2 mt-4" type="submit">
              Log In
            </Button>
            <Button variant="success m-4 p-2 mt-4" type="submit">
              Create Account
            </Button>
            <a href={"/home"}>
              Home
            </a>

            <a href={"/favorites"}>
              Favorites
            </a>

            <a href={"/user"}>
              User
            </a>
            <a href={"/About"}>
              About
            </a>
          </Col>
        </Row>
      </Nav>
    </header>
  );
}

export default Navigation;
