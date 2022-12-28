import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useFirebase from "../../src/hooks/useFirebase";
import { useEffect, useState } from "react";
import EditForm from "../../src/components/EditForm";
import LoadingIcon from "../../src/components/loadingIcon";
import { useRouter } from "next/router";


// ----------------------------------------------------------------------

export default function Edit() {
  const [selected, setSelected] = useState();
  const router = useRouter();
  const currentId = router.query.id;
  
  const { getData } = useFirebase();
  
  const fetchData = async () => {
    const result = await getData();
    if (result) {

      const obj = result.find(x => x.id === currentId);
      setSelected(obj);
    } else {
      // TODO: show error
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
    
  }, );
  
 

  return (
    
    <>
    <Box sx={{ width: "50%" }}>
    <Paper sx={{ width: "100%", mb: 2 }}>
    {typeof selected === "undefined" ? (
      <>
        <LoadingIcon/>
      </>
    ) : (
      <>
      
      
        <EditForm data={selected}/>
       
      </>

    )}


      </Paper>
      </Box> 
  </>







    
        

  );
}
