import React, { useEffect, useState } from 'react';
import GetPlayer from '../../components/GetPlayer/GetPlayer';
import './Statistics.scss'


import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where} from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/config';
import { nanoid } from 'nanoid';
import { Player } from '../../models/data';

type Props = {

}


function Statistics({}: Props){
  const db = getFirestore() 
  const [obj, setObj] = useState<Player[]>([])


      useEffect(() => {
        ;(async () => {
          const colRef = collection(db, 'players')
          const snapshots = await getDocs(colRef)
          const docs = snapshots.docs.map(doc => {
            const data = doc.data()
                  data.id = doc.id
                  return data
          })
          setObj(docs)
        }) ()
      })
      


    return (
        <div className='statistics-container'>
            <header>This is Statistics</header>
            
            <GetPlayer/>
            
            
           <div>
            <h2> Search Results </h2>
            {obj.map((f) => <div key={f.id}>{f.playerName}</div>)}
           
           </div>
        </div>
    );
};

export default Statistics;