import React from 'react';
import facbookLogo from '../assets/facebook.png';
import googleLogo from '../assets/google.png';

const FedaratedIdLoginForm = () => (
  <div className="federated-login-form">
    <button type="button" className="fedarated-login-btn">
      <img src={facbookLogo} alt="facebook-logo" className="fedarated-login-img" />
    </button>
    <button type="button" className="fedarated-login-btn">
      <img src={googleLogo} alt="google-logo" className="fedarated-login-img" />
    </button>
  </div>
);

export default FedaratedIdLoginForm;
