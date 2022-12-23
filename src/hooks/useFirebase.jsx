import { React, useState } from "react";
import db from "../service/Firebase";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  get,
  doc,
  col,
  deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";

export default function useFirebase() {
  //const router = useRouter();

  const getData = async () => {
    let dataArray = [];
    try {
      const q = collection(db, "1");
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        let dataObj = doc.data();
        dataObj.id = doc.id;
        dataArray.push(dataObj);
      });
      return dataArray;
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async ([data]) => {
    try {
      const col = collection(db, "1");
      const add = await addDoc(col, data);
      console.log(add.id);
      //router.push('/');
      alert("Pokemon agregado!");
    } catch (error) {
      console.log(error);
    }
  };

  const delData = async (id) => {
    //const query = collection(db, "1").where('name', '==', id);
    /* const pokeRef = collection(db, "1"); */

    /* const q = query(pokeRef, where("name", "==", 'Charmander'));
    console.log(q); */

    console.log(id);
    
    

    /* q.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
    }); */
    
    
    
    
    
    /* console.log(["id en delData", id]);
    
    await deleteDoc(doc(db, "1", id)); */

    /* const docRef = col.doc(id); */

    // Delete the document
    /* docRef.delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error deleting document: ', error);
    }); */
  };

  return {
    getData,
    addData,
    delData,
  };
}
