import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "../components/Searchbar";

function HomePage() {
  return (
    <Container>
      <center className='justify-content-center'>
        <br/>
        <h1 className='neonText fs-1 mb-3 mt-3 p-2'>Welcome to Pass! Your favorite theme park website!</h1>
        <br></br>
        <h3 className='text-light'>Search over 100 theme park destinations</h3>
      <Searchbar></Searchbar>
      <br/>
      </center>

      <div className="row row-cols-3" id="attractions">
        
      </div>
    </Container>
  );
};

export default HomePage;