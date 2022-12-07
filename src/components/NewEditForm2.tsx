import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NextLink from 'next/link';
import { Button } from "@mui/material";
import Iconify from './Iconify';

export default function NewEditForm2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        New Pokemon
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            /* autoComplete="given-name" */
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            fullWidth
            /* autoComplete="family-name" */
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ability"
            name="ability"
            label="Ability"
            fullWidth
            /* autoComplete="shipping address-line1" */
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField  
            required
            id="weakness"
            name="weakness"
            label="Weakness"
            fullWidth
            /* autoComplete="shipping address-line2" */
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <NextLink href='/' passHref>
              <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                Back to Home
              </Button>
  </NextLink>
        <NextLink href='/' passHref>
              <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                Back to Home
              </Button>
  </NextLink>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}