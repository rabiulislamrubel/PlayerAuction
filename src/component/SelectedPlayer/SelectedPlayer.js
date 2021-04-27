import React from 'react';
import SelectSingleDetails from '../SelectSingleDetails/SelectSingleDetails';
import './SelectedPlayer.css';

const SelectedPlayer = (props) => {
  const totalPlayerCost = props.selectPlayer.reduce(
    (total, value) => (total += value.salary),
    0
  );
  return (
    <div>
      <div className='selected-player'>
        <h2>Player are Selected: {props.selectPlayer.length}</h2>
        <h4>Selected Player Cost: ${totalPlayerCost}</h4>
      </div>
      <div className='singel-details'>
        {props.selectPlayer.map((spd) => (
          <SelectSingleDetails
            details={spd}
            key={spd._id}
          ></SelectSingleDetails>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayer;
