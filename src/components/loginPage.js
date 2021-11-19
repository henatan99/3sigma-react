import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PhoneLoginForm from './phoneLogin';
import FedaratedIdLoginForm from './fedaratedIdLogin';
import SigmaLogo from '../assets/3sigma-logo.png';

const LoginPage = () => (
  <Card className="d-flex" style={{ backgroundColor: '#e7edf1', maxWidth: '400px' }}>
    <Card.Body className="d-flex flex-column justify-content-center align-items-center mt-5">
      <img src={SigmaLogo} alt="3sigma-logo" style={{ width: '60%' }} className="mb-4" />
      <h2 className="pt-4 text-center mb-4">Login via phone number</h2>
      <p className="text-center">We will send you OTP in this phone number</p>
      <PhoneLoginForm />
      <p className="text-center">Or login using</p>
      <FedaratedIdLoginForm />
      <p className="text-center">Don&apos;t have an account?</p>
      <Button className="text-center" style={{ backgroundColor: '#e7edf1', border: 'none', color: '#58A6D7' }}>SIGNUP</Button>
    </Card.Body>
  </Card>
);

export default LoginPage;
