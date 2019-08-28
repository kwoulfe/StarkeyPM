import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Header.css';

const Header = props => {
  return (
    <div>
      <Jumbotron fluid id="main">
        <Container fluid id="mainContent">
          <p className="text">PROJECT MANAGEMENT & OWNER’S REP</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="headerText">
                Managing the details so you don’t have to.
              </h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
