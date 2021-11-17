import React from 'react';
import PhoneLoginForm from './phoneLogin';
import FedaratedIdLoginForm from './fedaratedIdLogin';

const LoginPage = () => (
  <div>
    <logo />
    <h2>Login via phone number</h2>
    <p>We will send you OTP in this phone number</p>
    <PhoneLoginForm />
    <p>Or login using</p>
    <FedaratedIdLoginForm />
    <p>Don&apos;t have an account?</p>
    <button type="button">SIGNUP</button>
  </div>
);

export default LoginPage;
