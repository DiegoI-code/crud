import React, { useEffect, useState } from 'react'
import db from '../service/Firebase'
import { addDoc, collection } from 'firebase/firestore'
//import { getData, sayHi } from "../hooks/useFirebase";
import useFirebase from '../hooks/useFirebase';
import mockData from '../mock/mockData';
import TableComponent from './TableComponent';
import TableComponentPbas from './TableComponentPbas';


const { getData, sayHi } = useFirebase();

const PruebaFirebase = () => {

const [fetchedData, setfetchedData ] = useState();
    
    const fetchData = async () => {
        const result = await getData();
        //console.log("Result: ", result);
        if(result) {
          console.log("Result: ", result);
          console.log("Result success");
          setfetchedData(result);
        } else {
          // TODO: show error
          console.log("Error fetching data")
        }
    };


    sayHi();
    useEffect(() => {
      fetchData();
    }, []);
    

 //console.log(fetchedData);

  return (
    <>
    {typeof fetchedData === "undefined" ? 
    <>
      <p>Mockdata: no cargo data de API</p>
      {/* <TableComponent tableData={mockData}/> */} 
      </>
       : 
      <TableComponent tableData={fetchedData}/>
      
     }
            
    </>
  )
}

export default PruebaFirebase