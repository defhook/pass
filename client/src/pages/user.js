
import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { Container, Col, text } from "react-bootstrap";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'


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
export const User_grid = styled.div`
display: grid;
	grid-gap: 35px;
	grid-template-columns:500px 150px 100px;
  margin: 80px;
`;

//this is the main enchalada for the page yum
function User() {
    const [signupForm, setSignUp] = useState({ username: '', email: '', password: '' });

    const [addUser, { error }] = useMutation(ADD_USER)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSignUp({ ...signupForm, [name]: value });
    };

    const createUser = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...signupForm }
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container Fluid className="blueBackground">
            <div className="p-2 mt-3 mb-3 ">
                <h1 className='neonText fs-3'>
                    Create an Account
                </h1>

            </div>

            <div className='d-flex anotherMadeup container justify-content-between flex-wrap'>

                    <img className='mx-auto robotGuy' circle src={require("../assets/images/user-photo.png")} alt=""
                        >
                    </img>
                
                    <div className="madeupClass w-50">

                        <div className="new-line">
                            <input className='form-control' name='username' value={signupForm.username} onChange={handleInputChange} type='text' placeholder="username"></input>
                        </div>
                        <div className="new-line">
                            <input className='form-control' name='email' value={signupForm.email} onChange={handleInputChange} type='text' placeholder="Email Address"></input>
                        </div>
                        <div className='new-line'>

                            <input className='form-control' name='password' value={signupForm.password} onChange={handleInputChange} type='password' placeholder="Password"></input>
                            <br />
                            <button type="button" className="btn btn-danger" onClick={createUser}>
                                Sign Up!
                            </button>
                        </div>
                    </div>

                    

                
            </div>

        </Container>


    )

}
// function Update_Info (){
//     //this function can be used to update user info
//    console.log ("change info");
// }
export default User;

