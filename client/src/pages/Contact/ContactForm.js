import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './ContactForm.css';
import Main from '../../components/Jumbotron';

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        // alert('Message Sent.');
        Swal.fire({
          type: 'success',
          title: 'Niiiiiice!',
          text: 'Message Sent',
          footer: 'Joe will get back to you shortly'
        });
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        // alert('Message failed to send.');
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Please try again'
        });
      }
    });
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (
      <React.Fragment>
        <Main />
        <div className="contact">
          <div className="col-sm-10 offset-sm-1">
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="name">First name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="name">Last name</label>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can I help? *</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  required
                />
              </div>
              <button type="submit" className="btn" id="button">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;