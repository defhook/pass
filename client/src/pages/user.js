import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Stack, Container, Col, Row } from "react-bootstrap";

import "../custom.css";

export const Grid = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 80px;
`;
export const CenteredText = styled.div`
  text-align: center;
`;
// export const UserGrid = styled.div`
// display: grid;
// 	grid-gap: 35px;
// 	grid-template-columns:500px 150px 100px;
//   margin: 80px;
// `;

//this is the main enchalada for the page yum
function User() {
  const [signupForm, setSignUp] = useState({ email: "", password: "" });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUp({ ...signupForm, [name]: value });
  };

  const createUser = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { newDude } = await addUser({
        variables: { ...signupForm },
      });

      Auth.login(newDude.addUser.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="blueBackground">
      <div className="user-box">
        <CenteredText>Create an Account</CenteredText>
      </div>
      <Col>
        <Row>
          <img
            circle
            src={require("../assets/images/user-photo.png")}
            alt=""
            style={{
              height: "250px",
            }}
          ></img>
        </Row>
        <Row>
        <Stack gap={2} ClassName="col-md-5 mx-auto">
          <div className="new-line">
            <input
              name="email"
              value={signupForm.email}
              onChange={handleInputChange}
              type="text"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="new-line">
            <input
              name="password"
              value={signupForm.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
            ></input>
          </div>

          <button className="button-color" onClick={createUser}>
            Sign Up!
          </button>
        </Stack>
        </Row>
      </Col>
    </Container>
  );
}
// function Update_Info (){
//     //this function can be used to update user info
//    console.log ("change info");
// }
export default User;
