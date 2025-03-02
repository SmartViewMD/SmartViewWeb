import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { FormErrors } from './FormErrors';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6 && value == 'secret2021';
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    passwordValid: passwordValid
                  }, this.validateForm)
        ;
  }

  validateForm() {
    this.setState({formValid: this.state.passwordValid})
    if(this.state.passwordValid == true){
        window.location.href="/ppt.html"
    }
    ;
  }
  

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
        <div className='center'>
      <form className="demoForm">
       
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>

        
      </form>
      </div>
    )
  }
}

export default Form;

//<button className="btn btn-primary" disabled={!this.state.formValid} >Submit</button>