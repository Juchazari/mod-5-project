import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../Input/Input';

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-header">
        <h1>
          <Link to="/">LOGO</Link>
        </h1>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <div className="signup-body">
        <h2>Sign In</h2>
        <form>
          <div className="form-input-control first-last-names-inputs">
            <Input type={'text'} placeholder={'First Name'} />
            <div className="input-spacer"></div>
            <Input type={'text'} placeholder={'Last Name'} />
          </div>
          <div className="form-input-control">
            <Input type={'text'} placeholder={'Email address'} />
          </div>
          <div className="form-input-control">
            <Input type={'password'} placeholder={'Password'} />
          </div>
          <Input type={'submit'} value={'Create account'} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
