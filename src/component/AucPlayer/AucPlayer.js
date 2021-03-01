import React from 'react';
import { useEffect, useState } from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import SinglePlayer from '../SinglePlayerList/SinglePlayer';
import './AucPlayer.css';

const AucPlayer = () => {
    const [playerData, setPlayerData] = useState([])
    const [singlePlayerData, setSinglePlayer]=useState([]);

    useEffect(()=>{
      fetch('http://www.json-generator.com/api/json/get/cpyqBqPQfC?indent=2')
      .then(res => res.json())
      .then(data => setPlayerData(data))
    },[])

    const playerSelectHandle = (event) => {
        const newData = [...singlePlayerData, event];
        setSinglePlayer(newData);
    }

    return (
        <div className='player'> 
            <div className='auc-player'>
                {
                    playerData.map(single => <SinglePlayer playerDetail={single} key={single._id} handler ={playerSelectHandle}></SinglePlayer>)
                }
            </div>
            <div className='select-player'>
                <SelectedPlayer selectPlayer = {singlePlayerData}></SelectedPlayer>
            </div>
        </div>
    )
};

export default AucPlayer;