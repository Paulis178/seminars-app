import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Container
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { getSeminars, deleteSeminar, updateSeminar, createSeminar } from '../services/api';
import SeminarItem from '../components/SeminarItem';
import SeminarForm from '../components/SeminarForm';
import ConfirmationDialog from '../components/ConfirmationDialog';
import LoadingError from '../components/LoadingError';

const SeminarsPage = () => {
    const [seminars, setSeminars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingSeminar, setEditingSeminar] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [seminarToDelete, setSeminarToDelete] = useState(null);

    // Загрузка данных с сервера
    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const data = await getSeminars();
                setSeminars(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchSeminars();
    }, []);

    // Обработчик удаления семинара
    const handleDelete = async () => {
        try {
            await deleteSeminar(seminarToDelete.id);
            setSeminars(seminars.filter(seminar => seminar.id !== seminarToDelete.id));
            setSeminarToDelete(null);
        } catch (err) {
            setError(err.message);
        }
    };

    // Обработчик сохранения изменений
    const handleSave = async (seminarData) => {
        try {
            if (editingSeminar) {
                const updatedSeminar = await updateSeminar(editingSeminar.id, seminarData);
                setSeminars(seminars.map(sem =>
                    sem.id === updatedSeminar.id ? updatedSeminar : sem
                ));
            } else {
                const newSeminar = await createSeminar(seminarData);
                setSeminars([...seminars, newSeminar]);
            }
            setEditingSeminar(null);
            setOpenForm(false);
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <LoadingError loading={loading} error={error} />;
    if (error) return <LoadingError loading={loading} error={error} />;

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4
            }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Семинары Kosmoteros
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => {
                        setEditingSeminar(null);
                        setOpenForm(true);
                    }}
                    sx={{
                        backgroundColor: 'success.main',
                        '&:hover': { backgroundColor: 'success.dark' }
                    }}
                >
                    Добавить семинар
                </Button>
            </Box>

            {loading || error ? (
                <LoadingError loading={loading} error={error} />
            ) : (
                <Grid container spacing={3}>
                    {seminars.map(seminar => (
                        <Grid item xs={12} sm={6} md={4} key={seminar.id}>
                            <SeminarItem
                                seminar={seminar}
                                onEdit={() => {
                                    setEditingSeminar(seminar);
                                    setOpenForm(true);
                                }}
                                onDelete={() => setSeminarToDelete(seminar)}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Модальные окна остаются без изменений */}
            <SeminarForm
                open={openForm}
                onClose={() => {
                    setOpenForm(false);
                    setEditingSeminar(null);
                }}
                onSave={handleSave}
                seminar={editingSeminar}
            />

            <ConfirmationDialog
                open={Boolean(seminarToDelete)}
                onClose={() => setSeminarToDelete(null)}
                onConfirm={handleDelete}
                title="Удаление семинара"
                message={`Вы уверены, что хотите удалить семинар "${seminarToDelete?.title}"?`}
            />
        </Container>
    );
};

export default SeminarsPage;