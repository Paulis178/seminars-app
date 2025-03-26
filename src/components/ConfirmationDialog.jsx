import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@mui/material';

const ConfirmationDialog = ({
    open,
    onClose,
    onConfirm,
    title = "Подтверждение",
    message = "Вы уверены?"
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Отмена</Button>
                <Button onClick={onConfirm} color="error" variant="contained">
                    Подтвердить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;