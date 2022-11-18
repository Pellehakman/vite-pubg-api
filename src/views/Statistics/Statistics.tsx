import React, { useState } from 'react';
import GetPlayer from '../../components/GetPlayer/GetPlayer';
import './Statistics.scss'


import {collection, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/config';



const Statistics =  () => {

    initializeApp(firebaseConfig);
      const db = getFirestore()   
      const colRef = collection(db, 'players')   
      getDocs(colRef)
      .then((snapshot) => {
          let players:any = []
          snapshot.docs.forEach((doc) => {
            players.push({...doc.data(), id: doc.id})
          })
          console.log(players)
      })
      
      

    const [playerID, setPlayerID] = useState<string>("")
   


    return (
        <div className='statistics-container'>
            <header>This is Statistics</header>
            <GetPlayer setPlayerID={setPlayerID}/>
            
        </div>
    );
};

export default Statistics;