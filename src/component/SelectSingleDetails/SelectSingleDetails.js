import React from 'react';
import './SelectSingleDetails.css';

const SelectSingleDetails = (props) => {
  const { name, picture, salary } = props.details;
  return (
    <div className='select-single'>
      <img src={picture} alt='' />
      <h2> {name}</h2>
      <p>Salary: ${salary}</p>
    </div>
  );
};

export default SelectSingleDetails;
