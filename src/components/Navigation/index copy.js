import React from "react";
import { Form, Nav, Button, Container, Row, Col } from "react-bootstrap";

function Navigation() {
  return (
    <header className="flex-row px-1">
    
          <a data-testid="link" href="https://github.com/defhook/pass">
            <span role="img" aria-label="ticket">
              {" "}
              <img
                src={require(`../../assets/main/PASS-logo-copy.png`)}
                alt="github"
                className="App-logo"
              />
            </span>{" "}
          </a>       

      {/* <Container Fluid>
                <h1 class="neonText">Pass!</h1>
              </Container> */}
      {/* <a 
      href="https://github.com/defhook/pass"
      rel="noreferrer"
      target="_blank"
      >
        <img src={require(`../../assets/main/PASS-logo-copy.png`)}
        alt="github"
        width="50"
        height="50"
        />
      </a> */}
      <Nav>
        <div className="Nav">
          <Row>
            <Col xs="4">
              <Form>
                <Container>
                  <Form.Group controlId="formEmail">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@email.com"
                    />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Container>
              </Form>
            </Col>
            <Col>
              <Form>
                <Container>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Password" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Col xs="4">
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </Col>
                </Container>
              </Form>
            </Col>
          </Row>
        </div>
      </Nav>
    </header>
  );
}

export default Navigation;
