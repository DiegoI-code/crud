import React, { useEffect } from 'react'
import db from '../service/Firebase'
import { addDoc, collection } from 'firebase/firestore'
//import { getData, sayHi } from "../hooks/useFirebase";
import useFirebase from '../hooks/useFirebase';
import mockData from '../mock/mockData';
import TableComponent from './TableComponent';


const { getData, sayHi } = useFirebase();

const PruebaFirebase = () => {

  
    
    const fetchData = async () => {
        const result = await getData();
        //console.log("Result: ", result);
        if(result) {
          console.log("Result: ", result);
          console.log("Result success");
        } else {
          // TODO: show error
          console.log("Error fetching data")
        }
    };


    sayHi();
    fetchData();

 


  return (
    <>
      <TableComponent/>
    </>
  )
}

export default PruebaFirebase