import React, { createContext, useContext, useEffect, useState } from 'react'
import db from '../service/Firebase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import useFirebase from '../hooks/useFirebase';

export const GlobalContext = createContext('');

const {getData} = useFirebase();

const GlobalContextProvider = ({children}) => {

  const [dataCont, setDataCont] = useState([])
  
  const fetchData = async () => {
    const result = await getData();
    if (result) {
      setDataCont(result);
    } else {
      // TODO: show error
      console.log("Error fetching data");
    }
   
  };

   useEffect(() => {

      fetchData();
      
    }, [])



  

  return (
      <GlobalContext.Provider value={dataCont}>
        {children}
      </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;