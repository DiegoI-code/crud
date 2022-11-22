import React from 'react'
import db from '../service/Firebase'
import { addDoc, collection, getFirestore, getDocs } from 'firebase/firestore'


export default function useFirebase () {
  
  
  /* const getData2 = async () => {
    try {
      const db = getFirestore();

    
    await getDocs(db).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("no data")
      } else {
        
        console.log(snapshot);
      }
    })
    } catch (error) {
      console.log(error)
    }

  }; */
  
  const getData2 = async () => {
    try {
      const result = collection(db, '1');
      let resultData = await getDocs(result);
      console.log(resultData.data)
      return resultData;
  
    } catch (error) {
      console.log(error)
    }

  };




  const getData = async () => {

    try {
        const col = collection(db, "1")
        //const order = await addDoc(col, datos)
        console.log("Accediendo a coleccion");
        console.log("Database: ", col);

    } catch (error) {
        console.log(error);
    }


  }

  const sayHi = () => {
    console.log("Hi!");
  }
  
  return {
    getData,
    getData2,
    sayHi,
    
  };
}
