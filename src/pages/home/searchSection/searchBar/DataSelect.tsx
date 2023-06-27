import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';
import { Dayjs } from 'dayjs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2937'
    }
  }
});

interface DataSelectProps {
  date: string;
  setDate: (date: string) => void;
}

const DataSelect = (props: DataSelectProps) => {
  const [value, setValue] = useState<string>(props.date);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    props.setDate(newValue);
  };

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <ThemeProvider theme={theme}>
    //     <DateCalendar 
    //       value={value}
    //       onChange={handleChange}
    //     />
    //   </ThemeProvider>
    // </LocalizationProvider>
      <input
        className="w-full m-2 focus:outline-none "
        type="date" 
        value={value}
        onChange={(ev) => handleChange(ev.target.value)}
      />
  );
};

export default DataSelect