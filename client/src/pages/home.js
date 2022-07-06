import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "../components/Searchbar";

function HomePage() {
  return (
    <Container>
      <center className='justify-content-center'>
        <h1 className='text-light'>Welcome to PASS! Your favorite theme park website!</h1>
      <Searchbar></Searchbar>
      </center>

      <div className="row row-cols-3" id="attractions">
        
      </div>
    </Container>
  );
};

export default HomePage;