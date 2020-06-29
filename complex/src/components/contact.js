import React from 'react';
import '../css/contact.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

const defaultState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
  };
  
  class Contact extends React.Component {
    state = defaultState;
  
    handleChange = (event) => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        //Ternary operator
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value,
      });
    };
  
    // Checking if form requirements are met
    validate = () => {
      let nameError = "";
      let emailError = "";
  
      if (!this.state.name) {
        nameError = "Name is empty";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "Invalid email. Must contain @";
      }
  
      if (nameError || emailError) {
        this.setState({ nameError, emailError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        //Clearing form
      this.setState(defaultState);
      }
    };
    render() {
      return (
        <div>
          <Nav />
          <section id="contact-form" className="contactForm">
            <div className="container">
              <h1 className="formHeading">Contact Us</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label for="name">Name</label>
                  <div className="validate">{this.state.nameError}</div>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
  
                <div className="form-group">
                  <label for="email">Email</label>
                  <div className="validate">{this.state.emailError}</div>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
  
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    placeholder="We would love to hear your feedback!"
                    name="message"
                  ></textarea>
                </div>
  
                <button type="submit" className="btn1">
                  Submit
                </button>
              </form>
            </div>
          </section>
          <Footer />
        </div>
      );
    }
  }
  
  export default Contact;