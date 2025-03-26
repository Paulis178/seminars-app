import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9c27b0',
            light: '#ba68c8',
            dark: '#7b1fa2'
        },
        secondary: {
            main: '#ff4081',
            light: '#ff79b0',
            dark: '#c60055'
        },
        success: {
            main: '#4caf50',
            dark: '#388e3c',
            light: '#81c784'
        },
        background: {
            default: '#fafafa'
        }
    },
    typography: {
        fontFamily: [
            '"Roboto"',
            '"Helvetica"',
            '"Arial"',
            'sans-serif'
        ].join(','),
        h1: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500
        },
        h4: {
            fontFamily: '"Playfair Display", serif'
        },
        h5: {
            fontFamily: '"Playfair Display", serif'
        },
        h6: {
            fontFamily: '"Playfair Display", serif'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 6px 20px rgba(0,0,0,0.05)'
                }
            }
        }
    }
});

export default theme;