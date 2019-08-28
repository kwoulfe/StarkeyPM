import React from 'react';
import './Nav.css';
import logo from '../../images/logo.png';

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap';

export default class Header extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  render() {
    return (
      <nav className="navbar navbar-light  navbar-expand-sm justify-content-center nav-fill">
        {/* <div className="container"> */}
        <a className="navbar-brand" href="/">
          <img className="joeLogo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-11"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-list-11">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" id="home" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="contact" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
      // <div>
      //   <Navbar light expand="lg">
      //     <NavbarToggler onClick={this.toggle} />
      //     <NavbarBrand className="mx-auto" href="/">
      //       <img className="joeLogo" src={logo} alt="logo" />
      //     </NavbarBrand>
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //         <NavItem>
      //           <NavLink id="home" href="/">
      //             Home
      //           </NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink id="contact" href="/contact">
      //             Contact
      //           </NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}
