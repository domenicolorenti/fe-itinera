import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2937'
    }
  }
});

interface DataSelectProps {
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
}

const DataSelect = (props: DataSelectProps) => {
  const [value, setValue] = useState<Dayjs | null>(props.date);
  
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    props.setDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DateCalendar 
          value={value}
          onChange={handleChange}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default DataSelect