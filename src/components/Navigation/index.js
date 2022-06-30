import React from "react";
import { Form, Nav, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Nav>
      <div className="Nav">
        <Nav className="Nav-header">
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>User Id</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
              <Form.Text className="text-muted" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
              <Form.Text className="text-muted" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {" "}
              Log In{" "}
            </Button>
          </Form>
        </Nav>
      </div>
    </Nav>
  );
}

export default Navigation;
