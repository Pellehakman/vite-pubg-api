import React, { useEffect, useState } from 'react';
import GetPlayer from '../../components/GetPlayer/GetPlayer';
import './Statistics.scss'


import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where} from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/config';
import { nanoid } from 'nanoid';
import { Player } from '../../models/data';


initializeApp(firebaseConfig);

function Statistics(){
  const db = getFirestore() 
      const [playerID, setPlayerID] = useState<string>("")
      const [playerNAME, setPlayerNAME] = useState<string>("")
      const [obj, setObj] = useState<Player[]>([])
      console.log(...obj)

      let singlePlayer = obj.map((f) => <div key={f.id}>{f.playerName}</div>)
      
      // const singleAnimal = obj.map((f) => <div key={f.id}>kuk</div>);
      // console.log(players)
      // const colRef = collection(db, 'players')   
      // getDocs(colRef)
      // .then((snapshot) => {
      //     snapshot.docs.forEach((doc) => {
      //       players.push({...doc.data(), id: doc.id})
      //     }) 
      // })

 
      async function fetchData() {
        let players:any = []
        setObj(players)
        const q = query(collection(db, "players"))
  
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        players.push({...doc.data(), id: doc.id})
      });
      }
    

      useEffect(() =>{
        fetchData()
      },[])
  // console.log(players)

      

// if (docSnap()) {
//   // console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

      
    const createData = async  () => {
       await setDoc(doc(db, "players", nanoid()), {
          playerName: playerNAME,
          accountID: playerID
        }
        )}
      

      
 

    return (
        <div className='statistics-container'>
            <header>This is Statistics</header>
            
            <GetPlayer  />
            <button onClick={createData}>SAVE</button>
            {/* <button onClick={fetchData}>Load</button> */}
            
           <div>
            shit
            {singlePlayer}
           </div>
        </div>
    );
};

export default Statistics;