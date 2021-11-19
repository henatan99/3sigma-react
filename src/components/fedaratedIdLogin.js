/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import facbookLogo from '../assets/facebook.png';
import googleLogo from '../assets/google.png';
// import { useAuth } from '../auth/AuthContext';
import googleSignin from '../auth/GoogleSignIn';
import facebookSignin from '../auth/FacebookSiginIn';

const FedaratedIdLoginForm = () => {
  // const { googleSignin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGoogleSign(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await googleSignin();
      alert('Login Successful');
    } catch {
      setError('Failed to login');
    }

    setLoading(false);
  }

  async function handleFacebookSign(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await facebookSignin();
      alert('Login Successful');
    } catch {
      setError('Failed to login');
      alert('Failed to login');
    }

    setLoading(false);
  }

  return (
    <div className="d-flex flex-row mb-5 federated-login-form">
      <Button type="button" className="p-1 d-flex align-items-center justify-content-center rounded-circle btn-lg fedarated-login-btn" style={{ backgroundColor: '#e7edf1' }} onClick={handleFacebookSign}>
        <img src={facbookLogo} alt="facebook-logo" className="fedarated-login-img" />
      </Button>
      <Button type="button" className="p-1 d-flex align-items-center justify-content-center rounded-circle btn-lg fedarated-login-btn" style={{ backgroundColor: '#e7edf1' }} onClick={handleGoogleSign}>
        <img src={googleLogo} alt="google-logo" className="fedarated-login-img" />
      </Button>
    </div>
  );
};

export default FedaratedIdLoginForm;
