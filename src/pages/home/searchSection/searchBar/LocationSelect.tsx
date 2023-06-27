import { Autocomplete, TextField, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { APIManager } from "../../../../api/APIManager";
import { APIConfig } from "../../../../api/APIConfig";


const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2937'
    }
  }
});

export default function LocationSelect(props: any) {
  const [cities, setCities] = useState([]);

  const api = new APIManager();

  useEffect(() => {
    api.get(APIConfig.SEARCHADDRESS, "/getCities")
      .then((res) => res.json())
      .then((result) => setCities(result),
        (error) => console.log("Error", error));
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
