import { Autocomplete, TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2937'
    }
  }
});

export default function LocationSelect() {
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        className="w-full my-2"
        disablePortal
        id="combo-box-demo"
        options={cities}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
    </ThemeProvider>
  );
}

const cities = [
  "Ancona",
  "Andria",
  "Arezzo",
  "Bari",
  "Bergamo",
  "Bologna",
  "Bolzano",
  "Brescia",
  "Brindisi",
  "Cagliari",
  "Caserta",
  "Catania",
  "Cesena",
  "Como",
  "Cosenza",
  "Cremona",
  "Crotone",
  "Ferrara",
  "Firenze",
  "Foggia",
  "Forlì",
  "Frosinone",
  "Genova",
  "Gorizia",
  "Grosseto",
  "Imola",
  "La Spezia",
  "Lamezia Terme",
  "Latina",
  "Lecce",
  "Livorno",
  "Lucca",
  "Macerata",
  "Mantova",
  "Massa",
  "Matera",
  "Messina",
  "Milano",
  "Modena",
  "Monza",
  "Napoli",
  "Novara",
  "Nuoro",
  "Olbia",
  "Oristano",
  "Padova",
  "Palermo",
  "Parma",
  "Perugia",
  "Pesaro",
  "Pescara",
  "Piacenza",
  "Pisa",
  "Pistoia",
  "Pordenone",
  "Potenza",
  "Prato",
  "Ravenna",
  "Reggio Calabria",
  "Reggio Emilia",
  "Rimini",
  "Roma",
  "Rovigo",
  "Salerno",
  "San Severo",
  "Sassari",
  "Savona",
  "Siena",
  "Siracusa",
  "Taranto",
  "Teramo",
  "Terni",
  "Torino",
  "Trapani",
  "Trento",
  "Treviso",
  "Trieste",
  "Udine",
  "Varese",
  "Venezia",
  "Verbania",
  "Vercelli",
  "Verona",
  "Vicenza",
  "Viterbo",
];
