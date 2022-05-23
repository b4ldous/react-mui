import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.status.danger,
    '&.Mui-checked': {
      color: theme.status.danger,
    },
  }));
  
  const theme = createTheme({
    status: {
      danger: green[500],
    },
  });

const CustomStyles = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox defaultChecked />
    </ThemeProvider>
  )
}

export default CustomStyles