import * as React from 'react';
import 'tailwindcss/tailwind.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
    palette: {
      primary: {
        main: '#1f2937'
      }
    }
  });

const PriceSelect = (props: any) => {
  const [value, setValue] = React.useState<number[]>(props.price);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    props.setPrice(newValue as number[]);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box className="flex  flex-col mx-4">
            <h3 className="text-xl text-center text-gray-600 m-4 border-b">Select Price range</h3>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    </ThemeProvider>
  );
}

export default PriceSelect
