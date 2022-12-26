import { React, useState } from "react";
import db from "../service/Firebase";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
  get,
  doc,
  col,
  deleteDoc,
} from "firebase/firestore";


export default function useFirebase() {
  /* const router = useRouter(); */

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

  const getDoc = async (id) => {
    console.log("id en getDoc, ", id);
    
    
  };

  const addData = async ([data]) => {
    try {
      const col = collection(db, "1");
      const add = await addDoc(col, data);
      console.log(add.id);

      alert("Pokemon agregado!");
    } catch (error) {
      console.log(error);
    }
  };

  const delData = async (id) => {
    console.log("elemento en delData", id);
    await deleteDoc(doc(db, "1", id));
  };

  return {
    getData,
    addData,
    delData,
    getDoc,
  };
}
