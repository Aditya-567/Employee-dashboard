import React from 'react';
import logo from './3.jpg';
import emppic from './4.jpg';
import './EmployeeCard.css'; // Import the CSS file for styling

const EmployeeCard = () => {
  return (
    <div className="employee-card">
      <img
        className="employee-photo"
        src={emppic} // Replace with the actual image URL
        alt="Employee"
      />
      <h3 className="employee-title">Employee of the Month</h3>
      <h3 className="employee-name">Rakesh Sharma</h3>
      <p className="employee-role">UI/UX Designer</p>
      <img
        className="employee-illustration"
        src={logo}// Replace with the actual illustration URL
        alt="Illustration"
      />
    </div>
  );
};

export default EmployeeCard;

