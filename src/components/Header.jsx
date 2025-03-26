import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    CssBaseline
} from '@mui/material';
import { Spa, CalendarMonth, Contacts } from '@mui/icons-material';

const Header = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static" sx={{
                background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                boxShadow: 'none',
                py: 1
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                            <Spa sx={{ fontSize: 32, mr: 1 }} />
                            <Typography variant="h6" sx={{
                                fontWeight: 'bold',
                                fontFamily: 'Playfair Display, serif'
                            }}>
                                Kosmoteros Pro
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: 'flex', ml: 5 }}>
                            <Button
                                color="inherit"
                                startIcon={<CalendarMonth />}
                                sx={{
                                    mr: 3,
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                }}
                            >
                                Семинары
                            </Button>
                            <Button
                                color="inherit"
                                startIcon={<Contacts />}
                                sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                            >
                                Контакты
                            </Button>
                        </Box>

                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                fontWeight: 'bold',
                                px: 3,
                                borderRadius: 2,
                                boxShadow: '0 4px 12px rgba(156, 39, 176, 0.3)'
                            }}
                        >
                            Личный кабинет
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;