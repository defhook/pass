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
                  <Form.Label>Email Address</Form.Label>
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
            <Button href="/user" variant="success m-4 p-2 mt-4" type="submit">
              Create Account
            </Button>
            <div className="d-flex justify-content-evenly anchors">

            <a className='text-light' href={"/"}>
              Home
            </a>

            <a className='text-light' href={"/favorites"}>
              Favorites
            </a>
            <a className='text-light' href={"/About"}>
              About
            </a>
            </div>
          </Col>
        </Row>
      </Nav>
    </header>
  );
}

export default Navigation;
