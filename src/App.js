import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import SeminarsPage from './pages/SeminarsPage';
import SeminarDetailPage from './pages/SeminarDetailPage';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: '#fafafa'
                }}>
                    <Header />
                    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
                        <Routes>
                            <Route path="/" element={<SeminarsPage />} />
                            <Route path="/seminars/:id" element={<SeminarDetailPage />} />
                        </Routes>
                    </Box>
                    <Footer />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;