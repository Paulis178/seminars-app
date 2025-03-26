import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
    Box,
    CardMedia,
    Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useNavigate } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

const SeminarItem = ({ seminar, onEdit, onDelete }) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ButtonBase
                onClick={() => navigate(`/seminars/${seminar.id}`)}
                sx={{ display: 'block', textAlign: 'left' }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={seminar.photo}
                    alt={seminar.title}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {seminar.title}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                        <Chip
                            icon={<EventIcon />}
                            label={seminar.date}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            icon={<ScheduleIcon />}
                            label={seminar.time}
                            size="small"
                            color="secondary"
                            variant="outlined"
                        />
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {seminar.description}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={onEdit}
                        fullWidth
                        size="small"
                        sx={{
                            backgroundColor: 'primary.light',
                            '&:hover': { backgroundColor: 'primary.main' }
                        }}
                    >
                        Редактировать
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={onDelete}
                        fullWidth
                        size="small"
                    >
                        Удалить
                    </Button>
                </Stack>
            </Box>
        </Card>
    );
};

export default SeminarItem;