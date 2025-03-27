import axios from 'axios';

const API_URL = 'https://seminars-app-4qgk.onrender.com/api';

export const getSeminars = async () => {
    const response = await fetch(`${API_URL}/seminars`, {
        headers: {
            'Accept': 'application/json',
            'Host': 'seminars-app-4qgk.onrender.com' // Явно указываем Host
        }
    });
    return await response.json();
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