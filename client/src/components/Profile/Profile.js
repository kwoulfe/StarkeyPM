import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Profile.css';
import joeProfile from '../../images/joeProfile.jpg';

const Profile = props => {
  return (
    <div>
      <Jumbotron fluid id="jumbo">
        <Container fluid>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                className="joePic img-fluid"
                src={joeProfile}
                alt="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <h1 id="title">Hello, I’m Joe Starkey.</h1>
              <br />
              <p id="content">
                Specializing in development, renovation, and capital improvement
                processes, I represent owners to control costs, increase revenue
                and accelerate completion.
                <br />
                <br />
                Get the building upgrades and return on investment you desire
                while I manage the details so you don’t have to.
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Container fluid>
        <div className="row justify-content-center px-5">
          <div className="col-md-4 bullets">
            <h3>SAVE MONEY</h3>
            <br />
            <p>• Meticulous budget management</p>
            <p>• Bid process coordination</p>
            <p>• Contract negotiation</p>
            <p>• Change order review</p>
            <p>• Energy efficient upgrades</p>
          </div>
          <div className="col-md-4 bullets">
            <h3>SAVE TIME</h3>
            <br />
            <p>• Schedule management</p>
            <p>• Thorough project documentation</p>
            <p>• Strategic process planning</p>
            <p>• Vigilant construction oversight</p>
          </div>
          <div className="col-md-4 bullets">
            <h3>PEACE OF MIND</h3>
            <br />
            <p>• Reliable oversight</p>
            <p>• Procurement of qualified contractors & partners</p>
            <p>• Quality control</p>
            <p>• Team coordination </p>
          </div>
        </div>
        <div className="row justify-content-center px-2">
          <div className="col-md-10" id="footer">
            <a href="/contact">
              <h2>Let's work together</h2>
              <h4>joe.starkeypm@gmail.com | 510.292.6812</h4>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
