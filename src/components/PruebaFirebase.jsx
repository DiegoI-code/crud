import React, { useEffect } from 'react'
import db from '../service/Firebase'
import { addDoc, collection } from 'firebase/firestore'
//import { getData, sayHi } from "../hooks/useFirebase";
import useFirebase from '../hooks/useFirebase';


const { getData, sayHi, getData2 } = useFirebase();

const PruebaFirebase = () => {

/*     useEffect(() => {
        console.log("PruebaFirebase rendered");
    
      
    }, [])
    

    console.log("PruebaFirebase rendered"); */
  
    const fetchData = async () => {
        const result = await getData();
        if(result.success) {
          console.log("Result: ", result.json);
          console.log("Result success");
        } else {
          // TODO: show error
          console.log("Error fetching data")
        }
    };
 
    const fetchData2 = async () => {
        const result = await getData2();
        console.log("Result: ", result);
        if(result) {
          console.log("Result: ", result.json);
          console.log("Result success");
        } else {
          // TODO: show error
          console.log("Error fetching data")
        }
    };


    sayHi();
   // fetchData();
    fetchData2();

 


  return (
    <div>pruebaFirebase</div>
  )
}

export default PruebaFirebase