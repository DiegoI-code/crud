import NewEditForm from '../src/components/NewEditForm';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NewEditForm2 from '../src/components/NewEditForm2';

// ----------------------------------------------------------------------


export default function New() {
 
  return (
    
    <Box sx={{ width: "50%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
              <NewEditForm2/>
            </Paper>
      </Box>
    
    
  );
}
