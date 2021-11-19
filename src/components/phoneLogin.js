import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// import PhoneForm from './phoneForm';

const PhoneLoginForm = () => {
  const [value, setValue] = useState();
  // const handleChange = () => {
  //   setValue();
  // };
  // const placeholder = 'Enter your phone';

  return (

    <Form className="mb-4">
      <Form.Group id="phone" className="input mb-3">
        {/* <Form.Control type="input" placeholder={placeholder} /> */}
        <PhoneInput
          placeholder="Enter phone number"
          onChange={setValue}
          value={value}
          style={{ backgroundColor: 'white', padding: '2px', border: 'none' }}
        />
        <p>{value}</p>
      </Form.Group>
      <Button type="submit" className="w-100" style={{ backgroundColor: '#0A1636' }}>LOGIN</Button>
      {/* <PhoneForm /> */}
    </Form>
  );
};

export default PhoneLoginForm;
