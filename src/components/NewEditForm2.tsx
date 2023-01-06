import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NextLink from "next/link";
import { Button } from "@mui/material";
import Iconify from "./Iconify";
import useFirebase from "../hooks/useFirebase";
import { useRouter } from "next/router";
import populateDataMock from "../mock/populateData";

interface Data {
  id: string;
  name: string;
  Category: string;
  Abilities: string;
  Weaknesses: string;
}

export default function NewEditForm2() {
  const { addData } = useFirebase();
  const [data, setData] = React.useState({});
  const [disabled, setDisabled] = React.useState(true);
  const [added, setAdded] = React.useState(false);
  const router = useRouter();
  const mockData = populateDataMock();


  React.useEffect(() => {
    console.log(data)
    if (typeof data != "undefined") {
      if (data.name && data.name != "" && data.Category && data.Category != "" && data.Abilities && data.Abilities != "" && data.Weaknesses && data.Weaknesses != "") {
        setDisabled(false)
      } else {setDisabled(true)}
    } else {setDisabled(true)}
       
  }, [data])
  
  
  const onChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    //validateButton();
  };

  const handleClick = () => {
    addData([data]);
    setAdded(true);
    router.push("/");
  };

  const handleClickRepo = () => {
    mockData.populateDataMock.forEach((element) => {
      addData([element]);
    });

  };

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
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Category"
            name="Category"
            label="Category"
            fullWidth
            /* autoComplete="family-name" */
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Abilities"
            name="Abilities"
            label="Abilities"
            fullWidth
            /* autoComplete="shipping address-line1" */
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Weaknesses"
            name="Weaknesses"
            label="Weaknesses"
            fullWidth
            /* autoComplete="shipping address-line2" */
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleClick}
            disabled={disabled}
          >
            Confirm
          </Button>
          {/* <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleClickRepo}
          >
            Repopulate!
          </Button> */}
          <NextLink href="/" passHref>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Back to Home
            </Button>
          </NextLink>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
