import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Stack
} from '@mui/material';

const SeminarForm = ({ open, onClose, onSave, seminar }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        description: '',
        photo: ''
    });

    useEffect(() => {
        if (seminar) {
            setFormData({
                title: seminar.title,
                date: seminar.date,
                time: seminar.time,
                description: seminar.description,
                photo: seminar.photo
            });
        } else {
            setFormData({
                title: '',
                date: '',
                time: '',
                description: '',
                photo: ''
            });
        }
    }, [seminar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {seminar ? 'Редактировать семинар' : 'Добавить новый семинар'}
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <Stack spacing={3} sx={{ mt: 1 }}>
                        <TextField
                            label="Название семинара"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Дата (ДД.ММ.ГГГГ)"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Время (ЧЧ:ММ)"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Ссылка на фото"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Описание"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Отмена</Button>
                    <Button type="submit" variant="contained">
                        Сохранить
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default SeminarForm;