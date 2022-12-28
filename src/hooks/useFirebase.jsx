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
  setDoc,
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

    
  };

  const addData = async ([data]) => {
    try {
      const col = collection(db, "1");
      const add = await addDoc(col, data);

      //alert("Pokemon agregado!");
    } catch (error) {
      console.log(error);
    }
  };
  
  const editData = async ([data]) => {
    try {
     

      await setDoc(doc(db, "1", data.id), {
        name: data.name,
        Category: data.Category,
        Abilities: data.Abilities,
        Weaknesses: data.Weaknesses
      });


    } catch (error) {
      console.log("Edit failed! ", error);
    } 
  };

  const delData = async (id) => {
    await deleteDoc(doc(db, "1", id));
  };

  return {
    getData,
    addData,
    delData,
    getDoc,
    editData,
  };
}
