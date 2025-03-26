import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Container,
    CardMedia,
    Chip,
    Stack,
    Paper,
    Divider
} from '@mui/material';
import {
    Event,
    Schedule,
    LocationOn,
    ArrowBack,
    Person
} from '@mui/icons-material';
import { getSeminarById } from '../services/api';

const SeminarDetailPage = () => {
    const { id } = useParams();
    const [seminar, setSeminar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSeminar = async () => {
            try {
                const data = await getSeminarById(id);
                setSeminar(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSeminar();
    }, [id]);

    if (loading) return <Typography>Загрузка...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!seminar) return <Typography>Семинар не найден</Typography>;

    return (
        <Container maxWidth="lg">
            <Button
                startIcon={<ArrowBack />}
                href="/"
                sx={{ mb: 3 }}
            >
                Назад к списку
            </Button>

            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {seminar.title}
                </Typography>

                <CardMedia
                    component="img"
                    height="400"
                    image={seminar.photo}
                    alt={seminar.title}
                    sx={{ borderRadius: 2, mb: 3 }}
                />

                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Chip icon={<Event />} label={seminar.date} />
                    <Chip icon={<Schedule />} label={seminar.time} />
                    <Chip icon={<LocationOn />} label="Онлайн" />
                    <Chip icon={<Person />} label="Доктор Иванова" />
                </Stack>

                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
                    {seminar.description}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Программа семинара:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                    <li>Введение в тему (30 минут)</li>
                    <li>Практическая демонстрация (1 час)</li>
                    <li>Ответы на вопросы (30 минут)</li>
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        backgroundColor: 'primary.main',
                        '&:hover': { backgroundColor: 'primary.dark' }
                    }}
                >
                    Записаться на семинар
                </Button>
            </Paper>
        </Container>
    );
};

export default SeminarDetailPage;