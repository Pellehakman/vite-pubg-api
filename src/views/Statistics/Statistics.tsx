import React, { useState } from 'react';
import GetPlayer from '../../components/GetPlayer/GetPlayer';

const Statistics = () => {

    const [playerID, setPlayerID] = useState<string>("")
    console.log('on stats', playerID)
    return (
        <div>
            <header>This is Statistics</header>
            <GetPlayer setPlayerID={setPlayerID}/>
            
        </div>
    );
};

export default Statistics;