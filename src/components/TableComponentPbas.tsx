import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

interface Data {
  name: string;
  Category: string;
  Abilities: string;
  Weaknesses: string;
  
}

function createData(
  name: string,
  Category: string,
  Abilities: string,
  Weaknesses: string,
): Data {
  return {
    name,
    Category,
    Abilities,
    Weaknesses,
  };
}


export default function TableComponentPbas({tableData} : any) {
  

  console.log("tabledata", tableData);
  console.log("tabledata typeoif", typeof tableData);
  console.log("tabledata.tabledatat", tableData.tableData);
 /*  console.log("passeddata", passedData);
  console.log("passeddata typeoif", typeof passedData);
  console.log("passeddata.tabledatat", passedData.tableData);
  console.log("dataArray", dataArray);
  console.log("typeof dataArray", typeof dataArray);
  console.log("dataKeys", dataKeys);
  console.log("typeof dataKeys", typeof dataKeys); */

  // USAR PASSEDdATA QUE ES UN OBJETO

 
 
  return (
    <>
<p>TableComponentPbas</p>
  </>
    
    );
  }