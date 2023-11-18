// LoginForm.jsx

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Media.css';
import AlertBox from './AlertBox';
import TextComponent from './TextLink';
import Footer from './Footer2';
import Copyright from './Footer3';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogType, setDialogType] = useState('');

  const handleLogin = () => {
    
    if (loginUsername === 'user' && loginPassword === 'password') {
      navigate('./carousal');
    } else {
      setLoginError(true);
    }
  };

  const handleLoginUsernameChange = (e) => {
    setLoginUsername(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleToggleLoginPasswordVisibility = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  const handleRegisterUsernameChange = (e) => {
    setRegisterUsername(e.target.value);
  };

  const handleRegisterPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const handleToggleRegisterPasswordVisibility = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };
  
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    // Check if the input fields are empty
    if (!registerUsername || !registerPassword) {
      setDialogMessage('Error: Please fill out all fields.');
      setDialogType('error');
      setShowDialog(true);
      return;
    }

    // Add your registration logic here

    // Show a success alert
    setDialogMessage('Registration successful!');
    setDialogType('success');
    setShowDialog(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Check if the input fields are empty
    if (!loginUsername || !loginPassword) {
      setDialogMessage('Error: Please fill out all fields.');
      setDialogType('error');
      setShowDialog(true);
      return;
    }

    // Check if the entered username and password match the registered values
    if (loginUsername === registerUsername && loginPassword === registerPassword) {
      // Show a success alert
      setDialogMessage('Login successful!');
      setDialogType('success');
      setShowDialog(true);
    } else {
      // Show an error alert
      setDialogMessage('Login failed. Username or password is incorrect.');
      setDialogType('error');
      setShowDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <div className="login-form-container">
        <form className="login-form login-section">
          <h2 className='login-title'>Login</h2>
          <label className='login-label'>
            Username or email address *
            <input type="text" className='login-ipt' value={loginUsername} onChange={handleLoginUsernameChange} autoComplete="off" required />
          </label>
          <label className='login-label'>
            Password*
            <input
              type={showLoginPassword ? 'text' : 'password'}
              className='login-ipt'
              value={loginPassword}
              onChange={handleLoginPasswordChange}
              autoComplete="off"
              required
            />
            <span onClick={handleToggleLoginPasswordVisibility} className='eye-icon'>
              {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
          <button type="submit" className='btn-login' onClick={handleLogin}>
            Login
          </button>
        </form>

        <form className="login-form register-section">
          <h2 className='login-title'>Register</h2>
          <label className='login-label'>
            Username or email address *
            <input type="text" className='login-ipt' value={registerUsername} onChange={handleRegisterUsernameChange} autoComplete="off" required />
          </label>
          <label className='login-label'>
            Password*
            <input
              type={showRegisterPassword ? 'text' : 'password'}
              className='login-ipt'
              value={registerPassword}
              onChange={handleRegisterPasswordChange}
              autoComplete="off"
              required
            />
            <span onClick={handleToggleRegisterPasswordVisibility} className='eye-icon'>
              {showRegisterPassword ? <FaEyeSlash  className='login-icon-show'/> : <FaEye className='login-icon-show'/>}
            </span>
          </label>
          <button type="submit" className='btn-login' onClick={handleRegistrationSubmit}>
            Register
          </button>
        </form>
      </div>
      <TextComponent />
      <Footer />
      <Copyright />

      {showDialog && (
        <AlertBox
          message={dialogMessage}
          type={dialogType}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default LoginForm;
