import React, { useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase";
import LoadingIcon from "./loadingIcon";
import TableComponent from "./TableComponent";



const PruebaFirebase = () => {
  
  const { getData } = useFirebase();
  const [fetchedData, setfetchedData] = useState();

  const fetchData = async () => {
    const result = await getData();
    if (result) {
      setfetchedData(result);
    } else {
      // TODO: show error
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {typeof fetchedData === "undefined" ? (
        <>
          
          <LoadingIcon/>
          
        </>
      ) : (
        <TableComponent tableData={fetchedData} />
      )}
    </>
  );
};

export default PruebaFirebase;
