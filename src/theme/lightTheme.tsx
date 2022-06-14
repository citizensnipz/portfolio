import { createTheme } from "@mui/material";
import Kanit from '../assets/fonts/Kanit-Regular.ttf';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
      },
      typography: {
        fontFamily: "Kanit"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Kanit';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Kanit'), local('Kanit-Regular'), url(${Kanit}) format('truetype');
            }
            `,
        },
    },
});

export default lightTheme;