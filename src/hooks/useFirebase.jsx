import { React, useState } from "react";
import db from "../service/Firebase";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
} from "firebase/firestore";
import { useRouter } from 'next/router';






export default function useFirebase() {
  
  //const router = useRouter();
  
  
  
  const getData = async () => {
    let dataArray = [];
    try {
      const q = collection(db, "1");
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        /* console.log("Doc ID", doc.id, "doc data", doc.data()) */
        let dataObj = doc.data();
        dataObj.id = doc.id;
        console.log("dataObj", dataObj);
        dataArray.push(dataObj);
        
      });
      return dataArray;

      /* console.log("resultdata: ", resultData.data)
      return resultData; */
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async ([data]) => {

    try {
        const col = collection(db, "1")
        const add = await addDoc(col, data)
        console.log(add.id);
        //router.push('/');
        alert("Pokemon agregado!");

    } catch (error) {
        console.log(error);
    }


  }

  const delData = async (id) => {
    
    const col = collection(db, "1")
    
    const docRef = col.doc(id);
  
  // Delete the document
  docRef.delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error deleting document: ', error);
    });

  }


  return {
    getData,
    addData,
  };
}
