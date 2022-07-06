import React, { useState } from "react";
import { Form, Nav, Button, Container, Row, Col } from "react-bootstrap";
import Auth from '../../utils/auth'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'

function Navigation() {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' })

  const [login, { error }] = useMutation(LOGIN_USER)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserLogin({
      ...userLogin,
      [name]: value
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userLogin }
      })

      Auth.login(data.login.token)
    } catch (e) {
      console.log(e)
    }
  }

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <header>
      <Nav className="navigation">

          <div className='d-flex flex-wrap '>
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


            {Auth.loggedIn() ? (
              null
            ) : (<>
              

              <Form>
                <Container>
                  <Form.Group controlId="formEmail">
                    <Form.Label htmlFor='email'>Email Address</Form.Label>
                    <Form.Control value={userLogin.email} onChange={handleChange} required type="text" name='email' placeholder="example@email.com" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Container>
              </Form>


              <Form>
                <Container>
                  <Form.Group controlId="formPassword">
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control value={userLogin.password} required name='password' onChange={handleChange} type="Password" placeholder="Password" />
                    <Form.Text className="text-muted" />
                  </Form.Group>
                </Container>
              </Form>
        
              

            </>)

            }
  
            {Auth.loggedIn() ? (
              <>
                <Button onClick={logout} variant="danger m-4 p-2 mt-4">
                  Log Out
                </Button>
              </>

            ) : (
              <>
              <div className="ms-3">

                <Button onClick={handleLogin} variant="danger m-4 p-2 mt-4" type="submit">
                  Log In
                </Button>
                <Button href="/user" variant="success m-4 p-2 mt-4" type="submit">
                  Create Account
                </Button>
              </div>
              </>
            )

            }
              </div>
            <div className="d-flex justify-content-between anchors">

              <a className='p-2 mt-3 text-light' href={"/"}>
                Home
              </a>
              {Auth.loggedIn() ?
                (
                  <a className='p-2 mt-3 text-light' href={"/favorites"}>
                    Favorites
                  </a>

                ) : (
                  null
                )
              }
              <a className='p-2 mt-3 text-light' href={"/About"}>
                About
              </a>
            </div>
          
      </Nav>
    </header>
  );
}

export default Navigation;
