import { Autocomplete, TextField, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { APIHandler } from "../../../../api/ProfileAPI";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2937'
    }
  }
});

export default function LocationSelect(props: any) {
  const [cities, setCities] = useState([]);

  const api = new SearchAPI();

  useEffect(() => {
    fetch("http://192.168.1.151:8081/getCities")
      .then((res) => res.json())
      .then((result) => setCities(result),
        (error) => console.log("Error fetching supported crypto "));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        className="w-full my-2"
        disablePortal
        id="combo-box-demo"
        options={cities}
        onChange={(ev, value) => props.setLocation(value)}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
    </ThemeProvider>
  );
}
