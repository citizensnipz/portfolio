import { createTheme } from "@mui/material";
import Walkway from '../assets/fonts/Walkway-UltraBold.ttf';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
      },
      typography: {
        fontFamily: "Walkway"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Walkway';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Walkway'), local('Walkway-UltraBold'), url(${Walkway}) format('truetype');
            }
            `,
        },
    },
});

export default lightTheme;