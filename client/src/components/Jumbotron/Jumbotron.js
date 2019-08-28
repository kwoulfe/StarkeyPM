import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Jumbotron.css';

const Main = props => {
  return (
    <div>
      <Jumbotron fluid id="jumbo">
        <Container fluid>
          <h1 className="mainText">Let's work together.</h1>
          <p className="text">JOE.STARKEYPM@GMAIL.COM | 510.292.6812</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Main;
