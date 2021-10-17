import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6600'
        },
        secondary: {
            main: '#2d2d2d'
        },
        background: {
            default: '#fafafa'
        },
        text: {
            primary: '#424242'
        }
    },
    typography: {
        fontFamily: [
            'Source Sans Pro'
        ],
        h1: {
            fontWeight: 600
        },
        h2: {
            fontWeight: 600
        },
        h3: {
            fontWeight: 600
        },
        h4: {
            fontWeight: 600
        },
        h5: {
            fontWeight: 600
        },
        h6: {
            fontWeight: 600
        },
    }
})