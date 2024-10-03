import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './SwitchButton.css'; // Import custom CSS for additional styles

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="" // No label needed
        checked={isChecked}
        onChange={handleToggle}
        className="custom-switch" // Custom class for additional styling
      />
    </Form>
  );
};

export default SwitchButton;
