
import React from "react";
import { Container, Col, text } from "react-bootstrap";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";


import "../custom.css";


export const Grid = styled.div`
display: grid;
	grid-gap: 35px;
	grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 80px;

`;
export const CenteredText = styled.div`
text-align: center
`;
export const User_grid = styled.div`
display: grid;
	grid-gap: 35px;
	grid-template-columns:500px 150px 100px;
  margin: 80px;
`;
//global variables that affect current email and password
var Email = "placeholder"
var Password = "placeholder"

//this function dynamically adds the user info 
function Insertuser (props) {
    return (
                <Container>
            <div className="new-line">
                {props._email}
                </div>
            <div className="new-line">
                {props._password}
                </div>
                </Container>  
      )         
} 
//this is the main enchalada for the page yum
function User() {
    
        return (
            <Container className="blueBackground">
            <div className ="user-box">
                <CenteredText>
                    User Page
                </CenteredText>

            </div> 
            <div>
            <User_grid>
           
                <div>
                <img circle src = {require( "../assets/images/user-photo.png")} alt=""
				 style={{
					height: "250px",
				  }}>
				</img>
                </div>
                <div>
                <div className="new-line">
                Email
                </div>
                <div className="new-line">
                Password
                </div>                
               
                <button className="button-color" onClick={Update_Info}>
                    Change/Update Info
                </button>
            </div>
            
            <Insertuser _email={Email} _password = {Password}>

            </Insertuser>
             </User_grid>
             </div>
           
            </Container>
            
      
        )

}
    function Update_Info (){
        //this function can be used to update user info
       console.log ("change info");
    }
export default User;

