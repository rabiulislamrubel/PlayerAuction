import React from 'react';
import './SinglePlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faList } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SinglePlayer = (props) => {
    const {salary, name, picture} = props.playerDetail
    return (
        <div className='single-player'>
            <img src={picture} alt=""/>
            <h2> {name}</h2>
            <p><FontAwesomeIcon icon={faCoins} /> Salary: ${salary}</p>
            <button onClick={() => props.handler(props.playerDetail)} className='btn btn-success'><FontAwesomeIcon icon={faList} />  Add your List </button>
        </div>
    );
};

export default SinglePlayer;