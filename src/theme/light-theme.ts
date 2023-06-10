import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const nunito = Nunito({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: '53px',
        root: {
          borderRadius: '12px',
          fontWeight: 'bold',
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          background: blue[50],
          ':hover': {
            background: blue[100],
          },
        },
        previousNext: {
          background: blue[50],
          ':hover': {
            background: blue[100],
          },
        },
      },
    },
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
    button: {
      textTransform: 'unset',
    },
  },
  palette: {
    action: {
      hover: 'background: linear-gradient(0deg, #E6F1FC, #E6F1FC)',
    },
    background: {
      default: '#F2F6FA',
    },
    primary: {
      main: '#0073E6',
      light: '#E6F1FC',
    },
  },
});

export default theme;
