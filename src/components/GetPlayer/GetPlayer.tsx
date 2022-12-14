import axios from 'axios';
import { doc, getFirestore, setDoc, deleteDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjMGUwMGM2MC01ODUzLTAxM2EtY2FjYi0zNWM2YWU1NzY4MmIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjQyMjY2NTM5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InNxdGF0In0.cSGggAHy9gLhqW2Z5AZdUTreFQZfLxFZKa7-UK1iFxU';
type Props = {
    

 
}

const GetPlayer = ({}: Props) => {
    const db = getFirestore() 

    const [inputPlayer, setInputPlayer] = useState<string>("")
    const [ifError, setIfError] = useState<string>("")
    const [playerMATCHES, setPlayerMATCHES] = useState<any>([])
    
    
    
    let player = `players?filter[playerNames]=${inputPlayer}`;
    const player_url = `${player}`
    const URL = `https://api.pubg.com/shards/steam/`;


    const getPlayer = async () => {
      
        if (inputPlayer.length === 0) {
            setIfError('Please enter player name')
        } else { 
            axios.get(`${URL}${player_url}`, {
                "headers": {
                "authorization": `Bearer ${TOKEN} `,
                "Accept": "application/vnd.api+json"
            }
        }).then(
                (response:any) => {
                setDoc(doc(db, "players", "playerOne"), {

                    playerName: (response.data.data[0].attributes.name),
                    accountID: (response.data.data[0].id),
                    date: Date.now()

                  })
                }).catch(function (error) { if (error.response) 
                    {setIfError(error.response.data.errors[0].detail)}
                })
            }
        }



    return (
        <div>
            <header>THIS IS GET PLAYER</header>
            
                <input onChange={(e) => setInputPlayer(e.target.value)}></input>
                <button onClick={getPlayer}>sök efter spelare</button>
                

<br></br>
            {ifError}
            




        </div>
    );
};

export default GetPlayer