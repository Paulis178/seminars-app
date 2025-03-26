import React from 'react';
import {
    CircularProgress,
    Alert,
    Box,
    Typography
} from '@mui/material';

const LoadingError = ({ loading, error }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px',
            flexDirection: 'column',
            gap: 2
        }}>
            {loading && (
                <>
                    <CircularProgress />
                    <Typography>Загрузка данных...</Typography>
                </>
            )}
            {error && (
                <Alert severity="error" sx={{ width: '100%', maxWidth: '500px' }}>
                    {error}
                </Alert>
            )}
        </Box>
    );
};

export default LoadingError;