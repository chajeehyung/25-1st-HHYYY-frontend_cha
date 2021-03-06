import React, { Component } from 'react';
import SignupForm from './SignUpForm/SignUpForm';
import './SignUp.scss';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <SignupForm />
      </div>
    );
  }
}

export default withRouter(Signup);
