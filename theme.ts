'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
   primary: {
      main: "#CC1D2E",
    },
    secondary: {
      main: "#EAEAEA",
    },
    background: {
      default: "#EAEAEA", 
      paper: "#FFFFFF",   
    },
    text: {
      primary: "#252525", 
      secondary: "#757575", 
    },
  },

});

export default theme;