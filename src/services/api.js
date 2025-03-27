import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL ||
    (process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api'
        : 'https://seminars-app-4qgk.onrender.com/api/seminars');

export const getSeminars = async () => {
    try {
        const response = await fetch(`https://seminars-app-4qgk.onrender.com/api/seminars`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

// Создание нового семинара
export const createSeminar = async (seminarData) => {
    try {
        const response = await axios.post(API_URL, seminarData);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при создании семинара');
    }
};

// Обновление семинара
export const updateSeminar = async (id, seminarData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, seminarData);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при обновлении семинара');
    }
};

// Удаление семинара
export const deleteSeminar = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Ошибка при удалении семинара');
    }
};

export const getSeminarById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при загрузке семинара');
    }
};