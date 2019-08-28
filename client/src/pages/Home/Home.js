import React, { Component } from 'react';
import Header from '../../components/Header';
import Profile from '../../components/Profile';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Profile />
      </React.Fragment>
    );
  }
}

export default Home;
