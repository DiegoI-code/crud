import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NewEditForm2 from "../../src/components/NewEditForm2";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Button } from "@mui/material";
import Iconify from "../../src/components/Iconify";
import useFirebase from "../../src/hooks/useFirebase";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function Edit() {
  const [selected, setSelected] = useState();

  /* <Box sx={{ width: "50%" }}>
           <Paper sx={{ width: "100%", mb: 2 }}>
              <NewEditForm2/>
            </Paper>
      </Box> */
  
  const router = useRouter();
  const currentId = router.query.id;
  
  const { getData } = useFirebase();
  
  const fetchData = async () => {
    const result = await getData();
    if (result) {

      const obj = result.find(x => x.id === currentId);
      console.log(obj);
      setSelected(obj);
    } else {
      // TODO: show error
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
    
  }, [])
  
    

 
  

  //getDoc(currentId);

  return (
    
    <>
    <h1>Edit id {currentId}</h1>
    {typeof selected === "undefined" ? (
      <>
        <p>Esperando data de API</p>
        {/* Aca va un skeleton */}
      </>
    ) : (
      <>
      
       <p>Selected name: {selected.name}</p>
        <p>Selected cat: {selected.Category}</p>
        <p>Selected weak: {selected.Weaknesses}</p>
       
      </>

    )}

<NextLink href="/" passHref>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Back to Home
        </Button>
      </NextLink>
  </>







    
        

  );
}
