import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Divider,
    IconButton
} from '@mui/material';
import {
    Facebook,
    Instagram,
    Twitter,
    LocationOn,
    Phone,
    Email,
    Spa // Добавлен этот импорт
} from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#f5f5f7',
            py: 6,
            mt: 8
        }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Spa color="primary" sx={{ fontSize: 32, mr: 1 }} />
                            <Typography variant="h6" sx={{
                                fontWeight: 'bold',
                                fontFamily: 'Playfair Display, serif'
                            }}>
                                Kosmoteros Pro
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Профессиональные семинары и обучение для косметологов от ведущих экспертов индустрии.
                        </Typography>
                        <Box>
                            <IconButton sx={{ color: '#3b5998' }}><Facebook /></IconButton>
                            <IconButton sx={{ color: '#e4405f' }}><Instagram /></IconButton>
                            <IconButton sx={{ color: '#1da1f2' }}><Twitter /></IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Меню
                        </Typography>
                        <Link href="#" underline="hover" color="inherit" display="block" mb={1}>Главная</Link>
                        <Link href="#" underline="hover" color="inherit" display="block" mb={1}>Семинары</Link>
                        <Link href="#" underline="hover" color="inherit" display="block" mb={1}>Эксперты</Link>
                        <Link href="#" underline="hover" color="inherit" display="block">Отзывы</Link>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Информация
                        </Typography>
                        <Link href="#" underline="hover" color="inherit" display="block" mb={1}>О компании</Link>
                        <Link href="#" underline="hover" color="inherit" display="block" mb={1}>Блог</Link>
                        <Link href="#" underline="hover" color="inherit" display="block" mb={1}>FAQ</Link>
                        <Link href="#" underline="hover" color="inherit" display="block">Партнеры</Link>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Контакты
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOn color="primary" sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                Москва, ул. Косметологическая, 15
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Phone color="primary" sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                +7 (495) 123-45-67
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Email color="primary" sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                info@kosmoteros-pro.ru
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Kosmoteros Pro. Все права защищены.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;